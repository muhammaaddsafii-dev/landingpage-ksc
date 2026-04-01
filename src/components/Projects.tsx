import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: 'Pemetaan Kawasan Hutan Lindung',
    location: 'Kalimantan Timur',
    year: '2024',
    category: 'GIS & Kehutanan',
    description: 'Pemetaan detail kawasan hutan lindung seluas 25.000 hektar menggunakan teknologi drone dan satelit.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop',
  },
  {
    title: 'Survey Topografi Infrastruktur',
    location: 'Sulawesi Selatan',
    year: '2024',
    category: 'Survey',
    description: 'Survey topografi untuk pembangunan jalan lintas provinsi sepanjang 120 kilometer.',
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&h=400&fit=crop',
  },
  {
    title: 'Inventarisasi Tegakan Hutan',
    location: 'Sumatera Utara',
    year: '2023',
    category: 'Kehutanan',
    description: 'Inventarisasi tegakan dan analisis potensi kayu pada konsesi hutan produksi.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&h=400&fit=crop',
  },
  {
    title: 'Sistem WebGIS Monitoring',
    location: 'Jakarta',
    year: '2023',
    category: 'Development',
    description: 'Pengembangan sistem WebGIS untuk monitoring real-time kawasan konservasi.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="proyek" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proyek Unggulan Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Beberapa proyek terbaik yang telah kami selesaikan bersama klien dari berbagai sektor.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div
                    className="group h-full bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-auto">
                        <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent group/btn">
                          Lihat Detail
                          <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12" />
            <CarouselNext className="-right-4 lg:-right-12" />
          </Carousel>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Lihat Semua Proyek
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
