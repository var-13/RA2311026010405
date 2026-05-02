import React, { useEffect, useState } from "react";
import { getNotifications } from "./api/notifications";
import { sortNotifications } from "./utils/sort";
// import { Log } from "./logging_middleware/logger";

function App() {
  const [allData, setAllData] = useState<any[]>([]);
  const [topData, setTopData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Log("frontend", "info", "page", "App loaded");

        const data = await getNotifications();

        setAllData(data);

        const top = sortNotifications(data);
        setTopData(top);

        // Log("frontend", "info", "component", "Data processed");
      } catch (error) {
        // Log("frontend", "error", "component", "Error loading data");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Top 10 Priority Notifications</h2>

      {topData.map((item, index) => (
        <div key={index}>
          <b>{item.Type}</b> - {item.Message} <br />
          <small>{item.Timestamp}</small>
        </div>
      ))}

      <hr />

      <h2>All Notifications</h2>

      {allData.map((item, index) => (
        <div key={index}>
          {item.Type} - {item.Message}
        </div>
      ))}
    </div>
  );
}

export default App;