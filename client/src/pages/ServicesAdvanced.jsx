import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import MethodCard from '../components/MethodCard'
import { Reveal } from '../components/ui/Reveal'
import { advancedNdt } from '../data/content'

export default function ServicesAdvanced() {
  return (
    <div>
      <PageHero eyebrow={advancedNdt.tag} title={advancedNdt.title} description={advancedNdt.lead} />

      <Container size="default" className="py-16 space-y-8">
        {advancedNdt.methods.map((m) => (
          <MethodCard key={m.code} method={m} />
        ))}
      </Container>

      <Container size="default" className="pb-24 text-center">
        <Reveal>
          <p className="text-steel-500">Need advanced tube inspection for an upcoming exchanger overhaul?</p>
          <div className="mt-5 flex justify-center">
            <Button to="/contact" variant="primary">
              Request a Technical Consultation
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
