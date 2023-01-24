import React, {useState} from "react";
import { FaBars } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Navbar = ({ stateContext }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-600 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="md:text-2xl text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-white"
                            href="/"
                        >
                           PhoneShop
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars/>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75"
                                    to="/cart"
                                    state={stateContext}
                                >
                                 <FiShoppingCart/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center  font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                  Register
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                   Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}