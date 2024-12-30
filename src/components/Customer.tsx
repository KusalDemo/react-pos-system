import {useReducer, useState} from "react";
import {customerReducer, initialState} from "../reducers/CustomerReducer.tsx";

export function Customer() {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState(0);
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('')

    const [state, dispatch] = useReducer(customerReducer,initialState);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="form-group">
                    <label htmlFor="customerEmail" className="block text-gray-700">Customer Email</label>
                    <input type="email" id="customerEmail"
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="customerName" className="block text-gray-700">Customer Name</label>
                    <input type="text" id="customerName"
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="customerAddress" className="block text-gray-700">Customer Address</label>
                    <input type="text" id="customerAddress"
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e)=> setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="customerSalary" className="block text-gray-700">Customer Salary</label>
                    <input type="number" id="customerSalary"
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e)=> setSalary(Number(e.target.value))}
                    />
                </div>
            </div>

            <div className="mt-4">
                <button type="button" className="text-blue-500 border border-blue-500 px-2 py-1 rounded-md hover:bg-blue-100"
                        onClick={() => dispatch({type: 'ADD_CUSTOMER', payload: {name, salary, address, email}})}
                >Add Customer
                </button>&nbsp;
                <button type="button"
                        className="text-green-500 border border-green-500 px-2 py-1 rounded-md hover:bg-green-100"
                        onClick={() => dispatch({type: 'UPDATE_CUSTOMER', payload: {name, salary, address, email}})}
                >Edit Customer
                </button>
            </div>

            <hr className="my-6 border-gray-300"/>

            <div className="mb-4">
                <input type="search" placeholder="Search for customer"
                       className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2"># email</th>
                        <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                        <th className="border border-gray-300 px-4 py-2">Customer Address</th>
                        <th className="border border-gray-300 px-4 py-2">Customer Salary</th>
                        <th className="border border-gray-300 px-4 py-2">Delete option</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        state.map((customer)=> (
                            <tr className="hover:bg-gray-50" key={customer.email}>
                                <td className="border border-gray-300 px-4 py-2">{customer.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.address}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.salary}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button type="button"
                                            className="text-red-500 border border-red-500 px-2 py-1 rounded-md hover:bg-red-100"
                                            onClick={() => dispatch({type: 'DELETE_CUSTOMER', payload: customer})}
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}