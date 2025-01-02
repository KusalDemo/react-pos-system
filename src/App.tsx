import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {

    let customer = useSelector(state => state.customer);
    let items = useSelector(state => state.item);

    const dispatch = useDispatch();

    const [customerName, setCustomerName] = useState('');
    const [itemName, setItemName] = useState('')

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Customer & Item Form</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Input Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    placeholder="Input Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex justify-between gap-2">
                    <button
                        onClick={() => dispatch({type: 'SET_CUSTOMER', payload: customerName})}
                        className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Set Customer
                    </button>
                    <button
                        onClick={() => dispatch({type: 'SET_ITEM', payload: itemName})}
                        className="w-1/2 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                    >
                        Set Item
                    </button>
                </div>
            </div>
            <div className="mt-6 text-center">
                <p className="text-gray-700 font-medium">Customer: <span className="font-bold">{customer}</span></p>
                <p className="text-gray-700 font-medium">Item: <span className="font-bold">{items}</span></p>
            </div>
        </div>
    )
}

export default App
