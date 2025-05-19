"use client"

import { navLinks } from "@/constant"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Header() {

    const pathname = usePathname()

    return (
        <div className="w-full h-20 flex items-center justify-between border-b-2 bg-white fixed z-50 px-10">
            <h1 className="text-3xl font-medium">
                Individual project
            </h1>
            <div className="flex items-center gap-4">
                {navLinks.map((item, index) => (
                    <Link 
                        href={item.root} 
                        key={index}
                        className={cn(
                            "text-lg font-medium",
                            pathname === item.root && "text-blue-500 underline underline-offset-2"
                        )}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Header