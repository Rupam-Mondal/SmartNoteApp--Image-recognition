import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white w-screen h-[50px] flex justify-between items-center px-10">
            <div className="text-xl font-bold">
                Smart Note
            </div>
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-gray-600 focus:outline-none"
                >
                    Options
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Math</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Biology</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">English</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
