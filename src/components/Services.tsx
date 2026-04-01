import { Award, Trophy, MessageSquareText, Box, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Award,
    title: 'Perencanaan Kehutanan',
    description: 'Penyusunan dokumen perencanaan usaha kehutanan seperti: Deliniasi Mikro (Delmik), Deliniasi Makro (Delmak), Rencana Kerja Usaha (RKU), Rencana Kerja Tahunan (RKT) dan Logging Track.',
    features: ['Deliniasi Mikro & Makro', 'Rencana Kerja (RKU/RKT)', 'Logging Track'],
  },
  {
    icon: Trophy,
    title: 'Penyusunan Tata Ruang',
    description: 'Perencanaan/Penyusunan Tata Ruang, Review Tata Ruang dan Sinkronisasi Tata Ruang, Baik terkait Tata Ruang Kehutanan, Tata Ruang Pertambangan serta Tata Ruang Wilayah Prov./Kab.',
    features: ['Review Tata Ruang', 'Sinkronisasi Tata Ruang', 'Tata Ruang Wilayah'],
  },
  {
    icon: MessageSquareText,
    title: 'Pengurusan Ijin Kehutanan',
    description: 'Asistensi dan supervisi Pengurusan Perijinan dalam Permohonan IUPHHK-HA/ IUPHHK-HTI/IUPHHBK-HT (sagu), Ijin Pinjam Pakai Kwsn Hutan (IPPKH), serta Ijin Perkebunan mulai dari tingkat Daerah (Kab. dan Prov.), sampai dengan SK Menteri.',
    features: ['Ijin IUPHHK-HA/HTI', 'Ijin Pinjam Pakai (IPPKH)', 'Ijin Perkebunan'],
  },
  {
    icon: Box,
    title: 'Pinjam Pakai Kawasan Hutan',
    description: 'Asistensi dan supervisi proses permohonan ijin pinjam pakai kawasan hutan/IPPKH (pertambangan, telekomunikasi, mikro hidro dan migas) termasuk penyiapan kelengkapan dokumen dan legalitasnya.',
    features: ['Proses Permohonan IPPKH', 'Sektor Tambang & Migas', 'Dokumen & Legalitas'],
  },
  {
    icon: Award,
    title: 'Pelepasan & Tukar Menukar Kawasan Hutan',
    description: 'Asistensi dan Supervisi perkebunan dalam proses pelepasan kawasan hutan (HPK menjadi APL) dan Tukar Menukar Kawasan Hutan (HP menjadi APL).',
    features: ['Pelepasan Kawasan (HPK ke APL)', 'Tukar Menukar Kawasan', 'Asistensi & Supervisi'],
  },
  {
    icon: Trophy,
    title: 'Pelaksanaan Survey Dan Tata Batas',
    description: 'Membantu perusahaan pemegang IUPHHK-HA/IUPHHK-HTI/IUPHHBK-HT, perusahaan perkebunan/pertambangan dalam proses pelaksanaan tatabatas, IHMB & Identifikasi potensi areal.',
    features: ['Pelaksanaan Tata Batas', 'Inventarisasi Hutan (IHMB)', 'Identifikasi Potensi Areal'],
  },
  {
    icon: MessageSquareText,
    title: 'Survai Dan Pemetaan Digital',
    description: 'Survai terrestis menggunakan theodolith, total station maupun GPS dan pemetaan secara digital (Digitasi, edit, layout dan pencetakan peta).',
    features: ['Survei Terrestis (GPS/TS)', 'Pemetaan Digital & Digitasi', 'Layout & Pencetakan Peta'],
  },
  {
    icon: Box,
    title: 'Penafsiran Citra Dan Foto Udara',
    description: 'Penafsiran citra landsat, ASTER, SPOT, Ikonos/Quickbird, baik secara manual on screen maupun digital.',
    features: ['Penafsiran Citra Satelit', 'Analisis Foto Udara', 'Metode Manual & Digital'],
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solusi Komprehensif untuk Kebutuhan Anda
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami menyediakan berbagai layanan profesional dengan standar kualitas tertinggi untuk mendukung proyek Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
