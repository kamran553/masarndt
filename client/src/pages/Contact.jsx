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

      <Container size="wide" className="py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="lg:col-span-2 space-y-6">
          {offices.map((o, idx) => (
            <Reveal key={o.label} delay={idx * 0.08}>
              <div className="premium-card p-6 md:p-8 flex flex-col justify-between hover:shadow-card-hover">
                <div>
                  <h2 className="font-display uppercase text-lg text-slate-900 flex items-center gap-2.5 font-medium">
                    <MapPin className="w-5 h-5 text-signal-500 shrink-0" aria-hidden="true" />
                    {o.label}
                  </h2>
                  <div className="mt-4 space-y-1.5 pl-7">
                    {o.lines.map((l) => (
                      <p key={l} className="text-slate-500 text-sm leading-relaxed font-normal">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5 pl-7 font-mono text-xs">
                  {o.mobile && (
                    <a href={`tel:${o.mobile.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-slate-500 hover:text-signal-500 transition-colors">
                      <Phone className="w-4 h-4 text-slate-400" aria-hidden="true" />
                      {o.mobile}
                    </a>
                  )}
                  <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-signal-500 hover:text-signal-600 transition-colors font-medium">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    {o.email}
                  </a>
                  <p className="flex items-center gap-2 text-slate-400">
                    <Globe className="w-4 h-4 text-slate-300" aria-hidden="true" />
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
