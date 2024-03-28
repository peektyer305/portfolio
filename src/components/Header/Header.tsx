'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
 useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        (currentScrollY >= 100) && setIsVisible(false);
        (currentScrollY < prevScrollPos) && setIsVisible(true);
        setPrevScrollPos(currentScrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
 }, [prevScrollPos])
    return(
        <>
        {isVisible && (
            <div className="h-10 bg-black text-white flex justify-around fixed top-0 w-screen text-[20px] items-center font-semibold md:text-base">
                <Link href = "/">Top</Link><Link href="/projects">Projects</Link><Link href="https://github.com/peektyer305">Github</Link><Link href="/contact">Contact</Link>
            </div>
        )}
    </>
    )
}