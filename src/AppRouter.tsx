import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Authenticate from "./pages/Authenticate";
import Account from "./pages/Account";
import PrivateRoute from "./layout/PrivateRoute";

export default function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/account" element={
          <PrivateRoute>
            <Account />
          </PrivateRoute>
          } />
      </Routes>
    </Router>
  )
}