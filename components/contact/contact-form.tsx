'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h4 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-foreground">
          Message Sent
        </h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-6 border-border/60 text-foreground hover:bg-secondary"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Name <span className="text-primary">*</span>
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="border-border/60 bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Email <span className="text-primary">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="border-border/60 bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Company
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Your company"
            className="border-border/60 bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Subject <span className="text-primary">*</span>
          </label>
          <Input
            id="subject"
            name="subject"
            required
            placeholder="How can we help?"
            className="border-border/60 bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Message <span className="text-primary">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or inquiry..."
          className="border-border/60 bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
