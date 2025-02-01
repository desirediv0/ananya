'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaChevronDown } from "react-icons/fa"
import { LuMail } from "react-icons/lu"
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"

const menuStructure = {
  resume: {
    title: 'Resume',
    items: [
      { name: 'Resume', path: '/resume' },
      { name: 'Certificates', path: '/certificates'  }
    ]
  },
  academic: {
    title: 'Academic',
    items: [
      { name: 'Research Paper', path: '/research-paper' },
      { name: 'Case Study', path: '/case-study' },
      { name: 'Documentary', path: '/documentary' },
      { name: 'Projects', path: '/projects' }
    ]
  },
  experience: {
    title: 'Experience',
    items: [
      { name: 'Internships', path: '/internship' },
      { name: 'Society Work', path: '/society-work' }
    ]
  }
}


const mobileMenuItems = [
  { name: 'Resume', path: '/resume' },
  { name: 'Certificates', path: '/certificates'  },
  { name: 'Research Paper', path: '/research-paper' },
  { name: 'Case Study', path: '/case-study' },
  { name: 'Documentary', path: '/documentary' },
  { name: 'Projects', path: '/projects' },
  { name: 'Internships', path: '/internship' },
  { name: 'Society Work', path: '/society-work' },
  { name: 'Contact', path: '/contact' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 left-0 right-0 z-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo */}
          <Link href="/" className="text-xl md:text-2xl font-semibold flex items-center">
            <span className="text-purple-600">A</span>nanya
          </Link>

          {/* Desktop Navigation (unchanged) */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[15px]">
             
              {Object.entries(menuStructure).map(([key, section]) => (
                <li key={key} className="relative group">
                  <button
                    className="flex items-center gap-1 py-2 hover:text-purple-600 transition-colors"
                    onMouseEnter={() => setActiveDropdown(key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {section.title}
                    <FaChevronDown className="w-2.5 h-2.5 transform group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  <div
                    className={`absolute top-full -left-2 w-48 bg-white shadow-lg rounded-lg py-1 transform transition-all duration-200 ${
                      activeDropdown === key
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setActiveDropdown(key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {section.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-purple-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
              <Link href="/contact" className="hover:text-purple-600 transition-colors">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ananya-bhatnagar-9aa496255"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:scale-110 hover:bg-gray-50 rounded-full transition-all text-gray-700 hover:text-[#0077B5]"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://github.com/AnanyaBhatnagar09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:scale-110 hover:bg-gray-50 rounded-full transition-all text-gray-700 hover:text-gray-900"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:ananyabh09@gmail.com"
                className="p-2 hover:scale-110 hover:bg-gray-50 rounded-full transition-all text-gray-700 hover:text-[#D44638]"
              >
                <LuMail size={18} />
              </a>
            </div>

            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (new update) */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-16 w-64 bg-white shadow-lg h-[calc(100vh-4rem)] overflow-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 space-y-4">
              {mobileMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block pl-4 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <a
                  href="https://www.linkedin.com/in/ananya-bhatnagar-9aa496255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FaLinkedinIn size={20} className="text-[#0077B5]" />
                </a>
                <a
                  href="https://github.com/AnanyaBhatnagar09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="mailto:ananyabh09@gmail.com"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <LuMail size={20} className="text-[#D44638]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}