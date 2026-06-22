import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { getKontak } from '@/lib/landingApi';
import ContactForm from '@/components/ContactForm';

const Contact = async () => {
  const kontak = await getKontak();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: kontak?.alamat || 'Jl. Kehutanan No. 123, Jakarta Selatan, Indonesia 12345',
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: kontak?.telepon || '+62 21 1234 5678',
    },
    {
      icon: Mail,
      title: 'Email',
      content: kontak?.email || 'info@ksc-indonesia.com',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: kontak?.jam_operasional || 'Senin - Jumat: 08:00 - 17:00 WIB',
    },
  ];

  const lat = kontak?.koordinat_lat ?? -6.2293867;
  const lng = kontak?.koordinat_lng ?? 106.7894636;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed&hl=id`;

  return (
    <section id="kontak" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mari Diskusikan Proyek Anda
          </h2>
          <p className="text-muted-foreground text-lg">
            Tim kami siap membantu mewujudkan proyek Anda. Hubungi kami untuk konsultasi gratis.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="h-64 bg-muted rounded-xl overflow-hidden border border-border/50">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KSC Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
