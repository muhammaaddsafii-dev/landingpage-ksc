"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/lib/data';
import Link from 'next/link';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header Space for Navbar */}
      <div className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Portfolio
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Semua Proyek Kami
            </h1>
            <p className="text-muted-foreground text-lg">
              Eksplorasi riwayat lengkap layanan dan pengerjaan proyek kami di berbagai sektor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 flex flex-col"
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
                    <Link href={`/projects/${project.id}`}>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent group/btn">
                        Lihat Detail
                        <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
