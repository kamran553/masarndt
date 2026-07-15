import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import SectionEyebrow from '../components/ui/SectionEyebrow'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { manpower, stats } from '../data/content'
import { statIcons, defaultStatIcon, disciplineIcons, defaultDisciplineIcon } from '../lib/icons'
import SectionHeader from '../components/SectionHeader'

export default function ServicesManpower() {
  return (
    <div>
      <PageHero eyebrow={manpower.tag} title={manpower.title} description={manpower.lead} />

      <Container size="default" className="py-20 space-y-6">
        {manpower.body.map((p, idx) => (
          <Reveal key={p} delay={idx * 0.06}>
            <p className="text-slate-600 leading-relaxed text-lg font-normal">{p}</p>
          </Reveal>
        ))}
      </Container>

      <Container size="wide" className="pb-12 bg-white/40">
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = statIcons[s.label] || defaultStatIcon
            return (
              <StaggerItem key={s.label}>
                <div className="premium-card p-6 text-center h-full hover:shadow-card-hover">
                  <Icon className="w-5 h-5 text-signal-500 mx-auto" strokeWidth={1.75} aria-hidden="true" />
                  <p className="font-display text-2xl text-slate-900 mt-3 font-semibold">
                    <AnimatedCounter value={s.value} />
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </Container>

      {/* DISCIPLINES SUPPLIED */}
      <section className="bg-slate-50 border-y border-slate-200/50 relative py-20">
        <div className="absolute inset-0 bg-grid-lines-dim bg-grid-sm opacity-10 pointer-events-none" aria-hidden="true" />
        <Container size="default" className="relative">
          <Reveal>
            <SectionEyebrow className="mb-6">DISCIPLINES SUPPLIED</SectionEyebrow>
          </Reveal>
          <StaggerGroup className="flex flex-wrap gap-3.5">
            {manpower.disciplines.map((d) => {
              const Icon = disciplineIcons[d] || defaultDisciplineIcon
              return (
                <StaggerItem key={d}>
                  <span className="inline-flex items-center gap-2 text-sm border border-slate-200 bg-white rounded-full px-5 py-2.5 text-slate-600 hover:border-signal-500/40 hover:text-slate-900 transition-colors font-medium">
                    <Icon className="w-4 h-4 text-signal-500" strokeWidth={2} aria-hidden="true" />
                    {d}
                  </span>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </Container>
      </section>

      {/* TRAINING & PROFESSIONAL CERTIFICATIONS */}
      <section className="py-20 bg-white">
        <Container size="wide">
          <SectionHeader
            tag="PROFESSIONAL DEVELOPMENT"
            title="Training & QA/QC Certification Prep"
            description="We conduct in-house preparation courses and specialized technical training to ensure high proficiency and compliance with global codes."
          />
          <StaggerGroup className="mt-12 grid md:grid-cols-2 gap-8">
            {manpower.training.map((t) => (
              <StaggerItem key={t.category}>
                <div className="nameplate crop-corners bg-slate-50/50 p-6 md:p-8 h-full flex flex-col justify-between" data-tag="ACADEMY">
                  <div>
                    <h3 className="font-display uppercase text-lg text-slate-900 border-b border-slate-200 pb-4 font-semibold">
                      {t.category}
                    </h3>
                    <ul className="mt-6 space-y-3.5">
                      {t.courses.map((course) => (
                        <li key={course} className="text-sm text-slate-600 flex gap-3 font-normal leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-signal-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{course}</span>
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
          <p className="text-slate-500">Need to mobilize technical manpower for a turnaround or EPC project?</p>
          <div className="mt-6 flex justify-center">
            <Button to="/contact" variant="primary" className="rounded-full">
              Submit Your Manpower Requirement
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
