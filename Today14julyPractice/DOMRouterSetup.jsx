import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
  Outlet,
  useParams,
} from "react-router-dom";

const App = () => {
  // 🔐 Check if token exists in localStorage
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  // ✅ ProtectedRoute Component
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn() ? children : <Navigate to="/login" />;
  };

  // Pages
  const Home = () => <div className="p-6 text-center"><h1 className="text-3xl font-bold">🏠 Home</h1></div>;
  const About = () => <div className="p-6 text-center"><h1 className="text-3xl font-bold">📘 About</h1></div>;
  const Contact = () => <div className="p-6 text-center"><h1 className="text-3xl font-bold">📞 Contact</h1></div>;

  const PostDetails = () => {
    const { id } = useParams();
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">📝 Post ID: {id}</h1>
      </div>
    );
  };

  const Login = () => {
    const handleLogin = () => {
      localStorage.setItem("token", "true");
      window.location.href = "/dashboard";
    };
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">🔐 Login Page</h2>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Login
        </button>
      </div>
    );
  };

  // 🔒 Protected Dashboard + Nested
  const Dashboard = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <nav className="space-x-4 mb-6">
        <NavLink to="profile" className="text-blue-600 hover:underline">Profile</NavLink>
        <NavLink to="settings" className="text-blue-600 hover:underline">Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );

  const Profile = () => (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold">👤 User Profile</h2>
    </div>
  );

  const Settings = () => (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold">⚙️ Settings</h2>
    </div>
  );

  const NotFound = () => (
    <div className="p-6 text-center text-red-600">
      <h1 className="text-3xl font-bold">🚫 404</h1>
      <p>Page Not Found</p>
    </div>
  );

  // 🧭 Styling for active NavLink
  const navClass = ({ isActive }) =>
    isActive ? "text-white font-semibold underline" : "text-white hover:underline";

  return (
    <Router>
      <nav className="bg-blue-600 p-4 flex gap-6 justify-center">
        <NavLink to="/" className={navClass}>Home</NavLink>
        <NavLink to="/about" className={navClass}>About</NavLink>
        <NavLink to="/contact" className={navClass}>Contact</NavLink>
        <NavLink to="/posts/1" className={navClass}>Post</NavLink>
        <NavLink to="/dashboard" className={navClass}>Dashboard</NavLink>
        <NavLink to="/login" className={navClass}>Login</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/:id" element={<PostDetails />} />

        {/* 🔐 Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 🧠 Redirect from login if already logged in */}
        <Route path="/login" element={isLoggedIn() ? <Navigate to="/dashboard" /> : <Login />} />

        {/* 🚫 Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
