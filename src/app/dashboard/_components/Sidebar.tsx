"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, Settings, ChevronLeft, ChevronRight,HomeIcon,PlusIcon } from "lucide-react";
import Home from "@/app/page";

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  { title: "Home", href: "/", icon: <HomeIcon className="w-4 h-4" /> },
  { title: "Profile", href: "/dashboard/profile", icon: <Users className="w-4 h-4" /> },
  { title: "Settings", href: "/settings", icon: <Settings className="w-4 h-4" /> },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();

  return (
    <div className="relative">
      <div
        className={cn(
          "fixed top-0 left-0 z-10 h-screen bg-gray-800 border-r transition-all mt-16 duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <nav className="space-y-1 p-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3   py-2 text-sm transition-all",
                pathname === item.href ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-black hover:text-white",
                isCollapsed && "justify-center"
              )}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              <span className={cn(isCollapsed ? "w-5 h-5" : "w-4 h-4")}>
                {item.icon}
              </span>
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <Button
        variant="ghost"
        size="icon"
        aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out",
          isCollapsed ? "left-14 top-40" : "left-60 top-40"
        )}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronRight className="h-5 w-5 text-lg" />
        ) : (
          <ChevronLeft className="h-5 w-5 text-lg" />
        )}
      </Button>
    </div>
  );
}
