const pendingConversionKey = 'accounting-usa-pending-lead-conversion'
const conversionDestination = 'AW-18185462224/psZmCIXJxKUdENDDwN9D'

let pendingConversion = false

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, parameters?: Record<string, string>) => void
  }
}

export function markLeadSubmitted() {
  pendingConversion = true

  try {
    window.sessionStorage.setItem(pendingConversionKey, '1')
  } catch {
    // The in-memory flag still works if browser storage is unavailable.
  }
}

export function trackSubmittedLeadOnThankYouPage() {
  let shouldTrack = pendingConversion
  pendingConversion = false

  try {
    shouldTrack = window.sessionStorage.getItem(pendingConversionKey) === '1' || shouldTrack
    window.sessionStorage.removeItem(pendingConversionKey)
  } catch {
    // The in-memory flag covers the normal in-app navigation path.
  }

  if (shouldTrack) {
    window.gtag?.('event', 'conversion', { send_to: conversionDestination })
  }
}
