import Link from 'next/link';
import Image from 'next/image';
import { PiUserCircle } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { SlQuestion } from "react-icons/sl";

export default function Header() {
  return (
    <>
      <header className="flex justify-between z-50 items-center p-6 bg-background shadow-md">
        <Link href="/" className="text-2xl font-bold flex flex-row items-center font-serif">
          <Image
            src="/logo.png"
            alt="Freshinn Logo"
            width={30}
            height={30}
            className="w-auto h-auto"
          />
          <span className="ml-2 font-cinzel text-primary">FRESHINN</span>
        </Link>
        <div className="flex items-center justify-between">
          <nav className="mr-2">
            <ul className="flex items-center space-x-4">
              <li>
                <Link href="/Listyourproperty1" className="font-semibold text-sm hidden md:block">
                  List your property
                </Link>
              </li>
              <li>
                <SlQuestion className="text-notgray cursor-pointer" size={20} aria-label="Help" />
              </li>
              <li>
                <TbWorld className="font-semibold cursor-pointer" size={25} aria-label="Language" />
              </li>
            </ul>
          </nav>
          <Link href="/WelcomeDashboard">
            <button className="bg-secondary flex items-center font-semibold text-[#F9F9F9] rounded-full px-4 py-2">
              <PiUserCircle className="mr-2" size={30} aria-label="User Icon" />
              Sign In
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}
