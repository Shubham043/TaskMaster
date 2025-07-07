import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/usercontext";
function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate(); 

  function handleSubmit(e) {
    e.preventDefault(); 
    updateUser( name, email ); 
    alert(`Submitted!\nName: ${name}\nEmail: ${email}`);
    navigate('/');
  }

  return (
    <div className="max-w-md mx-auto my-40 flex flex-col justify-center p-6 bg-gray-400 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add your data here:</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Enter your name:
          </label>
          <input
            type="text"
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Enter your email:
          </label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          {/* <input className="bg-gray-500 p-1 mt-2 rounded-md cursor-pointer" type="file"/> */}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;