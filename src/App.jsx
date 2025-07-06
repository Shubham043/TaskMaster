import Home from "./pages/home";
import About from "./pages/about";
import Todo from "./components/todo";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800">
      <nav className="bg-gradient-to-r from-indigo-600 font-bold text-center via-purple-600 to-pink-600 shadow-md py-4">
        <ul className="flex justify-center gap-12">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-white pb-1"
                  : "text-indigo-200 hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-white pb-1"
                  : "text-indigo-200 hover:text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-white pb-1"
                  : "text-indigo-200 hover:text-white"
              }
            >
              Todo
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className="flex-grow bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
