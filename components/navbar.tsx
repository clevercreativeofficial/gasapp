"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { assets } from "@/public/assets.js";
import Container from "@/components/container";
// import Search from "../Search";
// import Dropdown from "../Dropdown";

interface NavbarProps {
    variant?: string;
}

const Navbar = ({ variant }: NavbarProps) => {
    const pathname = usePathname();
    const isActiveLink = (path: string) => pathname === path;
    //   const [dropDown, setDropDown] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [autoVariant, setAutoVariant] = useState("default");

    const toggleSearch = () => setSearchActive(!searchActive);
    //   const showDropdown = () => setDropDown((prev) => !prev);

    // Auto detect screen size
    useEffect(() => {
        const handleResize = () => {
            setAutoVariant(window.innerWidth >= 1024 ? "lg" : "default"); // lg breakpoint
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const currentVariant = variant || autoVariant;

    if (currentVariant === "lg") {
        // DESKTOP NAVBAR
        const links = [
            { href: "/", icon: "home", label: "Home" },
            { href: "/shop", icon: "shop", label: "Shop" },
            { href: "/jobs", icon: "briefcase", label: "Jobs" },
        ];

        return (
            <nav className="bg-background bg-opacity-85 backdrop-blur-md border-b border-secondary">
                <Container>
                    <div className="relative h-[58px] flex items-center justify-between">
                        {/* Logo & Search */}
                        <div className="relative flex gap-2 items-center">
                            {!searchActive && (
                                <Link href="/">
                                    <div className="w-10">
                                        <Image src={assets.logo} alt="logo" />
                                    </div>
                                </Link>
                            )}
                            <div
                                onClick={toggleSearch}
                                className={`w-10 h-10 ${searchActive ? "bg-accent/10" : "lg:hidden"
                                    } flex justify-center items-center text-foreground bg-secondary hover:bg-accent/10 cursor-pointer rounded-full`}
                            >
                                {searchActive ? (
                                    <i className="fi fi-rr-arrow-small-left text-xl text-accent"></i>
                                ) : (
                                    <i className="fi fi-rr-search text-md"></i>
                                )}
                            </div>
                            <form
                                onClick={toggleSearch}
                                className="relative w-[263px] lg:block hidden"
                            >
                                <i className="absolute top-2.5 left-4 text-foreground fi fi-rr-search"></i>
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="h-10 w-full pl-10 outline-none text-sm font-light text-foreground bg-secondary rounded-full"
                                />
                            </form>
                            {/* {searchActive && <Search />} */}
                        </div>

                        {/* Navigation Links */}
                        <div className="absolute top-0.5 left-1/2 -translate-x-1/2 md:block hidden">
                            <ul className="flex text-foreground items-center justify-center">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`${isActiveLink(link.href)
                                                ? "text-accent bg-accent/10 border-b-4 border-accent"
                                                : "border-b-4 border-transparent"
                                                } flex gap-2 px-5 py-[10px] hover:text-accent duration-150`}
                                        >
                                            <i
                                                className={`text-2xl fi fi-${isActiveLink(link.href) ? "sr" : "rr"
                                                    }-${link.icon}`}
                                            ></i>
                                            <span className="text-lg hidden">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Actions */}
                        <div className="h-full flex items-center">
                            <ul className="flex gap-3 items-center">

                                <Link href={"/cart"}>
                                    <li className="relative">
                                        <div className="relative w-10 h-10 flex items-center justify-center hover:bg-accent/10 text-foreground bg-secondary rounded-full">
                                            <i className="text-xl fi fi-rr-shopping-bag"></i>
                                            <div className="absolute -top-0.5 -right-1 w-4 h-4 text-[10px] flex items-center justify-center rounded-full bg-accent text-background">
                                                1
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                                <Link href={"/messages"}>
                                    <li className="relative">
                                        <div className="relative w-10 h-10 flex items-center justify-center hover:bg-accent/10 text-foreground bg-secondary rounded-full">
                                            <i className="text-xl fi fi-rr-messages"></i>
                                            <div className="absolute -top-0.5 -right-1 w-4 h-4 text-[10px] flex items-center justify-center rounded-full bg-accent text-background">
                                                5
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                                <Link href={"/cart"}>
                                    <li className="relative">
                                        <div className="relative w-10 h-10 flex items-center justify-center hover:bg-accent/10 text-foreground bg-secondary rounded-full">
                                            <i className="text-xl fi fi-rr-bell"></i>
                                            <div className="absolute -top-0.5 -right-1 w-4 h-4 text-[10px] flex items-center justify-center rounded-full bg-accent text-background">
                                                9+
                                            </div>
                                        </div>
                                    </li>
                                </Link>

                                <li className="relative">
                                    <div
                                        // onClick={showDropdown}
                                        className="relative flex items-center flex-row-reverse gap-2 cursor-pointer"
                                    >
                                        <i className="absolute bottom-0 right-0 fi fi-rr-angle-small-down h-4 w-4 bg-background text-foreground"></i>
                                        <Image
                                            className="w-10 h-10 object-cover rounded-full"
                                            src={assets.profile}
                                            alt="avatar"
                                        />
                                    </div>
                                    {/* {dropDown && <Dropdown />} */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
        );
    }

    // DEFAULT (MOBILE) NAVBAR
    const links = [
        { href: "/", icon: "home", label: "Home" },
        { href: "/shop", icon: "shop", label: "Shop" },
        { href: "/jobs", icon: "briefcase", label: "Jobs" },
        { href: "/search", icon: "search", label: "Search" },
        { href: "/profile", icon: "user", label: "Profile" },
    ];

    return (
        <>
            {/* TOP BAR */}
            <nav className="bg-background bg-opacity-85 backdrop-blur-md border-b border-secondary">
                <Container>
                    <div className="relative h-[58px] flex items-center justify-between">
                        {/* Logo & Search */}
                        <div className="relative flex gap-2 items-center">
                            <Link href="/">
                                <div className="w-10 flex items-center">
                                    <Image src={assets.logo} alt="logo" />
                                    <span className="ml-2 text-xl text-accent font-bold">Yoonda</span>
                                </div>
                            </Link>
                        </div>



                        {/* Right Actions */}
                        <div className="h-full flex items-center">
                            <ul className="flex gap-2 items-center">
                                <Link href={"/cart"}>
                                    <li className="relative">
                                        <div className="relative w-10 h-10 flex items-center justify-center hover:bg-accent/10 text-foreground bg-secondary rounded-full">
                                            <i className="text-xl fi fi-rr-shopping-bag"></i>
                                            <div className="absolute -top-0.5 -right-1 w-4 h-4 text-[10px] flex items-center justify-center rounded-full bg-accent text-background">
                                                1
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                                <Link href={"/messages"}>
                                    <li className="relative">
                                        <div className="relative w-10 h-10 flex items-center justify-center hover:bg-accent/10 text-foreground bg-secondary rounded-full">
                                            <i className="text-xl fi fi-rr-messages"></i>
                                            <div className="absolute -top-0.5 -right-1 w-4 h-4 text-[10px] flex items-center justify-center rounded-full bg-accent text-background">
                                                5
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                                <Link href={"/cart"}>
                                    <li className="relative">
                                        <div className="relative w-10 h-10 flex items-center justify-center hover:bg-accent/10 text-foreground bg-secondary rounded-full">
                                            <i className="text-xl fi fi-rr-bell"></i>
                                            <div className="absolute -top-0.5 -right-1 w-4 h-4 text-[10px] flex items-center justify-center rounded-full bg-accent text-background">
                                                9+
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
            <nav className="w-full fixed bottom-0 bg-background bg-opacity-85 backdrop-blur-md z-40">

                <div className="max-w-[1200px] m-auto flex items-center justify-between">
                    <ul className="w-full flex py-2 text-foreground items-center justify-between">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`${isActiveLink(link.href) ? "text-accent" : ""
                                        } flex flex-col items-center gap-1 px-3 py-1 hover:text-accent duration-150`}
                                >
                                    {link.href === "/profile" ? (
                                        <Image
                                            className="w-8 h-8 object-cover rounded-full"
                                            src={assets.profile}
                                            alt="avatar"
                                        />
                                    ) : (
                                        <i
                                            className={`text-lg fi fi-${isActiveLink(link.href) ? "sr" : "rr"
                                                }-${link.icon}`}
                                        ></i>
                                    )}
                                    <span className="text-sm">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
