import axios from "axios";

const API = "/evaluation-service/notifications";

// Mock data for testing (fallback when API fails)
const MOCK_DATA = [
  { Type: "Placement", Message: "Your placement interview is scheduled", Timestamp: "2025-05-02T10:00:00Z" },
  { Type: "Result", Message: "Your exam result is published", Timestamp: "2025-05-02T09:30:00Z" },
  { Type: "Event", Message: "Campus recruitment drive starts tomorrow", Timestamp: "2025-05-02T08:00:00Z" },
  { Type: "Placement", Message: "Selected candidates list posted", Timestamp: "2025-05-01T15:00:00Z" },
  { Type: "Result", Message: "Project submission deadline extended", Timestamp: "2025-05-01T14:00:00Z" },
  { Type: "Event", Message: "Webinar on career development", Timestamp: "2025-05-01T10:00:00Z" },
  { Type: "Placement", Message: "Interview feedback available", Timestamp: "2025-04-30T16:00:00Z" },
  { Type: "Event", Message: "Networking event this Friday", Timestamp: "2025-04-30T12:00:00Z" },
  { Type: "Result", Message: "Assignment grades released", Timestamp: "2025-04-30T11:00:00Z" },
  { Type: "Event", Message: "Workshop on technical skills", Timestamp: "2025-04-29T10:00:00Z" },
  { Type: "Placement", Message: "Offer letter received", Timestamp: "2025-04-28T09:00:00Z" },
  { Type: "Result", Message: "Midterm exam scores published", Timestamp: "2025-04-28T08:00:00Z" },
];

export const getNotifications = async (): Promise<any[]> => {
  try {
    const res = await axios.get(API, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2bTMwNjhAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDg2MiwiaWF0IjoxNzc3NzAzOTYyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOTU1Mjk5N2EtOGZiZC00ZmEwLTk3MmItZDZkNzg4ZjA2MGVmIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmFyc2hhYSBtYW5pa2FuZGFuIiwic3ViIjoiNmE1YjVkYzMtNTE5YS00OThmLTk4MjMtMzJjZTA0MTQzYjYyIn0sImVtYWlsIjoidm0zMDY4QHNybWlzdC5lZHUuaW4iLCJuYW1lIjoidmFyc2hhYSBtYW5pa2FuZGFuIiwicm9sbE5vIjoicmEyMzExMDI2MDEwNDA1IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNmE1YjVkYzMtNTE5YS00OThmLTk4MjMtMzJjZTA0MTQzYjYyIiwiY2xpZW50U2VjcmV0IjoiRWNmV2h0ZlFuckdkZkRXdyJ9.HzEYIkL0cEXEYK2LejcBFP3jZq9-uAoPpaKLnP700cM`,
      },
    });

    console.log("✅ API DATA:", res.data);
    return res.data.notifications || [];
  } catch (err: any) {
    console.log("❌ API ERROR - Status:", err.response?.status);
    console.log("⚠️ Using mock data for demonstration...");
    
    // Return mock data as fallback
    return MOCK_DATA;
  }
};