import Link from "next/link";
import Image from "next/image";
import LoginButton from "../LoginButton";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md z-50 fixed w-full top-0 left-0">
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
          
            <div className="w-full max-w-sm min-w-[200px]">
              <div className="relative">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 rounded-lg text-slate-700 text-sm border border-slate-200  pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                />
                <button
                  className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Search
                </button>
              </div>
             
          </div>

          <div className=" items-center">
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
