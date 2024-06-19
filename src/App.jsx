import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';

// import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Account from "./pages/Account";
// import Settings from "./pages/Settings";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import store from "./store/store";
// import Users from "./pages/Users";
import { DarkModeProvider } from "./context/DarkModeContext";
import About from "./pages/About";
import HistoricalAnalysis from "./pages/HistoricalAnalysis";
import FailuresPredictions from "./pages/FailuresPredictions";
import RealTimeAnalysis from "./pages/RealTimeAnalysis";
import StatisticalAnalysis from "./pages/StatisticalAnalysis";

const data = [
  {
    timestamp: "2024-06-23 16:51:32",
    TP2: -0.012,
    TP3: 9.758,
    H1: 9.76,
    DV_pressure: -0.028,
    Reservoirs: 1.576,
    Oil_temperature: 63.35,
    Flowmeter: 19.049625,
    Motor_current: 3.955,
    type: "Failure 1",
  },
  {
    timestamp: "2024-06-23 16:51:32",
    TP2: -0.012,
    TP3: 9.76,
    H1: 9.76,
    DV_pressure: -0.028,
    Reservoirs: 1.578,
    Oil_temperature: 63.25,
    Flowmeter: 19.049625,
    Motor_current: 4.0275,
    type: "Failure 2",
  },
  {
    timestamp: "2024-06-23 16:51:32",
    TP2: -0.01,
    TP3: 9.76,
    H1: 9.76,
    DV_pressure: -0.028,
    Reservoirs: 1.578,
    Oil_temperature: 63.325,
    Flowmeter: 19.04028125,
    Motor_current: 3.945,
    type: "Failure 3",
  },
];

function App() {
  return (
    <DarkModeProvider>
      <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout dataLength={data.length} />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="about" />} />
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
              <Route path="about" element={<About />} />
              <Route path="historical" element={<HistoricalAnalysis />} />
              <Route path="statistical" element={<StatisticalAnalysis />} />
              <Route path="real-time" element={<RealTimeAnalysis />} />
              <Route path="predictions" element={<FailuresPredictions data={data} />} />
              {/* <Route path="users" element={<Users />} /> */}
              {/* <Route path="settings" element={<Settings />} /> */}
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </DarkModeProvider>
  );
}

export default App;
