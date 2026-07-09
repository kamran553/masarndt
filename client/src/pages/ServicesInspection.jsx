import { ClipboardCheck } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import IconTile from '../components/ui/IconTile'
import { Reveal } from '../components/ui/Reveal'
import { inspection } from '../data/content'

export default function ServicesInspection() {
  return (
    <div>
      <PageHero eyebrow={inspection.tag} title={inspection.title} description={inspection.lead} />

      <Container size="default" className="py-16 space-y-6">
        {inspection.body.map((p, idx) => (
          <Reveal key={p} delay={idx * 0.06}>
            <p className="text-steel-600 leading-relaxed text-lg">{p}</p>
          </Reveal>
        ))}
      </Container>

      <section className="bg-steel-50 border-y border-steel-200/60 text-ink">
        <Container size="default" className="py-16">
          <Reveal>
            <div className="nameplate crop-corners bg-white p-8" data-tag="SHUTDOWN & TURNAROUND">
              <div className="flex items-start gap-4 mt-2">
                <IconTile icon={ClipboardCheck} tone="signal" />
                <h2 className="font-display uppercase text-2xl text-ink">{inspection.highlight.title}</h2>
              </div>
              <div className="mt-5 space-y-4">
                {inspection.highlight.body.map((p) => (
                  <p key={p} className="text-steel-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container size="default" className="py-16 text-center">
        <Reveal>
          <p className="text-steel-500">Need to scope your next shutdown or turnaround?</p>
          <div className="mt-5 flex justify-center">
            <Button to="/contact" variant="primary">
              Talk to Our Planning Team
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
