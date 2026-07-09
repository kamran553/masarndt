import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import SectionEyebrow from '../components/ui/SectionEyebrow'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { manpower, stats } from '../data/content'
import { statIcons, defaultStatIcon, disciplineIcons, defaultDisciplineIcon } from '../lib/icons'

export default function ServicesManpower() {
  return (
    <div>
      <PageHero eyebrow={manpower.tag} title={manpower.title} description={manpower.lead} />

      <Container size="default" className="py-16 space-y-6">
        {manpower.body.map((p, idx) => (
          <Reveal key={p} delay={idx * 0.06}>
            <p className="text-steel-600 leading-relaxed text-lg">{p}</p>
          </Reveal>
        ))}
      </Container>

      <Container size="wide" className="pb-8">
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => {
            const Icon = statIcons[s.label] || defaultStatIcon
            return (
              <StaggerItem key={s.label}>
                <div className="bg-paper border border-steel-200 rounded-2xl p-6 text-center h-full hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                  <Icon className="w-5 h-5 text-signal-500 mx-auto" strokeWidth={1.75} aria-hidden="true" />
                  <p className="font-display text-2xl text-ink mt-3">
                    <AnimatedCounter value={s.value} />
                  </p>
                  <p className="text-xs text-steel-500 mt-1 leading-snug">{s.label}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </Container>

      <section className="bg-steel-50 border-y border-steel-200/60 text-ink">
        <Container size="default" className="py-16">
          <Reveal>
            <SectionEyebrow className="mb-5 text-steel-400">DISCIPLINES SUPPLIED</SectionEyebrow>
          </Reveal>
          <StaggerGroup className="flex flex-wrap gap-3">
            {manpower.disciplines.map((d) => {
              const Icon = disciplineIcons[d] || defaultDisciplineIcon
              return (
                <StaggerItem key={d}>
                  <span className="inline-flex items-center gap-2 text-sm border border-steel-200 rounded-full px-4 py-2 text-steel-600 bg-white hover:border-signal-500/50 hover:text-ink transition-colors">
                    <Icon className="w-4 h-4 text-signal-500" strokeWidth={1.75} aria-hidden="true" />
                    {d}
                  </span>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </Container>
      </section>

      <Container size="default" className="py-16 text-center">
        <Reveal>
          <p className="text-steel-500">Need to mobilize technical manpower for a shutdown or EPC project?</p>
          <div className="mt-5 flex justify-center">
            <Button to="/contact" variant="primary">
              Submit Your Manpower Requirement
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
