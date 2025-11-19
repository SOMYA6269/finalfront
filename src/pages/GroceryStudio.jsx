import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
// All media files use absolute paths from /public/images/ for SEO
import './GroceryStudio.css'
import { 
  FaLink, 
  FaPalette, 
  FaChartBar, 
  FaBox, 
  FaRobot, 
  FaBrain,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa'

const WORKFLOW_STEPS = [
  {
    title: 'Connect sources',
    description: 'Import SKUs, price lists, vendors, and outlets from spreadsheets or your legacy systems in minutes.',
    icon: FaLink,
  },
  {
    title: 'Model your flows',
    description: 'Drag and drop replenishment, procurement, and billing lanes. Set guardrails once—let automation do the rest.',
    icon: FaPalette,
  },
  {
    title: 'Measure & optimise',
    description: 'Monitor real-time dashboards, trigger alerts, and improve margins with AI-backed nudges.',
    icon: FaChartBar,
  },
]

const HIGHLIGHTS = [
  {
    title: 'Store-ready templates',
    description: 'Launch with playbooks for grocery, supermarket, and omni-channel retail—customise without code.',
    icon: FaBox,
  },
  {
    title: 'Governed automation',
    description: 'Automate replenishment, expiry, and vendor SLAs with approvals, audit logs, and alerts built-in.',
    icon: FaRobot,
  },
  {
    title: 'Unified intelligence',
    description: 'Unlock cohort-level profitability, shrinkage insights, and workforce productivity from a single board.',
    icon: FaBrain,
  },
]

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹1,299',
    period: '/ month',
    details: 'Single store, core automation blocks, daily performance digest.',
    features: ['Single store', 'Core automation', 'Daily reports'],
    color: '#3b82f6',
  },
  {
    name: 'Growth',
    price: '₹2,499',
    period: '/ month',
    details: 'Multi-store coordination, demand forecasting, vendor scorecards.',
    features: ['Multi-store', 'Demand forecasting', 'Vendor scorecards'],
    color: '#8b5cf6',
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    details: 'Advanced controls with SSO, regional rollouts, and data residency.',
    features: ['SSO & Security', 'Regional rollouts', 'Data residency'],
    color: '#06b6d4',
  },
]

const INITIAL_FEEDBACK = [
  {
    source: 'FreshCart Retail',
    quote: 'We replaced three apps in 10 days—dashboards now update faster than our team chats.',
    rating: 5,
  },
  {
    source: 'DailyMart',
    quote: 'Pricing clarity plus ready-made flows made multi-outlet expansion painless.',
    rating: 4,
  },
]

export default function GroceryStudio() {
  const [feedbackEntries, setFeedbackEntries] = useState(INITIAL_FEEDBACK)
  const [form, setForm] = useState({ name: '', rating: '5', comment: '' })
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load ratings from backend on component mount - only 3 latest
  useEffect(() => {
    const loadRatings = async () => {
      try {
        const { getRatings } = await import('../utils/api')
        const ratings = await getRatings('grocery-studio', 3)
        
        if (ratings && ratings.length > 0) {
          const formattedRatings = ratings.map(r => ({
            source: r.name || 'Anonymous user',
            quote: r.comment,
            rating: r.rating
          }))
          // Show only 3 ratings total, new ones first
          setFeedbackEntries(formattedRatings.slice(0, 3))
        } else {
          // If no ratings from API, show only first 3 from initial
          setFeedbackEntries(INITIAL_FEEDBACK.slice(0, 3))
        }
      } catch (error) {
        console.error('Failed to load ratings:', error)
        // Keep only first 3 initial feedback if API fails
        setFeedbackEntries(INITIAL_FEEDBACK.slice(0, 3))
      }
    }
    
    loadRatings()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const trimmed = form.comment.trim()
    
    if (!trimmed) {
      setMessage('Please add a quick note about your experience before submitting.')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const { submitRating } = await import('../utils/api')
      const result = await submitRating({
        name: form.name.trim() || undefined,
        rating: parseInt(form.rating),
        comment: trimmed,
        page: 'grocery-studio'
      })

      // Add to local state immediately for instant feedback
      const entry = {
        source: form.name.trim() || 'Anonymous user',
        quote: trimmed,
        rating: parseInt(form.rating),
      }
      // Add new rating at top and keep only 3 total
      const updatedEntries = [entry, ...feedbackEntries].slice(0, 3)
      setFeedbackEntries(updatedEntries)
      setForm({ name: '', rating: '5', comment: '' })
      setMessage(result.message || 'Thank you! Your feedback has been captured.')
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage(error.message || 'Failed to submit feedback. Please try again.')
      setTimeout(() => setMessage(''), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grocery-page-new">
      <Navbar />
      <main className="grocery-main-new">
        {/* Hero Section */}
        <section className="grocery-hero-new">
          <div className="container-new">
            <div className="hero-content-new">
              <div className="hero-text-new">
                <Link to="/upcoming-tools" className="back-link-new">
                  ← Back to Tools
                </Link>
                <span className="hero-badge-new">Available Now</span>
                <h1 className="hero-title-new">Grocery Studio</h1>
                <p className="hero-description-new">
                  Build your end-to-end grocery operation with drag-and-drop software tools. Automate billing, purchasing,
                  replenishment, and analytics without stitching together multiple systems.
                </p>
                <div className="hero-actions-new">
                  <a href="https://app.draganddrop.in" target="_blank" rel="noopener noreferrer" className="btn-primary-new">
                    Start Free Trial
                    <FaArrowRight className="btn-icon" />
                  </a>
                </div>
              </div>
              <div className="hero-visual-new">
                <div className="desktop-frame-new">
                  <div className="desktop-screen-new">
                    <div className="desktop-screen-content-new">
                      <div className="desktop-top-bar-new">
                        <div className="desktop-dots-new">
                          <span className="dot-new dot-red-new"></span>
                          <span className="dot-new dot-yellow-new"></span>
                          <span className="dot-new dot-green-new"></span>
                        </div>
                        <div className="desktop-url-bar-new">
                          <span className="url-text-new">draganddrop.in</span>
                        </div>
                      </div>
                      <div className="desktop-video-container-new">
                        <video
                          src="/images/drag.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="hero-video-new"
                          aria-label="Grocery Studio Demo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="desktop-base-new"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Preview Section */}
        <section className="preview-section-new">
          <div className="container-new">
            <div className="preview-content-new">
              <div className="preview-text-new">
                <span className="section-badge-new">Product Preview</span>
                <h2 className="section-title-new">Invoice and billing flows in one clean workspace</h2>
                <p className="section-description-new">
                  Breeze through billing with drag-and-drop invoice blocks, automated tax calculation, and quick-export
                  ledger views. Grocery Studio keeps every transaction synced with your stock and supplier records.
                </p>
              </div>
              <div className="preview-visual-new">
                <div className="mobile-frame-new">
                  <div className="mobile-screen-new">
                    <img
                      src="/images/invoice.png"
                      alt="Invoice workspace inside Grocery Studio"
                      className="preview-image-new"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="workflow-section-new">
          <div className="container-new">
            <div className="section-header-new">
              <span className="section-badge-new">How It Works</span>
              <h2 className="section-title-new">Three Simple Steps to Get Started</h2>
              <p className="section-description-new">Streamline your grocery operations with our intuitive platform</p>
            </div>
            <div className="workflow-grid-new">
              {WORKFLOW_STEPS.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={step.title} className="workflow-card-new" style={{ '--delay': `${index * 0.1}s` }}>
                    <div className="workflow-icon-wrapper-new">
                      <IconComponent className="workflow-icon-new" />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="highlights-section-new">
          <div className="container-new">
            <div className="section-header-new">
              <span className="section-badge-new">Why Choose Us</span>
              <h2 className="section-title-new">Why Teams Love Grocery Studio</h2>
              <p className="section-description-new">Powerful features designed for modern grocery operations</p>
            </div>
            <div className="highlights-grid-new">
              {HIGHLIGHTS.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={item.title} className="highlight-card-new" style={{ '--delay': `${index * 0.1}s` }}>
                    <div className="highlight-icon-wrapper-new">
                      <IconComponent className="highlight-icon-new" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section-new">
          <div className="container-new">
            <div className="section-header-new">
              <span className="section-badge-new">Pricing</span>
              <h2 className="section-title-new">Choose Your Plan</h2>
              <p className="section-description-new">Flexible pricing options for businesses of all sizes</p>
            </div>
            <div className="pricing-grid-new">
              {PRICING_PLANS.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`pricing-card-new ${plan.popular ? 'popular' : ''}`}
                  style={{ '--accent': plan.color, '--delay': `${index * 0.1}s` }}
                >
                  {plan.popular && <div className="popular-badge-new">Most Popular</div>}
                  <div className="pricing-header-new">
                    <h3>{plan.name}</h3>
                    <div className="pricing-price-new">
                      <span className="price-value-new">{plan.price}</span>
                      {plan.period && <span className="price-period-new">{plan.period}</span>}
                    </div>
                  </div>
                  <p className="pricing-description-new">{plan.details}</p>
                  <ul className="pricing-features-new">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check-icon-new" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/pricing" className="pricing-btn-new">
                    Get Started
                    <FaArrowRight className="btn-icon" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="feedback-section-new">
          <div className="container-new">
            <div className="feedback-grid-new">
              <div className="feedback-list-card-new">
                <h2 className="section-title-new">What Teams Are Saying</h2>
                <div className="feedback-list-new">
                  {feedbackEntries.map((entry, index) => (
                    <div key={`${entry.source}-${index}`} className="feedback-item-new">
                      <div className="feedback-rating-new">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < entry.rating ? 'star-filled-new' : 'star-empty-new'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="feedback-quote-new">"{entry.quote}"</p>
                      <span className="feedback-source-new">— {entry.source}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="feedback-form-card-new">
                <h2 className="section-title-new">Share Your Experience</h2>
                <form className="feedback-form-new" onSubmit={handleSubmit}>
                  <div className="form-row-new">
                    <div className="form-field-new">
                      <label>Your name (optional)</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(event) => setForm({ ...form, name: event.target.value })}
                        placeholder="Pat from MarketFresh"
                      />
                    </div>
                    <div className="form-field-new">
                      <label>Rating</label>
                      <div className="star-rating-selector">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className={`star-button ${parseInt(form.rating) >= star ? 'active' : ''}`}
                            onClick={() => setForm({ ...form, rating: star.toString() })}
                            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                          >
                            ★
                          </button>
                        ))}
                        <span className="rating-value">{form.rating} / 5</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-field-new">
                    <label>Your feedback</label>
                    <textarea
                      rows={4}
                      value={form.comment}
                      onChange={(event) => setForm({ ...form, comment: event.target.value })}
                      placeholder="Tell us how Grocery Studio fits your workflow…"
                      required
                    />
                  </div>
                  {message && (
                    <p className={`form-message-new ${message.includes('Thank you') || message.includes('captured') ? 'success' : 'error'}`}>
                      {message}
                    </p>
                  )}
                  <button 
                    type="submit" 
                    className="btn-submit-new"
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
