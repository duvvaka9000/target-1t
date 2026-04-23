import {
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  PhoneCall,
  Youtube,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Gallery & Results', href: '#gallery' },
  { label: 'Contact & Book', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

function Footer() {
  return (
    <footer className="bg-brand-700 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:gap-8 lg:px-8">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            Raj Dental Clinic &amp; Implant Centre
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-teal-100">
            Providing world-class, painless dental care in Dahisar West. Your smile
            is our top priority.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-teal-50 transition duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(153,246,228,0.45)]"
              >
                <Icon size={18} className="transition group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-teal-100 transition hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <div className="mt-4 space-y-4 text-sm text-teal-100">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-teal-200" size={18} />
              <p>
                Shop No.3, Sai Dham Apt, Lt Rd,
                <br />
                opp. dahisar subway fish market,
                <br />
                Dahisar West, Maharashtra 400068, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <PhoneCall className="shrink-0 text-teal-200" size={18} />
              <a href="tel:+919768977627" className="transition hover:text-white">
                +91 97689 77627
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 shrink-0 text-teal-200" size={18} />
              <p>
                <span className="font-medium text-teal-50">Mon - Sat:</span>
                <br />
                10 AM - 2 PM
                <br />
                5:30 PM - 10 PM
                <br />
                <span className="mt-1 inline-block font-medium text-teal-50">
                  Sunday: By Appointment
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 bg-brand-800/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-teal-100 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Raj Dental Clinic &amp; Implant Centre. All rights reserved.</p>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <span className="text-teal-300">|</span>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
