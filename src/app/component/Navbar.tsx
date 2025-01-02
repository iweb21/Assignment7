"use client";

import Link from "next/link";

const Header = () => {

  return (
    <header className="flex justify-around items-center bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold">Data Fetching</h1>
      <div className="flex gap-4 font-medium">
      <Link href="/" className="hover:underline">Home</Link>
            <Link href="/clint" className="hover:underline">Client side</Link>
            <Link href="/server" className="hover:underline">Server side</Link>
      </div>
      
    </header>
  );
};

export default Header;