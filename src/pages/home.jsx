import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/usercontext";

export default function Home() {
  const {userData} = useContext(UserContext)
  console.log(userData)
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 px-4 py-12">
      <h1 className="text-5xl p-2 font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
        Welcome to TaskMaster : {userData.name}
      </h1>
      
      <p className="max-w-xl mb-8 text-lg text-gray-700">
        Organize your day, manage your tasks effortlessly, and boost your productivity with TaskMaster — your personal ToDo list app.
      </p>

      <ul className="mb-10 space-y-2 text-left max-w-md">
        <li className="flex items-start">
          <span className="text-pink-500 mr-2">•</span>
          <span className="text-gray-800"><strong className="font-semibold text-gray-900">Simple & Intuitive:</strong> Easy to add, edit, and delete your tasks.</span>
        </li>
        <li className="flex items-start">
          <span className="text-pink-500 mr-2">•</span>
          <span className="text-gray-800"><strong className="font-semibold text-gray-900">Stay Organized:</strong> Keep your to-dos sorted and never miss a deadline.</span>
        </li>
        <li className="flex items-start">
          <span className="text-pink-500 mr-2">•</span>
          <span className="text-gray-800"><strong className="font-semibold text-gray-900">Responsive Design:</strong> Use it on any device, anytime.</span>
        </li>
      </ul>

      <Link
        to="/todo"
        className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        View Your Tasks
      </Link>
    </div>
  );
}