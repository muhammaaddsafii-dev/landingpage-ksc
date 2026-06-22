'use client';

import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import type { ProyekData } from '@/lib/landingApi';

interface Props {
  projects: ProyekData[];
}

const ProjectsCarousel = ({ projects }: Props) => {
  if (projects.length === 0) return null;

  return (
    <div className="relative px-4 md:px-8">
      <Carousel opts={{ align: 'start', loop: true }} className="w-full">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="group h-full bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  {project.signed_file_image_cover_url ? (
                    <img
                      src={project.signed_file_image_cover_url}
                      alt={project.nama_proyek}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                      {project.kategori_display || project.kategori}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {project.nama_proyek}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.lokasi}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.tahun_pelaksanaan}
                    </span>
                  </div>

                  <div
                    className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: project.deskripsi }}
                  />

                  <div className="mt-auto">
                    <Link href={`/projects/${project.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent group/btn">
                        Lihat Detail
                        <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </Link>
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
  );
};

export default ProjectsCarousel;
