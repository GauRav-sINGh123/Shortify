import Link from "next/link";
import Image from "next/image";
import { NavbarMobileMenu } from "./NavbarMobileMenu";  
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-semibold text-primary">Logo</span>
            </Link>
          </div>
          <div className="hidden sm:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-700 font-semibold hover:text-primary">
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex items-center">
            <Button className="px-6 py-2">Login</Button>
          </div>

          <NavbarMobileMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
