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
      className="premium-card p-8 hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="flex items-start gap-5">
        {Icon && <IconTile icon={Icon} tone="signal" />}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display uppercase text-xl md:text-2xl text-slate-900 tracking-wide">
              {method.name}
            </h3>
            <span className="font-mono text-[9px] bg-slate-100 text-slate-600 border border-slate-200/60 rounded-full px-2.5 py-0.5 tracking-widest font-bold uppercase">
              {method.code}
            </span>
          </div>
          <p className="mt-3 text-slate-500 leading-relaxed font-normal">{method.description}</p>
        </div>
      </div>

      {method.note && (
        <p className="mt-5 text-sm text-slate-500 leading-relaxed border-l-2 border-slate-200 pl-4 flex gap-2 font-normal">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{method.note}</span>
        </p>
      )}

      {(method.advantages || method.limitations) && (
        <div className="grid sm:grid-cols-2 gap-8 mt-8 pt-6 border-t border-slate-100">
          {method.advantages && (
            <div>
              <p className="font-mono text-[9px] tracking-widest2 text-emerald-600 mb-3.5 uppercase font-semibold">ADVANTAGES</p>
              <ul className="space-y-2.5">
                {method.advantages.map((a) => (
                  <li key={a} className="text-sm text-slate-600 flex gap-2.5 font-normal">
                    <CircleCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {method.limitations && (
            <div>
              <p className="font-mono text-[9px] tracking-widest2 text-slate-400 mb-3.5 uppercase font-semibold">LIMITATIONS</p>
              <ul className="space-y-2.5">
                {method.limitations.map((l) => (
                  <li key={l} className="text-sm text-slate-500 flex gap-2.5 font-normal">
                    <CircleMinus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {method.uses && (
        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="font-mono text-[9px] tracking-widest2 text-slate-400 mb-3 uppercase font-semibold">APPLICATIONS</p>
          <div className="flex flex-wrap gap-2">
            {method.uses.map((u) => (
              <Badge key={u} tone="outline" className="rounded-full">
                {u}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Reveal>
  )
}
