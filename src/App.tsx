import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./reducers/CounterSlice.ts";

function App() {

   const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Counter</h1>
            <div className="text-6xl font-extrabold mb-6 text-blue-600">{count}</div>
            <div className="flex space-x-4">
                <button
                    onClick={() => dispatch(increment())}
                    className="px-6 py-2 bg-green-500 text-white font-medium text-lg rounded-lg hover:bg-green-600 transition"
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="px-6 py-2 bg-red-500 text-white font-medium text-lg rounded-lg hover:bg-red-600 transition"
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default App
