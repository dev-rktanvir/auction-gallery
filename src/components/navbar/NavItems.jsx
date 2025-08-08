import React from 'react';

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Auctions", path: "/auctions" },
    { id: 3, name: "Categories", path: "/categories" },
    { id: 4, name: "How it Works", path: "/how-it-works" }
];

const NavItems = () => {
    return (
        <ul className="flex flex-col lg:flex-row gap-3 lg:gap-8 text-lg sm:text-xl">
            {navItems.map(item => (
                <li
                    key={item.id}
                    className="cursor-pointer px-3 py-1 rounded-md transition-colors duration-300 hover:bg-[#FFD337] hover:text-black"
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default NavItems;
