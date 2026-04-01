"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Beranda', href: '/#beranda' },
  { name: 'Layanan', href: '/#layanan' },
  { name: 'Tentang', href: '/#tentang' },
  { name: 'Proyek', href: '/#proyek' },
  { name: 'Kontak', href: '/#kontak' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      if (pathname.startsWith('/projects')) {
        setActiveSegment('proyek');
      } else {
        setActiveSegment('');
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSegment(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    navLinks.forEach((link) => {
      const id = link.href.split('#')[1];
      if (id) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    const id = href.split('#')[1];
    return activeSegment === id;
  };

  const isSolid = isScrolled || pathname !== '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid
        ? 'bg-card/95 backdrop-blur-md shadow-soft'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/#beranda" className="flex items-center gap-3 group">
            <img
              src={logo.src}
              alt="KSC Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className={`font-heading font-bold text-2xl transition-colors ${isSolid ? 'text-primary' : 'text-primary-foreground'
              }`}>
              KSC
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent ${isActive(link.href) 
                    ? 'text-accent' 
                    : isSolid ? 'text-primary' : 'text-primary-foreground'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant={isSolid ? "default" : "hero"} size="lg">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isSolid ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isSolid ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card rounded-lg shadow-medium p-4 mb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  isActive(link.href) 
                    ? 'bg-accent/10 text-accent font-semibold' 
                    : 'text-foreground hover:bg-muted'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="w-full mt-4">
              Hubungi Kami
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
