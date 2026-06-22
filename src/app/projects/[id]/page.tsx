import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, Calendar, Briefcase, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectImageSlider from '@/components/ProjectImageSlider';
import { getProyekBySlug } from '@/lib/landingApi';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProyekBySlug(id);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Proyek Tidak Ditemukan</h1>
            <Link href="/projects">
              <Button>Kembali ke Daftar Proyek</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Gallery: pakai images dari DB; fallback ke cover image jika belum ada gallery
  const galleryImages = project.images
    .map(img => img.signed_file_images_url)
    .filter((url): url is string => !!url);

  const coverUrl = project.signed_file_image_cover_url;

  return (
    <main className="min-h-screen bg-muted/10">
      <Navbar />

      {/* Header */}
      <div className="pt-32 bg-card border-b border-border/50" style={{ paddingBottom: '2rem' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Kembali ke Semua Proyek
          </Link>

          <div className="mb-0">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold tracking-wide mb-4">
              {project.kategori_display || project.kategori}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight w-full">
              {project.nama_proyek}
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Slider — gallery images, fallback ke cover */}
            {galleryImages.length > 0 ? (
              <ProjectImageSlider images={galleryImages} alt={project.nama_proyek} />
            ) : coverUrl ? (
              <div className="rounded-3xl overflow-hidden shadow-medium border border-border/50">
                <img
                  src={coverUrl}
                  alt={project.nama_proyek}
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
            ) : null}

            {/* Deskripsi */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">Deskripsi Proyek</h2>
              <div
                className="text-justify text-muted-foreground text-lg leading-relaxed prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: project.deskripsi }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-soft">
              <h3 className="font-heading text-xl font-bold mb-6 border-b border-border pb-4">Info Proyek</h3>
              <div className="space-y-6">
                {project.klien && (
                  <div>
                    <div className="flex items-center text-muted-foreground mb-1 text-sm">
                      <Briefcase className="w-4 h-4 mr-2" /> Klien
                    </div>
                    <div className="font-medium text-foreground">{project.klien}</div>
                  </div>
                )}
                {project.lokasi && (
                  <div>
                    <div className="flex items-center text-muted-foreground mb-1 text-sm">
                      <MapPin className="w-4 h-4 mr-2" /> Lokasi
                    </div>
                    <div className="font-medium text-foreground">{project.lokasi}</div>
                  </div>
                )}
                {project.tahun_pelaksanaan && (
                  <div>
                    <div className="flex items-center text-muted-foreground mb-1 text-sm">
                      <Calendar className="w-4 h-4 mr-2" /> Tahun Pelaksanaan
                    </div>
                    <div className="font-medium text-foreground">{project.tahun_pelaksanaan}</div>
                  </div>
                )}
                {project.durasi && (
                  <div>
                    <div className="flex items-center text-muted-foreground mb-1 text-sm">
                      <Clock className="w-4 h-4 mr-2" /> Durasi
                    </div>
                    <div className="font-medium text-foreground">{project.durasi}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Map */}
            {project.koordinat_lat !== null && project.koordinat_lng !== null && (
              <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-soft">
                <h3 className="font-heading text-xl font-bold mb-6 border-b border-border pb-4">Lokasi Peta</h3>
                <div className="rounded-xl overflow-hidden shadow-sm border border-border">
                  <iframe
                    width="100%"
                    height="250"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://maps.google.com/maps?q=${project.koordinat_lat},${project.koordinat_lng}&z=10&output=embed`}
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
