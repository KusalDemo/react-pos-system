import './App.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUsername} from "./reducers/UserNameSlice.ts";

function App() {


    const [name, setName] = useState('');

    let username = useSelector((state) => state.username.username);
    let dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Enter Your Name</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-80 px-4 py-2 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
                onClick={() => dispatch(addUsername(name))}
                className="w-80 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            >
                Enter
            </button>
            <h1 className="mt-6 text-xl text-gray-700">
                <span className="font-semibold">Name:</span> {username || 'No name entered'}
            </h1>
        </div>
    )
}

export default App
