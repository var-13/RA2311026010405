import React, { useEffect, useState } from "react";
import { getNotifications } from "./api/notifications";
import { sortNotifications } from "./utils/sort";
// import { Log } from "./logging_middleware/logger"; // keep disabled

function App() {
  const [allData, setAllData] = useState<any[]>([]);
  const [topData, setTopData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [isUsingMockData, setIsUsingMockData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotifications();
        setAllData(data);
        
        // Check if this is mock data (if it contains our known mock messages)
        const isMock = data.some((item) => item.Message?.includes("campus recruitment") || item.Message?.includes("interview"));
        setIsUsingMockData(isMock);

        const top = sortNotifications(data);
        setTopData(top);
      } catch (error) {
        console.log("Error loading data");
        setIsUsingMockData(true);
      }
    };

    fetchData();
  }, []);

  // Filter data based on selected type
  const filteredData = type
    ? allData.filter((item) => item.Type === type)
    : allData;

  // Pagination
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Notification System</h1>

      {/* Status Banner */}
      {isUsingMockData && (
        <div
          style={{
            backgroundColor: "#fff3cd",
            border: "1px solid #ffc107",
            color: "#856404",
            padding: "12px",
            borderRadius: "4px",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          ⚠️ Using demo data (API token expired - please update token in src/api/notifications.ts)
        </div>
      )}

      {/* Filter Section */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <label style={{ fontWeight: "bold" }}>Filter by Type:</label>
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setPage(1);
          }}
          style={{
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          <option value="">All Types</option>
          <option value="Placement">Placement</option>
          <option value="Result">Result</option>
          <option value="Event">Event</option>
        </select>
      </div>

      <h2>Top 10 Priority Notifications</h2>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        {topData.length > 0 ? (
          topData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "12px",
                marginBottom: "10px",
                borderLeft: "4px solid #007bff",
                borderRadius: "4px",
              }}
            >
              <b style={{ color: "#007bff" }}>{item.Type}</b> - {item.Message} <br />
              <small style={{ color: "#666" }}>{item.Timestamp}</small>
            </div>
          ))
        ) : (
          <p style={{ color: "#999" }}>No priority notifications</p>
        )}
      </div>

      <h2>All Notifications</h2>

      {allData.length > 0 ? (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            {paginatedData.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ fontWeight: "bold", color: "#333", marginBottom: "8px" }}>
                  {item.Type}
                </div>
                <div style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
                  {item.Message}
                </div>
                <div style={{ fontSize: "12px", color: "#999" }}>
                  {item.Timestamp}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
            }}
          >
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              style={{
                padding: "10px 20px",
                backgroundColor: page === 1 ? "#ccc" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: page === 1 ? "not-allowed" : "pointer",
                fontSize: "14px",
              }}
            >
              ← Prev
            </button>

            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPages}
              style={{
                padding: "10px 20px",
                backgroundColor: page >= totalPages ? "#ccc" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: page >= totalPages ? "not-allowed" : "pointer",
                fontSize: "14px",
              }}
            >
              Next →
            </button>
          </div>
        </div>
      ) : (
        <p style={{ color: "#999", fontSize: "16px" }}>No notifications found</p>
      )}
    </div>
  );
}

export default App;