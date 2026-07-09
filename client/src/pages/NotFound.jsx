import { Compass } from 'lucide-react'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'

export default function NotFound() {
  return (
    <Container size="narrow" className="py-32 text-center">
      <Reveal>
        <div className="w-14 h-14 rounded-2xl bg-signal-50 flex items-center justify-center mx-auto">
          <Compass className="w-6 h-6 text-signal-500" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <p className="font-mono text-[11px] tracking-widest2 text-signal-500 mt-6">ERROR 404</p>
        <h1 className="font-display uppercase text-4xl mt-4 text-ink">Page not found</h1>
        <p className="mt-4 text-steel-500">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <div className="mt-8 flex justify-center">
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </Reveal>
    </Container>
  )
}
