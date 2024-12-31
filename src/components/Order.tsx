import {useReducer, useState} from "react";
import {initialState, orderReducer} from "../reducers/OrderReducer.tsx";
import {itemReducer , initialState as ini} from "../reducers/ItemReducer.tsx";

export function Order() {
    const [orderId, setOrderId] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [itemId, setItemId] = useState('');
    const [qty, setQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const [state, dispatch] = useReducer(orderReducer,initialState);
    const [state2, dispatch2] = useReducer(itemReducer,ini);


    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <label htmlFor="customerSelect" className="block font-medium mb-1">Customer</label>
                    <select id="customerSelect" className="w-full p-2 border rounded-md">
                        <option disabled defaultValue='Use Option'>Open this select menu</option>
                        <option value="1">Customer One</option>
                        <option value="2">Customer Two</option>
                        <option value="3">Customer Three</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="selectedCustomerName" className="block font-medium mb-1">Customer Name</label>
                    <input type="text" id="selectedCustomerName" className="w-full p-2 border rounded-md" disabled/>
                </div>
                <div>
                    <label htmlFor="selectedCustomerAddress" className="block font-medium mb-1">Customer Address</label>
                    <input type="text" id="selectedCustomerAddress" className="w-full p-2 border rounded-md" disabled/>
                </div>
                <div>
                    <label htmlFor="selectedCustomerSalary" className="block font-medium mb-1">Customer Salary</label>
                    <input type="number" id="selectedCustomerSalary" className="w-full p-2 border rounded-md" disabled/>
                </div>
            </div>

            <hr className="my-4"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                    <label htmlFor="productSelect" className="block font-medium mb-1">Product</label>
                    <select id="productSelect" className="w-full p-2 border rounded-md">
                        <option disabled defaultValue='Use Option'>Open this select menu</option>
                        <option value="1">Product One</option>
                        <option value="2">Product Two</option>
                        <option value="3">Product Three</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="selectedProductDescription" className="block font-medium mb-1">Product
                        Description</label>
                    <input type="text" id="selectedProductDescription" className="w-full p-2 border rounded-md"
                           disabled/>
                </div>
                <div>
                    <label htmlFor="selectedProductUnitPrice" className="block font-medium mb-1">Unit Price</label>
                    <input type="number" id="selectedProductUnitPrice" className="w-full p-2 border rounded-md"
                           disabled/>
                </div>
                <div>
                    <label htmlFor="selectedProductQTY" className="block font-medium mb-1">QTY On Hand</label>
                    <input type="number" id="selectedProductQTY" className="w-full p-2 border rounded-md" disabled/>
                </div>
                <div>
                    <label htmlFor="orderQTY" className="block font-medium mb-1">Order QTY</label>
                    <input type="number" id="orderQTY" className="w-full p-2 border rounded-md"/>
                </div>
            </div>

            <hr className="my-4"/>

            <div className="flex justify-start">
                <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Add Product
                </button>
            </div>

            <hr className="my-4"/>

            <div className="mb-4">
                <input type="search" className="w-full p-2 border rounded-md" placeholder="Search for product"/>
            </div>

            <div>
                <table className="w-full border-collapse border border-gray-200 text-center">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border"># Id</th>
                        <th className="p-2 border">Product Name</th>
                        <th className="p-2 border">Unit Price</th>
                        <th className="p-2 border">QTY</th>
                        <th className="p-2 border">Total</th>
                        <th className="p-2 border">Delete option</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="p-2 border">1</td>
                        <td className="p-2 border">Product One</td>
                        <td className="p-2 border">100</td>
                        <td className="p-2 border">10</td>
                        <td className="p-2 border">1000</td>
                        <td className="p-2 border">
                            <button type="button" className="text-red-500 hover:text-red-700">
                                Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4 p-4 bg-gray-50 border rounded-md">
                <h1 className="text-xl font-bold">Total: 2500.00</h1>
                <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                    Place Order
                </button>
            </div>
        </div>

    )
}