import { useEffect, useRef, useState } from 'react'

type EmailModalProps = {
  email: string
  onClose: () => void
}

function EmailModal({ email, onClose }: EmailModalProps) {
  const [copyMessage, setCopyMessage] = useState('')
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopyMessage('Copied!')
    } catch {
      setCopyMessage('Copy unavailable. Email is shown above.')
    }
  }

  const handleOpenMailApp = () => {
    window.location.href = `mailto:${email}`
  }

  const handleBackdropClick = () => {
    onClose()
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <section
        className="email-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          aria-label="Close contact dialog"
          onClick={onClose}
          ref={closeButtonRef}
        >
          Close
        </button>

        <div className="email-modal-content">
          <p className="eyebrow">Email</p>
          <h2 id="email-modal-title">Contact me</h2>
          <p className="email-modal-copy">
            Feel free to contact me about software engineering opportunities,
            projects, or collaboration!
          </p>
          <p className="email-address">{email}</p>
        </div>

        <div className="email-modal-actions">
          <button
            className="button button-primary"
            type="button"
            onClick={handleCopyEmail}
          >
            Copy Email
          </button>
          <button
            className="button button-secondary"
            type="button"
            onClick={handleOpenMailApp}
          >
            Open Mail App
          </button>
        </div>

        {copyMessage ? (
          <p className="copy-message" role="status" aria-live="polite">
            {copyMessage}
          </p>
        ) : null}
      </section>
    </div>
  )
}

export default EmailModal
