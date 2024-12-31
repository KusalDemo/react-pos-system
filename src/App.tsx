import './App.css'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.tsx";
import {Customer} from "./components/Customer.tsx";
import {Item} from "./components/Item.tsx";
import {Order} from "./components/Order.tsx";


function App() {

    return (
        <Router>
            <div>
                <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button type="button"
                                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open main menu</span>
                                </button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex shrink-0 items-center">
                                    <img className="h-8 w-auto"
                                         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                         alt="Your Company"/>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/">Home</Link>
                                        <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/customer">Customer</Link>
                                        <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/item">Item</Link>
                                        <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/order">Order</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sm:hidden" id="mobile-menu">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/">Home</Link>
                                <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/customer">Customer</Link>
                                <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/item">Item</Link>
                                <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/order">Order</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/customer" element={<Customer/>}/>
                    <Route path="/item" element={<Item/>}/>
                    <Route path="/order" element={<Order/>}/>
                </Routes>
            </div>
        </Router>
)
}

export default App
