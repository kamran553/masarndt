import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { assetIntegrity } from '../data/content'

export default function ServicesAssetIntegrity() {
  return (
    <div>
      <PageHero eyebrow={assetIntegrity.tag} title={assetIntegrity.title} description={assetIntegrity.lead} />

      <section className="py-16">
        <Container size="wide">
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {assetIntegrity.services.map((s, idx) => (
              <StaggerItem key={s}>
                <div className="group bg-paper border border-steel-200 rounded-xl p-5 h-full flex items-start gap-3 hover:border-signal-200 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                  <span className="font-mono text-[10px] text-signal-500 border border-signal-200 rounded-md px-1.5 py-0.5 mt-0.5 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-ink leading-snug text-sm">{s}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <Container size="default" className="pb-24 text-center">
        <Reveal>
          <p className="text-steel-500">Building or reviewing your Risk-Based Inspection program?</p>
          <div className="mt-5 flex justify-center">
            <Button to="/contact" variant="primary">
              Speak With Our Engineers
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
