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
            <p className="text-steel-600 leading-relaxed text-lg">{p}</p>
          </Reveal>
        ))}
      </Container>

      <section className="bg-steel-50 border-y border-steel-200/60 text-ink">
        <Container size="default" className="py-16 grid sm:grid-cols-2 gap-8">
          <Reveal>
            <div className="nameplate crop-corners bg-white p-8 h-full" data-tag="MISSION">
              <p className="mt-2 text-steel-600 leading-relaxed">{company.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="nameplate crop-corners bg-white p-8 h-full" data-tag="VISION">
              <p className="mt-2 text-steel-600 leading-relaxed">{company.vision}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="wide">
          <SectionHeader tag="BY THE NUMBERS" title="A workforce built for scale" />
          <StaggerGroup className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => {
              const Icon = statIcons[s.label] || defaultStatIcon
              return (
                <StaggerItem key={s.label}>
                  <div className="bg-paper border border-steel-200 rounded-2xl p-8 text-center h-full hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                    <Icon className="w-6 h-6 text-signal-500 mx-auto" strokeWidth={1.75} aria-hidden="true" />
                    <p className="font-display text-3xl text-ink mt-3">
                      <AnimatedCounter value={s.value} />
                    </p>
                    <p className="text-xs text-steel-500 mt-2 leading-snug">{s.label}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </Container>
      </section>

      <Container size="default" className="pb-24">
        <SectionHeader tag="CERTIFICATIONS" title="Accredited to the standards our clients trust" />
        <StaggerGroup className="mt-8 flex flex-wrap gap-3">
          {certifications.map((c) => (
            <StaggerItem key={c}>
              <Badge icon={certificationIcon} tone="signal" className="font-mono">
                {c}
              </Badge>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </div>
  )
}
