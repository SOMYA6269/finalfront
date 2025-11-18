// API Base URL
const getApiBaseUrl = () => {
  let baseUrl = ''
  
  if (import.meta.env.VITE_API_URL) {
    baseUrl = import.meta.env.VITE_API_URL
  } else if (typeof window !== 'undefined') {
    const hostname = window.location.hostname

    if (hostname === 'draganddrop.in' || hostname === 'www.draganddrop.in') {
      baseUrl = 'https://draganddrop.in'
    } else {
      baseUrl = 'http://localhost:5000'
    }
  } else {
    baseUrl = 'http://localhost:5000'
  }

  // Remove trailing slash and /api if present to avoid double /api/api/
  baseUrl = baseUrl.replace(/\/api\/?$/, '').replace(/\/$/, '')
  
  return baseUrl
}

const API_BASE_URL = getApiBaseUrl()

// -------------------------------
// CONTACT FORM SUBMISSION
// -------------------------------
export async function submitContactForm(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Network error' }))
      throw new Error(errorData.error || `HTTP ${response.status}: Failed to submit contact form`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Contact form submission error:', error)
    throw error
  }
}

// -------------------------------
// RATING SUBMISSION
// -------------------------------
export async function submitRating(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/ratings/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Network error' }))
      throw new Error(errorData.error || `HTTP ${response.status}: Failed to submit rating`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Rating submission error:', error)
    throw error
  }
}

// -------------------------------
// GET ALL RATINGS
// -------------------------------
export async function getRatings(page = null, limit = 50) {
  try {
    const params = new URLSearchParams({ limit: limit.toString() })
    if (page) params.append('page', page)

    const response = await fetch(`${API_BASE_URL}/api/ratings/all?${params}`)
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Network error' }))
      console.error('Get ratings error:', errorData.error || `HTTP ${response.status}`)
      return []
    }

    const result = await response.json()
    return result.ratings || []
  } catch (error) {
    console.error('Get ratings error:', error)
    return []
  }
}
