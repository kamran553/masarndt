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

      <section className="py-16">
        <Container size="wide">
          <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((i) => {
              const Icon = industryIcons[i] || defaultIndustryIcon
              return (
                <StaggerItem key={i}>
                  <div className="group bg-paper border border-steel-200 rounded-xl p-5 h-full hover:border-signal-200 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                    <IconTile icon={Icon} tone="signal" size="sm" />
                    <p className="mt-3 text-ink leading-snug text-sm font-medium">{i}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </Container>
      </section>

      <Container size="default" className="pb-24 text-center">
        <Reveal>
          <p className="text-steel-500">Don&rsquo;t see your sector listed? We likely still cover it.</p>
          <div className="mt-5 flex justify-center">
            <Button to="/contact" variant="primary">
              Ask About Your Industry
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
