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
import Predictions from "./pages/Predictions";
import RealTimeAnalysis from "./pages/RealTimeAnalysis";
import StatisticalAnalysis from "./pages/StatisticalAnalysis";

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
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="about" />} />
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
              <Route path="about" element={<About />} />
              <Route path="historical" element={<HistoricalAnalysis />} />
              <Route path="statistical" element={<StatisticalAnalysis />} />
              <Route path="real-time" element={<RealTimeAnalysis />} />
              <Route path="predictions" element={<Predictions />} />
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
