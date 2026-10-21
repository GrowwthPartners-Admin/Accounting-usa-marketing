export type ContactApiPayload = {
  name: string
  companyName: string
  email: string
  phoneNumber: string
  serviceLookingFor: string
  message: string
}

export const CONTACT_CAMPAIGN_MESSAGE = 'Accounting-Markeing-page'

const API_BASE = (
  import.meta.env.VITE_CONTACTAPI_PRODURL ||
  'https://api-growwth-prod.growwthpartners.in'
).replace(/\/+$/, '')

const CONTACT_API_URL = `${API_BASE}/api/contact-growwth`

export async function sendContactRequest(payload: ContactApiPayload): Promise<void> {
  const response = await fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: payload }),
  })

  if (!response.ok) {
    throw new Error(`Contact API request failed with status ${response.status}`)
  }
}
