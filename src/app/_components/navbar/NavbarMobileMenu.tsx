'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export const NavbarMobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="-mr-2 flex items-center sm:hidden">
      <Button
        variant="ghost"
        className="p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}  
          animate={{ opacity: 1, y: 0 }}  
          exit={{ opacity: 0, y: -20 }}  
          transition={{ duration: 0.3 }}  
          className="absolute top-16 inset-x-0 z-10 bg-white shadow-md rounded-md mx-4 p-4"
        >
          <div className="space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link 
                key={href} 
                href={href} 
                className="block text-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-200 px-2 transition-transform transform hover:scale-105 cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4">
            <Button className="w-full justify-center py-2">Login</Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
