import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCategoryGrid from '../components/ServiceCategoryGrid'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import ArrowLink from '../components/ui/ArrowLink'
import SectionEyebrow from '../components/ui/SectionEyebrow'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { company, stats, serviceCategories, industries } from '../data/content'
import { statIcons, defaultStatIcon, industryIcons, defaultIndustryIcon } from '../lib/icons'
import { RefineryHeroIllustration } from '../components/IndustrialIllustrations'

const EASE = [0.16, 1, 0.3, 1]
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-paper to-paper-dim border-b border-steel-200/60 text-ink overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines-dim bg-grid-sm opacity-30 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-signal-500/5 blur-3xl animate-drift pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brass-500/5 blur-3xl animate-drift-slow pointer-events-none"
          aria-hidden="true"
        />
        <div className="scan-sweep" aria-hidden="true" />

        <Container size="wide" className="relative">
          <motion.div
            className="pt-20 pb-20 md:pt-24 md:pb-24"
            initial="hidden"
            animate="show"
            variants={heroContainer}
          >
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Hero details left */}
              <div className="lg:col-span-7">
                <motion.div
                  variants={heroItem}
                  className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-white/70 shadow-sm pl-2 pr-4 py-1.5 backdrop-blur-sm mb-7"
                >
                  <span className="w-5 h-5 rounded-full bg-signal-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3 h-3 text-signal-600" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[11px] tracking-widest2 text-steel-600 font-medium">
                    ISO 9001:2015 CERTIFIED INSPECTION ORGANISATION
                  </span>
                </motion.div>

                <motion.h1
                  variants={heroItem}
                  className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink"
                >
                  Every flaw found. <span className="text-signal-500">Every asset accounted for.</span>
                </motion.h1>

                <motion.p variants={heroItem} className="mt-7 max-w-xl text-steel-600 text-lg leading-relaxed">
                  {company.intro}
                </motion.p>

                <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
                  <Button to="/contact" variant="primary" size="lg">
                    Request an Inspection
                  </Button>
                  <Button to="/services/conventional-ndt" variant="outline-dark" size="lg">
                    Explore Our Services
                  </Button>
                </motion.div>
              </div>

              {/* Refinery Field Image right */}
              <motion.div
                variants={heroItem}
                className="lg:col-span-5 hidden lg:block"
              >
                <div className="nameplate crop-corners bg-white p-2.5" data-tag="FIELD IMAGE">
                  <div className="absolute top-4 right-4 flex gap-1.5 z-10">
                    <span className="rivet" />
                    <span className="rivet" />
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-1.5 z-10">
                    <span className="rivet" />
                    <span className="rivet" />
                  </div>
                  <img
                    src="/images/refinery-hero.png"
                    alt="Inspector performing NDT ultrasonic testing on industrial pipe"
                    className="w-full h-72 object-cover rounded-sm border border-steel-200/60 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>

        {/* Stats strip styled like an equipment nameplate row */}
        <div className="border-t border-steel-200/80 bg-white/50 backdrop-blur-xs relative">
          <Container size="wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 md:divide-x divide-steel-200/80">
              {stats.map((s, idx) => {
                const Icon = statIcons[s.label] || defaultStatIcon
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                    className="py-6 px-4 sm:px-6 md:first:pl-0 flex items-start gap-3 justify-center md:justify-start"
                  >
                    <Icon className="w-5 h-5 text-signal-500 mt-1 shrink-0 hidden sm:block" strokeWidth={1.75} aria-hidden="true" />
                    <div>
                      <p className="font-display text-2xl md:text-3xl text-signal-500">
                        <AnimatedCounter value={s.value} />
                      </p>
                      <p className="text-xs text-steel-600 font-medium mt-1 leading-snug">{s.label}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 md:py-28">
        <Container size="wide">
          <SectionHeader
            tag="WHAT WE DO"
            title="Five disciplines, one accountable partner"
            description="From shutdown planning to advanced tube inspection and asset-integrity engineering, Masar NDT covers the full inspection lifecycle under a single scope of work."
          />
          <div className="mt-12">
            <ServiceCategoryGrid categories={serviceCategories} />
          </div>
        </Container>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-steel-50 border-y border-steel-200/60 text-ink">
        <Container size="wide">
          <div className="py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <SectionEyebrow className="mb-3">WHO WE ARE</SectionEyebrow>
              <h2 className="font-display uppercase text-3xl md:text-4xl tracking-wide text-ink">
                Precision is not a service.
                <br />
                It&rsquo;s how we operate.
              </h2>
              <p className="mt-6 text-steel-600 leading-relaxed">{company.about[0]}</p>
              <div className="mt-8">
                <ArrowLink to="/about" tone="signal">
                  Read our full story
                </ArrowLink>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="nameplate crop-corners bg-white p-8" data-tag="MISSION / VISION">
                <p className="font-mono text-[10px] tracking-widest2 text-signal-600 mt-2">MISSION</p>
                <p className="mt-2 text-steel-600 leading-relaxed">{company.mission}</p>
                <p className="font-mono text-[10px] tracking-widest2 text-signal-600 mt-6">VISION</p>
                <p className="mt-2 text-steel-600 leading-relaxed">{company.vision}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* INDUSTRIES PREVIEW */}
      <section className="py-20 md:py-28">
        <Container size="wide">
          <SectionHeader
            tag="WHERE WE WORK"
            title="Industries We Serve"
            description="Masar NDT supports asset owners and EPC contractors across more than 30 sectors — wherever integrity, safety and uptime matter."
          />
          <StaggerGroup className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {industries.slice(0, 12).map((i) => {
              const Icon = industryIcons[i] || defaultIndustryIcon
              return (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-2 border border-steel-200/80 rounded-lg p-2.5 text-steel-700 bg-white hover:border-signal-400 hover:text-ink hover:shadow-sm transition-all duration-200 h-full">
                    <span className="w-7 h-7 rounded-md bg-signal-50 text-signal-600 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-xs md:text-sm font-medium leading-tight">{i}</span>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
          <div className="mt-8">
            <ArrowLink to="/industries">View all industries</ArrowLink>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-white to-paper-dim border-t border-steel-200/80 text-ink overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines-dim bg-grid-sm opacity-20 pointer-events-none" aria-hidden="true" />
        <Container size="wide" className="relative">
          <Reveal className="py-20 md:py-24 text-center">
            <h2 className="font-display uppercase text-3xl md:text-4xl text-ink">Ready to plan your next turnaround?</h2>
            <p className="mt-4 text-steel-600 max-w-xl mx-auto">
              Talk to our inspection planning team about shutdown scope, manpower and equipment for your next project.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Contact Masar NDT
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
