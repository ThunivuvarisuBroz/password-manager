import React from 'react';
import { Home, Settings, LayoutDashboard, Folder, Users, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
// import {  } from 'lucide-react';
const Sidebar = () => {
    const navItems = [
        { name: 'Home', link: '/', icon: Home, active: false },
        { name: 'Remainder', link: '/remainder', icon: Folder, active: false },
        { name: 'Notice', link: '/notice', icon: Users, active: false },
        { name: 'Task', link: '/task', icon: ClipboardList, active: false },
    ];

    const urls = usePathname()
    // const searchP = useSearchParams();

    // console.log(urls);

    // const match = navItems.find(val => val.link === urls && !val.active);
    // console.log(match ? 't' : 'f');
    // console.log(match);



    return (
        <aside className="w-64 border-r border-gray-200 bg-white flex flex-col justify-between">

            <nav className="p-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${item.link === urls || item.active
                            ? 'bg-indigo-50 text-indigo-700'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                    >
                        <item.icon size={20} />
                        {item.name}
                    </Link>
                ))}
            </nav>


            <div className="p-4 border-t border-gray-100">
                <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                    <Settings size={20} />
                    Settings
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;