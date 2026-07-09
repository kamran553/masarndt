import { CircleCheck, CircleMinus, Info } from 'lucide-react'
import { conventionalMethodIcons, advancedMethodIcons } from '../lib/icons'
import { Reveal } from './ui/Reveal'
import IconTile from './ui/IconTile'
import Badge from './ui/Badge'

const methodIcons = { ...conventionalMethodIcons, ...advancedMethodIcons }

export default function MethodCard({ method }) {
  const Icon = methodIcons[method.code]

  return (
    <Reveal
      className="nameplate crop-corners p-6 md:p-8 hover:shadow-elevated transition-shadow duration-300"
      data-tag={method.code}
    >
      <div className="flex items-start gap-4 mt-2">
        {Icon && <IconTile icon={Icon} tone="signal" />}
        <div>
          <h3 className="font-display uppercase text-xl md:text-2xl text-ink tracking-wide">
            {method.name}
          </h3>
          <p className="mt-2 text-steel-500 leading-relaxed">{method.description}</p>
        </div>
      </div>

      {method.note && (
        <p className="mt-4 text-sm text-steel-500 leading-relaxed border-l-2 border-blueprint pl-3 flex gap-2">
          <Info className="w-4 h-4 text-steel-400 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{method.note}</span>
        </p>
      )}

      {(method.advantages || method.limitations) && (
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {method.advantages && (
            <div>
              <p className="font-mono text-[10px] tracking-widest2 text-emerald-600 mb-2.5">ADVANTAGES</p>
              <ul className="space-y-2">
                {method.advantages.map((a) => (
                  <li key={a} className="text-sm text-ink/80 flex gap-2">
                    <CircleCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {method.limitations && (
            <div>
              <p className="font-mono text-[10px] tracking-widest2 text-steel-400 mb-2.5">LIMITATIONS</p>
              <ul className="space-y-2">
                {method.limitations.map((l) => (
                  <li key={l} className="text-sm text-ink/60 flex gap-2">
                    <CircleMinus className="w-4 h-4 text-steel-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {method.uses && (
        <div className="mt-6">
          <p className="font-mono text-[10px] tracking-widest2 text-steel-400 mb-2.5">APPLICATIONS</p>
          <div className="flex flex-wrap gap-2">
            {method.uses.map((u) => (
              <Badge key={u} tone="outline">
                {u}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Reveal>
  )
}
