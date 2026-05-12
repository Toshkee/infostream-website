import { MapPin, Phone, Mail } from "lucide-react";

export function MapSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-10 items-start">
          {/* Address info */}
          <div>
            <h2 className="text-2xl font-bold text-heading mb-6">Find us</h2>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-brand-violet" />
                <span className="text-body leading-relaxed">
                  4 Rista Dragićevića<br />
                  81000 Podgorica<br />
                  Montenegro
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-violet" />
                <a
                  href="tel:+38220664808"
                  className="text-body transition-colors hover:text-heading"
                >
                  +382 (0) 20 664 808
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-violet" />
                <a
                  href="mailto:info@infostream.co.me"
                  className="text-body transition-colors hover:text-heading"
                >
                  info@infostream.co.me
                </a>
              </li>
            </ul>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-xl overflow-hidden border border-border shadow-card h-72 sm:h-80 lg:h-96">
            <iframe
              title="Infostream office location"
              src="https://maps.google.com/maps?q=4+Rista+Dragicevica,+Podgorica,+Montenegro&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
