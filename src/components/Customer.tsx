export function Customer() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="form-group">
                    <label htmlFor="customerName" className="block text-gray-700">Customer Name</label>
                    <input type="text" id="customerName"
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="form-group">
                    <label htmlFor="customerAddress" className="block text-gray-700">Customer Address</label>
                    <input type="text" id="customerAddress"
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="form-group">
                    <label htmlFor="customerSalary" className="block text-gray-700">Customer Salary</label>
                    <input type="number" id="customerSalary"
                           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
            </div>

            <div className="mt-4">
                <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add
                    Customer
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
                        <th className="border border-gray-300 px-4 py-2">Customer Id</th>
                        <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                        <th className="border border-gray-300 px-4 py-2">Customer Address</th>
                        <th className="border border-gray-300 px-4 py-2">Customer Salary</th>
                        <th className="border border-gray-300 px-4 py-2">Delete option</th>
                        <th className="border border-gray-300 px-4 py-2">Edit option</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">John</td>
                        <td className="border border-gray-300 px-4 py-2">London</td>
                        <td className="border border-gray-300 px-4 py-2">10000</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <button type="button"
                                    className="text-red-500 border border-red-500 px-2 py-1 rounded-md hover:bg-red-100">Delete
                            </button>
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            <button type="button"
                                    className="text-blue-500 border border-blue-500 px-2 py-1 rounded-md hover:bg-blue-100">Edit
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}