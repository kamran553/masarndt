import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/SectionHeader'
import Container from '../components/ui/Container'
import Badge from '../components/ui/Badge'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { company, stats } from '../data/content'
import { statIcons, defaultStatIcon, certificationIcon } from '../lib/icons'

const certifications = [
  'ISO 9001:2015',
  'API Certified Inspectors',
  'NACE / BGAS Standards',
  'ASME / ASTM Compliant Procedures',
]

export default function About() {
  return (
    <div>
      <PageHero eyebrow="ABOUT MASAR NDT" title="An ISO-certified name in inspection since 2021" />

      <Container size="default" className="py-20 space-y-6">
        {company.about.map((p, idx) => (
          <Reveal key={p} delay={idx * 0.06}>
            <p className="text-slate-600 leading-relaxed text-lg font-normal">{p}</p>
          </Reveal>
        ))}
      </Container>

      <section className="bg-slate-50 border-y border-slate-200/50 relative py-20">
        <div className="absolute inset-0 bg-grid-lines-dim bg-grid-sm opacity-10 pointer-events-none" aria-hidden="true" />
        <Container size="default" className="relative grid sm:grid-cols-2 gap-8">
          <Reveal>
            <div className="premium-card p-8 h-full bg-white">
              <p className="font-mono text-[9px] tracking-widest2 text-signal-600 uppercase font-bold mb-3">MISSION</p>
              <p className="text-slate-600 leading-relaxed font-normal">{company.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="premium-card p-8 h-full bg-white">
              <p className="font-mono text-[9px] tracking-widest2 text-signal-600 uppercase font-bold mb-3">VISION</p>
              <p className="text-slate-600 leading-relaxed font-normal">{company.vision}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <Container size="wide">
          <SectionHeader tag="BY THE NUMBERS" title="A workforce built for scale" />
          <StaggerGroup className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => {
              const Icon = statIcons[s.label] || defaultStatIcon
              return (
                <StaggerItem key={s.label}>
                  <div className="premium-card p-8 text-center h-full hover:shadow-card-hover">
                    <Icon className="w-6 h-6 text-signal-500 mx-auto" strokeWidth={1.75} aria-hidden="true" />
                    <p className="font-display text-3xl text-slate-900 mt-4 font-semibold">
                      <AnimatedCounter value={s.value} />
                    </p>
                    <p className="text-xs text-slate-500 mt-2 font-medium uppercase tracking-wider">{s.label}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </Container>
      </section>

      <Container size="default" className="pb-28 bg-white">
        <SectionHeader tag="CERTIFICATIONS" title="Accredited to the standards our clients trust" />
        <StaggerGroup className="mt-8 flex flex-wrap gap-3">
          {certifications.map((c) => (
            <StaggerItem key={c}>
              <Badge icon={certificationIcon} tone="signal" className="font-mono rounded-full px-4 py-2">
                {c}
              </Badge>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </div>
  )
}
