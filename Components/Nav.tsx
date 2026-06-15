'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#odd', label: 'Designed by Odd' },
  { href: '#moments', label: 'Living Life' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="/" className="heading text-2xl font-bold tracking-tight">AUDREY</a>

        <div className="hidden md:flex gap-8 text-sm tracking-widest">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-[#6B8E73] transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t py-8">
          <div className="flex flex-col gap-6 text-center text-lg">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}