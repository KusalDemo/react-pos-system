import {useReducer, useState} from "react";
import {initialState, itemReducer} from "../reducers/ItemReducer.tsx";

export function Item() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [qtyOnHand, setQtyOnHand] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState('');

    const [state, dispatch] = useReducer(itemReducer, initialState);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="form-group">
                    <label htmlFor="productId" className="block text-gray-700 font-medium">Item ID</label>
                    <input type="text" onChange={(e) => setId(e.target.value)}
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           id="productId"/>
                </div>
                <div className="form-group">
                    <label htmlFor="productName" className="block text-gray-700 font-medium">Item Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           id="productName"/>
                </div>
                <div className="form-group">
                    <label htmlFor="productQty" className="block text-gray-700 font-medium">QTY On Hand</label>
                    <input type="number" onChange={e => setQtyOnHand(Number(e.target.value))}
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           id="productQty"/>
                </div>
                <div className="form-group">
                    <label htmlFor="unitPrice" className="block text-gray-700 font-medium">Unit Price</label>
                    <input type="number" onChange={e => setPrice(Number(e.target.value))}
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           id="unitPrice"/>
                </div>
                <div className="form-group col-span-4">
                    <label htmlFor="productDescription" className="block text-gray-700 font-medium">Product
                        Description</label>
                    <textarea onChange={e => setDescription(e.target.value)}
                              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="productDescription"></textarea>
                </div>
            </div>

            <div className="mt-4">
                <button type="button"
                        className="text-blue-500 border border-blue-500 px-2 py-1 rounded-md hover:bg-blue-100"
                        onClick={() => dispatch({type: 'ADD_ITEM', payload: {id, name, qtyOnHand, price, description}})}
                >Add Item
                </button>
                &nbsp;
                <button type="button"
                        className="text-green-500 border border-green-500 px-2 py-1 rounded-md hover:bg-green-100"
                        onClick={() => dispatch({
                            type: 'UPDATE_ITEM',
                            payload: {id, name, qtyOnHand, price, description}
                        })}
                >Edit Item
                </button>
            </div>

            <hr className="my-6 border-gray-300"/>

            <div className="mt-4">
                <input type="search" placeholder="Search for product"
                       className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div className="mt-4 overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300">
                    <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="border border-gray-300 px-4 py-2"># Id</th>
                        <th className="border border-gray-300 px-4 py-2">Product Name</th>
                        <th className="border border-gray-300 px-4 py-2">Product Description</th>
                        <th className="border border-gray-300 px-4 py-2">QTY On Hand</th>
                        <th className="border border-gray-300 px-4 py-2">Unit Price</th>
                        <th className="border border-gray-300 px-4 py-2">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        state.map((item) => (
                            <tr className="hover:bg-gray-50" key={item.id}>
                                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.qtyOnHand}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button type="button"
                                            className="text-red-500 border border-red-500 px-2 py-1 rounded-md hover:bg-red-100"
                                            onClick={() => dispatch({type: 'DELETE_ITEM', payload: item})}
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