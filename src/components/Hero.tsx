import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, TreePine, Compass } from 'lucide-react';

const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-16 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/kurniasylva-assets/01.jpg"
          alt="Aerial view of forest with GIS mapping"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/10 to-black/0" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-forest-light/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-xs md:text-sm mb-6 md:mb-8 animate-fade-in max-w-full text-center">
            <TreePine className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <span>Solusi Terpercaya untuk Survey, Kehutanan, & GIS</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-accent">Membangun</span> <span style={{ color: 'hsl(114.64deg 38.63% 40.72%)' }}>Masa Depan</span>
            <span className="block"> Berkelanjutan</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            KSC adalah mitra terpercaya dalam layanan kehutanan, pemetaan GIS, survei lahan, dan pengembangan proyek. Kami menghadirkan solusi inovatif dengan teknologi terkini.
          </p>


          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-accent mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">150+</div>
              <div className="text-sm text-primary-foreground/70">Proyek Selesai</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-accent mb-2">
                <TreePine className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">50K+</div>
              <div className="text-sm text-primary-foreground/70">Hektar Dipetakan</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-accent mb-2">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">10+</div>
              <div className="text-sm text-primary-foreground/70">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
