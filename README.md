# Notification System

A modern React-based notification management application with intelligent priority sorting, filtering, and pagination capabilities.

---

## 📋 Overview

This notification system helps users manage and prioritize important updates. It displays notifications based on type priority and recency, allowing users to filter and paginate through notifications easily.

**Problem Solved:**
- Users were missing key updates due to notification overload
- Implemented intelligent priority-based sorting system
- Created responsive UI for better user experience

---

## ✨ Key Features

### Stage 1 - Priority System
- ✅ **Smart Priority Sorting**
  - Placement notifications: highest priority (weight: 3)
  - Result notifications: medium priority (weight: 2)
  - Event notifications: lowest priority (weight: 1)
  - Latest notifications appear first within each type

- ✅ **Top 10 Display**
  - Shows most important notifications at the top
  - Uses O(n log n) sorting algorithm

### Stage 2 - Frontend Interface
- ✅ **Type Filtering**
  - Filter by: Placement, Result, Event, or All
  - Real-time filter updates

- ✅ **Pagination**
  - 10 items per page
  - Previous/Next navigation buttons
  - Shows current page and total pages

- ✅ **Responsive Design**
  - Desktop: Grid layout (3 columns)
  - Mobile: Single column layout
  - Clean card-based UI with shadows

- ✅ **Error Handling**
  - API token expiration: displays mock data + warning banner
  - Network errors: graceful fallback to demo data

---

## 🛠️ Technologies Used

- **Frontend:** React 19, TypeScript, CSS
- **HTTP Client:** Axios
- **Build Tool:** React Scripts
- **State Management:** React Hooks (useState, useEffect)
- **Proxy:** Configured in package.json for CORS handling

---

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/var-13/RA2311026010405

# Navigate to project directory
cd notification_app_fe

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

---

## 🚀 Usage

### Running the App
```bash
npm start
```

### Building for Production
```bash
npm run build
```

### Running Tests
```bash
npm test
```

---

## 📁 Project Structure

```
notification_app_fe/
├── src/
│   ├── api/
│   │   └── notifications.ts          # API service with mock fallback
│   ├── utils/
│   │   └── sort.ts                   # Priority sorting logic
│   ├── logging_middleware/
│   │   └── logger.ts                 # Logging utility (disabled)
│   ├── App.tsx                       # Main component (filter + pagination UI)
│   ├── App.css                       # Styles
│   ├── index.tsx                     # App entry point
│   └── setupTests.ts                 # Test configuration
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript config
└── README.md                         # This file
```

---

## 🔑 Key Components

### `src/api/notifications.ts`
- Fetches notifications from backend
- Includes Bearer token authentication
- **Mock data fallback** when API fails (401 error)
- 12 demo notification entries

### `src/utils/sort.ts`
- Sorts notifications by type priority
- Secondary sort by timestamp (latest first)
- Returns top 10 items

### `src/App.tsx`
- Main React component
- Filter dropdown UI
- Pagination controls
- Top 10 priority section
- All notifications grid
- Error/warning banners

---

## 🔗 API Integration

### Endpoint
```
GET /evaluation-service/notifications
```

### Authentication
```
Authorization: Bearer {JWT_TOKEN}
```

### Proxy Configuration
- Configured in `package.json` to proxy to `http://20.207.122.201`
- Resolves CORS issues in development

---

## 📊 State Management

```javascript
const [allData, setAllData] = useState([])           // All notifications
const [topData, setTopData] = useState([])           // Top 10 sorted
const [page, setPage] = useState(1)                  // Current page
const [type, setType] = useState("")                 // Selected filter
const [isUsingMockData, setIsUsingMockData] = useState(false)  // Status flag
```

---

## 🎨 UI Features

### Filter Dropdown
```
All Types | Placement | Result | Event
```

### Card Design
- Type label (color-coded)
- Notification message
- Timestamp
- Shadow & border styling

### Pagination
```
← Prev  |  Page 1 of 5  |  Next →
```

### Warning Banner
Shows when API token expires and mock data is used

---

## ⚙️ Error Handling

| Error | Handling |
|-------|----------|
| 401 Unauthorized | Display mock data + yellow warning |
| Network error | Fallback to mock data |
| Empty results | Show "No notifications found" |

---

## 🔐 Authentication

Update the API token in `src/api/notifications.ts`:

```javascript
const TOKEN = "your_jwt_token_here"
```

Token expires at: `1777704862` (Unix timestamp)

---

## 📈 Performance

- **Time Complexity:** O(n log n) for sorting
- **Optimization:** Can use priority queue for real-time updates
- **Frontend Pagination:** O(1) array slicing

---

## 🚀 Future Enhancements (Stage 3+)

- [ ] Real-time notifications (WebSocket/polling)
- [ ] Search by notification message
- [ ] Mark notifications as read/unread
- [ ] Delete notifications
- [ ] Export notifications (PDF/CSV)
- [ ] Dark mode toggle
- [ ] Notification sound alerts
- [ ] User preferences storage
- [ ] Email notifications

---

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is part of the Afford Medical Technologies educational initiative.

---

## 📞 Support

For issues or questions, please open a GitHub issue in the repository.

---

## 🎯 Development Timeline

- **Stage 1:** Priority sorting system (✅ Completed)
- **Stage 2:** Frontend UI with filter & pagination (✅ Completed)
- **Stage 3:** Real-time updates & advanced features (🔄 In Planning)

---

**Last Updated:** May 2, 2026  
**Author:** Varshaa Manikandan  
**Roll No:** RA2311026010405
