/*
1>https://dummyjson.com/products =>use this Api show first 20 record [Product image must be shown] into an table along with show button.
2>If you click show button every product will be shown to the next page[Product image must be shown] .

3>To show the product's full details you have to login first.
4>If you not loggedin but you want to show the product details it will redirect you to login page.

Note: use localStorage.Hooks,Axios,Router etc  as per requirements
*/


import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";

/*────────────── Auth Context ─────────────*/
const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const login = (name) => {
    const u = { name };
    setUser(u);
    localStorage.setItem("user", JSON.stringify(u));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/*────────────── ProtectedRoute ───────────*/
const ProtectedRoute = () => {
  const { user } = useAuth();
  const loc = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: loc }} />
  );
};

/*────────────── Login Page ───────────────*/
const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const { login, user } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    if (user) nav("/products", { replace: true });
  }, [user, nav]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !pass) return;
    login(name);
    nav(loc.state?.from?.pathname || "/products", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring"
            required
          />
          <button className="w-full rounded bg-pink-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

/*────────────── Product List ─────────────*/
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=20")
      .then((r) => setProducts(r.data.products))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        {user && (
          <div className="space-x-4 text-sm">
            <span>
              Welcome, <span className="font-semibold">{user.name}</span>
            </span>
            <button
              onClick={logout}
              className="rounded bg-gray-200 px-3 py-1 hover:bg-green-300"
            >
              Logout
            </button>
          </div>
        )}
      </header>

      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-100 text-sm font-semibold">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="h-16 w-16 rounded object-cover"
                  />
                </td>
                <td className="p-3">{p.title}</td>
                <td className="p-3">{p.brand}</td>
                <td className="p-3">
                  <Link
                    to={`/product/${p.id}`}
                    className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-red-700"
                  >
                    Show
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/*────────────── Product Detail ───────────*/
const ProductDetail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  const nav = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((r) => setProd(r.data))
      .catch(() => nav("/products"));
  }, [id, nav]);

  if (!prod) return <p className="p-4">Loading…</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-6 flex items-center">
        <Link
          to="/products"
          className="rounded bg-gray-200 px-3 py-1 hover:bg-yellow-300"
        >
          ← Back
        </Link>
        {user && (
          <span className="ml-4 text-sm">
            Welcome, <span className="font-semibold">{user.name}</span>
          </span>
        )}
      </header>

      <div className="mx-auto max-w-xl space-y-4 rounded-lg bg-white p-6 shadow">
        <h2 className="text-2xl font-bold">{prod.title}</h2>
        <img
          src={prod.thumbnail}
          alt={prod.title}
          className="h-64 w-full rounded object-cover"
        />
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-semibold">Brand:</span> {prod.brand}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {prod.category}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {prod.description}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${prod.price}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {prod.rating}
          </p>
          <p>
            <span className="font-semibold">Stock:</span> {prod.stock}
          </p>
        </div>
      </div>
    </div>
  );
};

/*────────────── Root Router ──────────────*/
const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
