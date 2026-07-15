import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import IconTile from '../components/ui/IconTile'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { industries } from '../data/content'
import { industryIcons, defaultIndustryIcon } from '../lib/icons'

export default function Industries() {
  return (
    <div>
      <PageHero
        eyebrow="SEC. 06 — SECTORS"
        title="Industries We Serve"
        description="Delivering skilled inspection, NDT and manpower solutions across more than 30 sectors worldwide."
      />

      <section className="py-20 bg-white/40">
        <Container size="wide">
          <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {industries.map((i) => {
              const Icon = industryIcons[i] || defaultIndustryIcon
              return (
                <StaggerItem key={i}>
                  <div className="group flex items-center gap-3 border border-slate-200/80 bg-white rounded-xl p-3.5 hover:border-signal-400 hover:shadow-card-hover transition-all duration-200 h-full">
                    <span className="w-9 h-9 rounded-lg bg-signal-50 text-signal-600 flex items-center justify-center shrink-0 transition-colors group-hover:bg-signal-100">
                      <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-slate-800 leading-tight text-sm font-semibold">{i}</span>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </Container>
      </section>

      <Container size="default" className="pb-24 text-center">
        <Reveal>
          <p className="text-slate-500">Don&rsquo;t see your sector listed? We likely still cover it.</p>
          <div className="mt-6 flex justify-center">
            <Button to="/contact" variant="primary" className="rounded-full">
              Ask About Your Industry
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
