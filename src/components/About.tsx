import { CheckCircle2, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Visi',
      description: 'Menjadi perusahaan konsultan terkemuka di Indonesia dalam bidang kehutanan, GIS, dan pembangunan berkelanjutan.',
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Didukung oleh tim ahli berpengalaman dengan latar belakang pendidikan dan sertifikasi profesional.',
    },
    {
      icon: Award,
      title: 'Kualitas Terjamin',
      description: 'Komitmen terhadap standar kualitas internasional dan kepuasan klien dalam setiap proyek.',
    },
  ];

  const achievements = [
    'Sertifikasi ISO 9001:2015',
    'Mitra Pemerintah & Swasta',
    'Pengalaman 10+ Tahun',
    'Tim Ahli Tersertifikasi',
    'Teknologi Terkini',
    'Jaringan Nasional',
  ];

  return (
    <section id="tentang" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Tentang KSC
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Membangun Kepercayaan Melalui{' '}
              <span className="text-primary">Keahlian & Dedikasi</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              KSC (Konsultan Survey & Consulting) adalah perusahaan yang bergerak dalam bidang kehutanan, sistem informasi geografis (GIS), survey, dan pengembangan. Sejak berdiri, kami telah membantu berbagai instansi pemerintah dan perusahaan swasta dalam mengelola sumber daya alam secara berkelanjutan.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Dengan pendekatan berbasis teknologi dan tim profesional yang berpengalaman, kami berkomitmen untuk memberikan solusi terbaik yang tidak hanya memenuhi kebutuhan klien tetapi juga menjaga kelestarian lingkungan.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {achievements.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg">
              Hubungi Tim Kami
            </Button>
          </div>

          {/* Right Content - Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Decorative Stats Card */}
            <div className="bg-gradient-to-br from-primary to-forest-medium rounded-2xl p-6 text-primary-foreground">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">150+</div>
                  <div className="text-sm text-primary-foreground/80">Proyek</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm text-primary-foreground/80">Klien</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">25+</div>
                  <div className="text-sm text-primary-foreground/80">Tim Ahli</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
