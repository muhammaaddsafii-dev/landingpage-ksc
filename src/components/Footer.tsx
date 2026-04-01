import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    layanan: [
      { name: 'Kehutanan', href: '/#layanan' },
      { name: 'GIS & Pemetaan', href: '/#layanan' },
      { name: 'Survey', href: '/#layanan' },
      { name: 'Development', href: '/#layanan' },
    ],
    perusahaan: [
      { name: 'Tentang Kami', href: '/#tentang' },
      { name: 'Tim', href: '/#tentang' },
      { name: 'Karir', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    lainnya: [
      { name: 'Portofolio', href: '/#proyek' },
      { name: 'Kontak', href: '/#kontak' },
      { name: 'FAQ', href: '#' },
      { name: 'Kebijakan Privasi', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/#beranda" className="flex items-center gap-3 mb-6">
              <img
                src={logo.src}
                alt="KSC Logo"
                className="w-10 h-10 rounded-lg object-cover bg-white"
              />
              <span className="font-heading font-bold text-2xl">KSC</span>
            </a>
            <p className="text-primary-foreground/80 mb-6 max-w-sm leading-relaxed">
              Mitra terpercaya Anda dalam layanan kehutanan, GIS, survey, dan pengembangan proyek berkelanjutan di Indonesia.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Lainnya</h4>
            <ul className="space-y-3">
              {footerLinks.lainnya.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} KSC Indonesia. Hak Cipta Dilindungi.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Forestry • GIS • Survey • Development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
