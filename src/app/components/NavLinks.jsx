"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartBar, FaClock, FaHome } from "react-icons/fa";

const NavLinks = () => {
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home", icon: <FaHome /> },
        { href: "/timeline", label: "Timeline", icon: <FaClock /> },
        { href: "/stats", label: "Stats", icon: <FaChartBar /> },
    ]

    return (
        <>
            {navLinks.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`btn gap-2 ${
                        pathname === link.href
                            ? "bg-[#244D3F] text-white"
                            : ""
                    }`}
                >
                    {link.icon} {link.label}
                </Link>
            ))}
        </>
    )
}

export default NavLinks;