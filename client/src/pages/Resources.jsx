import { CircleCheck, Send } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import IconTile from '../components/ui/IconTile'
import EmptyState from '../components/ui/EmptyState'
import { Reveal } from '../components/ui/Reveal'
import { resourceCategories } from '../data/content'
import { resourceIcons, defaultResourceIcon } from '../lib/icons'

export default function Resources() {
  return (
    <div>
      <PageHero
        eyebrow="SEC. 07 — RESOURCES"
        title="Workbook &amp; Resources"
        description="Reference material for clients and industry professionals planning inspection scope, procedures and turnaround workbooks."
      />

      <Container size="default" className="py-16 space-y-6">
        {resourceCategories.map((cat, idx) => {
          const Icon = resourceIcons[cat.title] || defaultResourceIcon
          return (
            <Reveal key={cat.title} delay={idx * 0.08}>
              <div className="nameplate crop-corners p-6 md:p-8" data-tag="RESOURCE">
                <div className="flex items-start gap-4 mt-2">
                  <IconTile icon={Icon} tone="signal" />
                  <div className="flex-1">
                    <h2 className="font-display uppercase text-xl text-ink">{cat.title}</h2>
                    <p className="mt-3 text-steel-500 leading-relaxed">{cat.description}</p>

                    {cat.items.length > 0 ? (
                      <ul className="mt-5 space-y-2">
                        {cat.items.map((it) => (
                          <li key={it} className="text-sm text-ink/80 flex gap-2.5">
                            <CircleCheck className="w-4 h-4 text-signal-500 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <EmptyState
                        icon={Send}
                        title="Available on request"
                        description="Reach out via the contact form and our team will share the relevant documentation for your project."
                        className="mt-5"
                      />
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </Container>

      <Container size="default" className="pb-24 text-center">
        <Reveal>
          <p className="text-steel-500">Need a specific datasheet or turnaround workbook for your project?</p>
          <div className="mt-5 flex justify-center">
            <Button to="/contact" variant="primary">
              Request Documentation
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
