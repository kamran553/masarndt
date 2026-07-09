import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import MethodCard from '../components/MethodCard'
import { Reveal } from '../components/ui/Reveal'
import { conventionalNdt } from '../data/content'

export default function ServicesConventional() {
  return (
    <div>
      <PageHero eyebrow={conventionalNdt.tag} title={conventionalNdt.title} description={conventionalNdt.lead} />

      <Container size="default" className="py-16 space-y-8">
        {conventionalNdt.methods.map((m) => (
          <MethodCard key={m.code} method={m} />
        ))}
      </Container>

      <Container size="default" className="pb-24 text-center">
        <Reveal>
          <p className="text-steel-500">Looking for a method not listed, or a combined test package?</p>
          <div className="mt-5 flex justify-center">
            <Button to="/contact" variant="primary">
              Discuss Your Requirement
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
