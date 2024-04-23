import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';

import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import store from "./store/store";
// import Users from "./pages/Users";
import { DarkModeProvider } from "./context/DarkModeContext";
import About from "./pages/About";
import HistoricalAnalysis from "./pages/HistoricalAnalysis";
import Failure from "./pages/Failure";
import RealTimeAnalysis from "./pages/RealTimeAnalysis";

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
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="about" element={<About />} />
              <Route path="historical" element={<HistoricalAnalysis />} />
              <Route path="real-time" element={<RealTimeAnalysis />} />
              <Route path="failure" element={<Failure />} />
              {/* <Route path="users" element={<Users />} /> */}
              <Route path="settings" element={<Settings />} />
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
