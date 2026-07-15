import { ClipboardCheck, BadgeCheck } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import IconTile from '../components/ui/IconTile'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { inspection } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function ServicesInspection() {
  return (
    <div>
      <PageHero eyebrow={inspection.tag} title={inspection.title} description={inspection.lead} />

      <Container size="default" className="py-20 space-y-6">
        {inspection.body.map((p, idx) => (
          <Reveal key={p} delay={idx * 0.06}>
            <p className="text-slate-600 leading-relaxed text-lg font-normal">{p}</p>
          </Reveal>
        ))}
      </Container>

      {/* CORE SERVICES GRID */}
      <section className="py-20 border-t border-slate-200/50 bg-white">
        <Container size="wide">
          <SectionHeader
            tag="SERVICE SCOPE"
            title="Core Inspection & Audit Services"
            description="Comprehensive quality assurance, expediting, and third-party inspection services across industrial sectors."
          />
          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspection.servicesList.map((service, idx) => (
              <StaggerItem key={service}>
                <div className="premium-card p-6 flex items-start gap-4 hover:shadow-card-hover h-full bg-slate-50/50">
                  <span className="font-mono text-[10px] text-signal-500 bg-signal-50 border border-signal-100 rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-slate-800 leading-snug text-sm font-semibold mt-0.5">{service}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* SHUTDOWN & TURNAROUND HIGHLIGHT */}
      <section className="bg-slate-50 border-y border-slate-200/50 relative py-20">
        <div className="absolute inset-0 bg-grid-lines-dim bg-grid-sm opacity-10 pointer-events-none" aria-hidden="true" />
        <Container size="default" className="relative">
          <Reveal>
            <div className="premium-card p-8 md:p-10 bg-white">
              <div className="flex items-start gap-4">
                <IconTile icon={ClipboardCheck} tone="signal" />
                <h2 className="font-display uppercase text-2xl text-slate-900 font-medium mt-1">{inspection.highlight.title}</h2>
              </div>
              <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
                {inspection.highlight.body.map((p) => (
                  <p key={p} className="text-slate-600 leading-relaxed font-normal">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CERTIFIED & APPROVED CAPABILITIES */}
      <section className="py-20 bg-white">
        <Container size="wide">
          <SectionHeader
            tag="CREDENTIALS"
            title="Certified Capabilities & Approved Categories"
            description="Our inspectors and company processes are approved by leading operators and accredited to international standards."
          />
          
          <StaggerGroup className="mt-12 grid md:grid-cols-3 gap-8">
            {inspection.approvedCategories.map((cat) => (
              <StaggerItem key={cat.group}>
                <div className="nameplate crop-corners bg-slate-50/50 p-6 md:p-8 h-full flex flex-col justify-between" data-tag={cat.group.toUpperCase()}>
                  <div className="space-y-4">
                    <h3 className="font-display uppercase text-lg text-slate-900 border-b border-slate-200 pb-3 font-semibold">
                      {cat.group}
                    </h3>
                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-slate-600 flex gap-2.5 font-normal leading-relaxed">
                          <BadgeCheck className="w-4 h-4 text-signal-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <Container size="default" className="py-20 text-center border-t border-slate-200/50">
        <Reveal>
          <p className="text-slate-500">Need to scope your next shutdown or turnaround?</p>
          <div className="mt-6 flex justify-center">
            <Button to="/contact" variant="primary" className="rounded-full">
              Talk to Our Planning Team
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
