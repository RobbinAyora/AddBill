'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/254795389867'
const COMPANY_NAME = 'Addbill Construction Solutions'

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Chat inquiry submitted:', { name, message })
    setName('')
    setMessage('')
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 24 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:w-80"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border bg-navy px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky text-xs font-bold text-navy">
                  AB
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">{COMPANY_NAME}</p>
                  <p className="text-[11px] text-sky">Typically replies in a few minutes</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4">
              <div className="rounded-lg bg-secondary px-3 py-2 text-sm text-muted-foreground">
                Hi there! 👋 Send us a message and our team will get back to you shortly.
              </div>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                aria-label="Your name"
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                aria-label="Your message"
                rows={3}
                className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send message
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-12 sm:w-12"
        >
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366]"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 1.6 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
          <FaWhatsapp className="relative h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />

          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
            Chat on WhatsApp
          </span>
        </a>

        <button
          type="button"
          onClick={() => setChatOpen((v) => !v)}
          aria-label={chatOpen ? 'Close chat' : 'Open chat'}
          aria-expanded={chatOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-12 sm:w-12"
        >
          {chatOpen ? (
            <X className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
          ) : (
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  )
}
