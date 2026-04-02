"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/lib/data';
import Link from 'next/link';
import { MapPin, Calendar, Briefcase, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectDetail() {
  const params = useParams();
  const id = params?.id;

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-muted/30">
        <Navbar />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Proyek Tidak Ditemukan</h1>
          <Link href="/projects">
            <Button>Kembali ke Daftar Proyek</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/10">
      <Navbar />

      {/* Hero Section of Detail */}
      <div className="pt-32 bg-card border-b border-border/50" style={{ paddingBottom: '2rem' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Kembali ke Semua Proyek
          </Link>

          <div className="mb-0">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold tracking-wide mb-4">
              {project.category}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight w-full">
              {project.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main article */}
          <div className="lg:col-span-2 space-y-8">
            {project.gallery && project.gallery.length > 0 ? (
              <Carousel className="w-full group/carousel relative rounded-3xl overflow-hidden shadow-medium border border-border/50">
                <CarouselContent>
                  {project.gallery.map((imgUrl, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={imgUrl}
                        alt={`${project.title} - Slide ${index + 1}`}
                        className="w-full h-auto aspect-video object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-none opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-none opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0" />
              </Carousel>
            ) : (
              <div className="rounded-3xl overflow-hidden shadow-medium border border-border/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
            )}

            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">Deskripsi Proyek</h2>
              <p className="text-justify text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
              <p className="text-justify text-muted-foreground text-lg leading-relaxed">
                Keberhasilan eksekusi proyek ini menunjukkan dedikasi KSC dalam memberikan layanan berbasis teknologi mutakhir dengan akurasi dan ketepatan tinggi untuk memastikan hasil terbaik.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-soft">
              <h3 className="font-heading text-xl font-bold mb-6 border-b border-border pb-4">Info Proyek</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center text-muted-foreground mb-1 text-sm">
                    <Briefcase className="w-4 h-4 mr-2" /> Klien
                  </div>
                  <div className="font-medium text-foreground">{project.client}</div>
                </div>

                <div>
                  <div className="flex items-center text-muted-foreground mb-1 text-sm">
                    <MapPin className="w-4 h-4 mr-2" /> Lokasi
                  </div>
                  <div className="font-medium text-foreground">{project.location}</div>
                </div>

                <div>
                  <div className="flex items-center text-muted-foreground mb-1 text-sm">
                    <Calendar className="w-4 h-4 mr-2" /> Tahun Pelaksanaan
                  </div>
                  <div className="font-medium text-foreground">{project.year}</div>
                </div>

                <div>
                  <div className="flex items-center text-muted-foreground mb-1 text-sm">
                    <Clock className="w-4 h-4 mr-2" /> Durasi
                  </div>
                  <div className="font-medium text-foreground">{project.duration}</div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            {project.coordinates && (
              <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-soft">
                <h3 className="font-heading text-xl font-bold mb-6 border-b border-border pb-4">Lokasi Peta</h3>
                <div className="rounded-xl overflow-hidden shadow-sm border border-border">
                  <iframe
                    width="100%"
                    height="250"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://maps.google.com/maps?q=${project.coordinates.lat},${project.coordinates.lng}&z=10&output=embed`}
                    allowFullScreen
                    title="Peta Lokasi Proyek"
                  />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
