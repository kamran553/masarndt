import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { assetIntegrity } from '../data/content'

export default function ServicesAssetIntegrity() {
  return (
    <div>
      <PageHero eyebrow={assetIntegrity.tag} title={assetIntegrity.title} description={assetIntegrity.lead} />

      <section className="py-20 bg-white/40">
        <Container size="wide">
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetIntegrity.services.map((s, idx) => (
              <StaggerItem key={s}>
                <div className="group premium-card p-6 flex items-start gap-4 hover:shadow-card-hover">
                  <span className="font-mono text-[9px] text-signal-500 bg-signal-50 border border-signal-100 rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-slate-700 leading-relaxed text-sm mt-0.5 font-normal">{s}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <Container size="default" className="pb-24 text-center">
        <Reveal>
          <p className="text-slate-500">Building or reviewing your Risk-Based Inspection program?</p>
          <div className="mt-6 flex justify-center">
            <Button to="/contact" variant="primary" className="rounded-full">
              Speak With Our Engineers
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
