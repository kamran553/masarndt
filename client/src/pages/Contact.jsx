import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import ContactForm from '../components/ContactForm'
import { Reveal } from '../components/ui/Reveal'
import { offices } from '../data/content'

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Contact Masar NDT"
        description="Tell us about your inspection, NDT, engineering or manpower requirement — our team will respond promptly."
      />

      <Container size="wide" className="py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="lg:col-span-2 space-y-6">
          {offices.map((o, idx) => (
            <Reveal key={o.label} delay={idx * 0.08}>
              <div className="nameplate crop-corners p-6" data-tag="OFFICE">
                <h2 className="font-display uppercase text-lg text-ink mt-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-signal-500" aria-hidden="true" />
                  {o.label}
                </h2>
                {o.lines.map((l) => (
                  <p key={l} className="text-steel-500 text-sm mt-1 pl-6">
                    {l}
                  </p>
                ))}
                <div className="mt-4 space-y-2 font-mono text-sm">
                  {o.mobile && (
                    <a href={`tel:${o.mobile.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-ink hover:text-signal-500 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-steel-400" aria-hidden="true" />
                      {o.mobile}
                    </a>
                  )}
                  <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-signal-500 hover:text-signal-600 transition-colors">
                    <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                    {o.email}
                  </a>
                  <p className="flex items-center gap-2 text-steel-500">
                    <Globe className="w-3.5 h-3.5 text-steel-400" aria-hidden="true" />
                    {o.website}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  )
}
