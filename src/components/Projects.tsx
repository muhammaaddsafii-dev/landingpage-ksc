import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getProyek } from '@/lib/landingApi';
import ProjectsCarousel from '@/components/ProjectsCarousel';

const Projects = async () => {
  const projects = await getProyek();

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

        <ProjectsCarousel projects={projects} />

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="outline" size="lg">
              Lihat Semua Proyek
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
