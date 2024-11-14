import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const footerLinks = [
  {
    title: 'Support',
    links: [
      { name: 'Why Freshinn?', href: '/why-freshinn' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Hosting',
    links: [
      { name: 'Add a property', href: '/add-property' },
      { name: 'Hosting guide', href: '/hosting-guide' },
      { name: 'Business', href: '/business' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Career', href: '/career' },
      { name: 'Blog', href: '/blog' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0 flex justify-start items-start">
            <Image 
              src="/footerlogo.png"
              alt="Freshinn Logo"
              width={30} 
              height={30}
              className='mr-2 w-auto h-auto'
            />
            <span className="text-2xl font-cinzel font-bold">FRESHINN</span>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-around">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className=" ">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-400 pt-8">
          <p className="mb-4 md:mb-0">© Freshinn Copyright 2024. All Rights Reserved.</p>

          <div className="flex space-x-6">
            <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-200">
              <IoLogoFacebook className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-200">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-200">
              <FaXTwitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
