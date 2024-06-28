import React, { useState } from 'react'
import { Logo } from '../assists/foto'

const HeaderAuth = () => {
    const [open, setOpen] = useState(false)
    const Togglesitebar = () => {
        setOpen(!open)
    }
    return (
        <div>
            {
                open && (
                    <>
                        <div className=' fixed z-10 top-0 right-0 w-72 w-80 px-5 h-full py-3 bg-violet-800'>
                            <div className="w-full text-right">
                                <button onClick={Togglesitebar} className=' text-right text-4xl'>x</button>
                            </div>
                        </div>
                        <div className="w-full absolute h-full opacity-5"> 
                            sag
                        </div>
                    </>
                )
            }


            <nav className="bg-white border-gray-200 dark:bg-grey-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a 
                        href="https://flowbite.com/"
                        className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-9" alt="Flowbite Logo" />
                    </a>
                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            data-dropdown-toggle="language-dropdown-menu"
                            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-black  rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-300">
                            SingIn
                        </button>

                        <button onClick={Togglesitebar} data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 dark:focus:ring-gray-400" aria-controls="navbar-language" aria-expanded="false">
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default HeaderAuth
