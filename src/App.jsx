import Home from "./pages/home";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useState } from "react";
import { UserProvider } from "./components/usercontext";
import UserForm from "./pages/UserForm";

const About = lazy(() => import("./pages/about"));
const Todo = lazy(() => import("./components/todo"));

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800">
        <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-md py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <button 
                className="lg:hidden text-white focus:outline-none"
                onClick={toggleNav}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Navigation links */}
              <ul className={`${navOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row  items-center gap-8`}>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-indigo-200 hover:text-white'}`
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-indigo-200 hover:text-white'}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-indigo-200 hover:text-white'}`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/todo"
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-indigo-200 hover:text-white'}`
                    }
                  >
                    Todo
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="flex-grow bg-gray-50">
          <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
            <Routes>
              <Route path="/login" element={<UserForm />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;