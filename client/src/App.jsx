import {
  Award,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import Footer from './components/Footer';

const services = [
  'Dental Implants',
  'Root Canal Treatment',
  'Cosmetic Smile Design',
  'Teeth Whitening',
  'Kids Dentistry',
  'Painless Tooth Extraction',
];

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Safe & Sterile Care',
    description: 'Global sterilization protocols for your safety and peace of mind.',
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description: 'Trusted dental experts focused on long-term oral health outcomes.',
  },
  {
    icon: Sparkles,
    title: 'Comfort-First Approach',
    description: 'Painless treatments in a friendly, modern, stress-free setting.',
  },
];

function App() {
  return (
    <div className="bg-slate-50">
      <header id="home" className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1 text-xs font-semibold tracking-wider text-brand-700">
              Trusted Dental Clinic in Dahisar West
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Confident Smiles Start with Compassionate, Painless Dental Care.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Advanced dentistry, modern technology, and personalized treatment plans
              to keep your family smiling.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-800/20 transition hover:-translate-y-0.5 hover:bg-brand-800"
              >
                <CalendarDays size={18} /> Book Appointment
              </a>
              <a
                href="tel:+919768977627"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-700 hover:text-brand-700"
              >
                <Phone size={18} /> Call Clinic
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Why Patients Trust Us</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            We combine clinical excellence with genuine care, so every visit feels
            reassuring and every treatment is tailored to your comfort.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Icon className="text-brand-700" size={24} />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 rounded-xl border border-teal-100 bg-teal-50/50 p-4 text-slate-700"
                >
                  <CheckCircle2 size={18} className="text-brand-700" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Gallery &amp; Results</h2>
          <p className="mt-3 text-slate-600">
            Real smile transformations delivered with precision and care.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-48 rounded-2xl border border-slate-200 bg-gradient-to-br from-teal-100 to-white p-6"
              >
                <Stethoscope className="text-brand-700" />
                <p className="mt-3 text-sm text-slate-700">Before & After Case #{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <div className="rounded-3xl bg-brand-900 p-8 text-white shadow-xl">
              <h2 className="text-2xl font-semibold">Ready to book your consultation?</h2>
              <p className="mt-2 max-w-2xl text-sm text-teal-100">
                Call now or message us on WhatsApp for quick appointment support.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+919768977627"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:scale-105"
                >
                  <Phone size={16} /> +91 97689 77627
                </a>
                <a
                  href="https://wa.me/919768977627?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-400 px-5 py-2.5 text-sm font-semibold text-teal-100 transition hover:scale-105 hover:border-teal-300 hover:text-white"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
        <a
          href="tel:+919768977627"
          aria-label="Call Raj Dental Clinic"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition hover:scale-105 hover:bg-brand-800"
        >
          <Phone size={20} />
        </a>
        <a
          href="https://wa.me/919768977627?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </div>
  );
}

export default App;
