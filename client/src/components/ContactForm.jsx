import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, CircleCheck, Send } from 'lucide-react'
import { formFieldIcons } from '../lib/icons'
import Button from './ui/Button'

const initialState = {
  name: '',
  email: '',
  mobile: '',
  companyName: '',
  designation: '',
  message: '',
}

const EASE = [0.16, 1, 0.3, 1]

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const apiBase = import.meta.env.VITE_API_URL || ''
      const res = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }
      setStatus('sent')
      setForm(initialState)
      setTouched({})
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === 'sent' ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="nameplate crop-corners p-8"
          data-tag="SUBMITTED"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
            className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mt-2"
          >
            <CircleCheck className="w-6 h-6 text-emerald-500" aria-hidden="true" />
          </motion.div>
          <h3 className="font-display uppercase text-xl text-ink mt-4">Message received</h3>
          <p className="text-steel-500 mt-3 leading-relaxed">
            Thank you for reaching out to Masar NDT. Our team will review your enquiry and respond shortly.
          </p>
          <Button variant="outline-signal" size="md" className="mt-6" onClick={() => setStatus('idle')}>
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: EASE }}
          onSubmit={handleSubmit}
          noValidate={false}
          className="nameplate crop-corners p-6 md:p-8 space-y-5"
          data-tag="ENQUIRY FORM"
        >
          <div className="grid sm:grid-cols-2 gap-5 mt-2">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.name}
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.email}
              required
            />
            <Field label="Mobile" name="mobile" value={form.mobile} onChange={handleChange} onBlur={handleBlur} />
            <Field
              label="Company Name"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <Field
            label="Designation"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            <label htmlFor="message" className="font-mono text-[10px] tracking-widest2 text-steel-400">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`mt-2 w-full bg-transparent border rounded-lg px-3.5 py-2.5 text-ink placeholder:text-steel-300 outline-none transition-colors focus:border-signal-500 ${
                touched.message && !form.message.trim() ? 'border-signal-500/60' : 'border-steel-300'
              }`}
              placeholder="Tell us about your inspection, NDT, engineering or manpower requirement…"
            />
            {touched.message && !form.message.trim() && (
              <p className="mt-1.5 text-xs text-signal-600">Please share a brief message so we know how to help.</p>
            )}
          </div>

          <AnimatePresence>
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-2.5 bg-signal-50 border border-signal-100 rounded-lg px-4 py-3 overflow-hidden"
              >
                <AlertTriangle className="w-4 h-4 text-signal-600 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-signal-700">{errorMsg}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <Button type="submit" variant="primary" size="md" icon={Send} loading={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

function Field({ label, name, value, onChange, onBlur, type = 'text', required = false, touched = false }) {
  const Icon = formFieldIcons[name]
  const showError = required && touched && !value.trim()

  return (
    <div>
      <label htmlFor={name} className="font-mono text-[10px] tracking-widest2 text-steel-400">
        {label.toUpperCase()}
        {required && <span className="text-signal-500"> *</span>}
      </label>
      <div className="relative mt-2">
        {Icon && (
          <Icon className="w-4 h-4 text-steel-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          className={`w-full bg-transparent border rounded-lg pl-10 pr-3.5 py-2.5 text-ink outline-none transition-colors focus:border-signal-500 ${
            showError ? 'border-signal-500/60' : 'border-steel-300'
          }`}
        />
      </div>
      {showError && <p className="mt-1.5 text-xs text-signal-600">This field is required.</p>}
    </div>
  )
}
