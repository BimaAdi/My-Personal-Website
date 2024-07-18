"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [showDropdown, setShowDropDown] = useState<boolean>(false);

	return (
		<nav className="fixed top-0 left-5 right-5 bg-primary">
			{/* Navbar */}
			<ul className="flex w-100 justify-between py-5">
				<li>
					<Link href="/" className="text-white hover:text-gray font-bold">
						BimaAdi
					</Link>
				</li>
				<ul className="hidden md:flex justify-end">
					<li>
						<Link href="/" className="text-white hover:text-gray">
							Home
						</Link>
					</li>
					{/* <li className="ml-5">
						<Link href="/project" className="text-white hover:text-gray">
							Project
						</Link>
					</li> */}
					<li className="ml-5">
						<Link href="/blog" className="text-white hover:text-gray">
							Blog
						</Link>
					</li>
				</ul>
				<li
					className="md:hidden sm:block hover:cursor-pointer"
					onClick={() => setShowDropDown(!showDropdown)}
				>
					{/* Hamburger */}
					<div className="space-y-2">
						<div className="w-8 h-0.5 bg-secondary"></div>
						<div className="w-8 h-0.5 bg-secondary"></div>
						<div className="w-8 h-0.5 bg-secondary"></div>
					</div>
				</li>
			</ul>

			{/* Responsive Navbar */}
			<ul className={`${showDropdown ? "block" : "hidden"} md:hidden`}>
				<li className="p-2">
					<Link href="/" className="text-white hover:text-gray text-lg">
						Home
					</Link>
				</li>
				<li className="p-2">
					<Link href="/project" className="text-white hover:text-gray text-lg">
						Project
					</Link>
				</li>
				<li className="p-2">
					<Link href="/blog" className="text-white hover:text-gray text-lg">
						Blog
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
