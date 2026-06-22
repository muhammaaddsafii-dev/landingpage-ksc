import { getLayanan } from '@/lib/landingApi';

const Services = async () => {
  const services = await getLayanan();

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
              key={service.id}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.signed_file_icon_url ? (
                    <img
                      src={service.signed_file_icon_url}
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-accent/10" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div
                    className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: service.deskripsi }}
                  />
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
