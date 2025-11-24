import { useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './SupportPages.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaClock, FaHeadset } from 'react-icons/fa'

const documentationItems = [
  {
    label: 'DP',
    title: 'Daily & Monthly Profit Tracking',
    description:
      'Get real-time insights into your performance with daily sales, expenses, and net profit summaries. Monthly rollups help you uncover trends and act fast.',
    points: ['Real-time profit calculations', 'Daily sales summaries', 'Monthly profit reports', 'Expense tracking and categorization'],
  },
  {
    label: 'PM',
    title: 'Purchase Management',
    description:
      'Streamline procurement with automated purchase orders, delivery tracking, and supplier insights so the right stock lands on your shelves every time.',
    points: ['Create purchase orders daily', 'Track supplier deliveries', 'Maintain purchase history', 'Automated inventory updates'],
  },
  {
    label: 'AL',
    title: 'Smart Alerts & Notifications',
    description:
      'Stay ahead of issues with low-stock, expiry, and business health alerts delivered to the channels your team relies on.',
    points: ['Low stock thresholds you control', 'Expiry date safeguards', 'Custom alert configurations', 'Push and email notifications'],
  },
  {
    label: 'WA',
    title: 'Billing via WhatsApp',
    description:
      'Generate professional bills instantly and share them over WhatsApp for faster customer response and tracked payments.',
    points: ['Instant bill generation', 'Share securely via WhatsApp', 'Professional templates', 'Quick payment tracking'],
  },
  {
    label: 'BS',
    title: 'Barcode Scanner',
    description:
      'Accelerate checkout and inventory updates by scanning product barcodes straight from any device camera.',
    points: ['Camera-based scanning', 'Quick product lookup', 'Instant stock updates', 'Faster billing'],
  },
  {
    label: 'CD',
    title: 'Customer & Debtor Management',
    description:
      'Manage customer profiles, purchase history, and outstanding balances with automated reminders and credit controls.',
    points: ['Rich customer profiles', 'Credit limit management', 'Automated reminders', 'Historical purchase insights'],
  },
  {
    label: 'AI',
    title: 'AI Assistant',
    description:
      'Let AI coach your pricing, inventory, and demand plans with contextual guidance and voice-ready quick actions.',
    points: ['Smart pricing nudges', 'Inventory optimization', 'Demand forecasting', 'Voice-ready commands'],
  },
  {
    label: 'POS',
    title: 'Advanced Billing System',
    description:
      'Deliver GST-compliant bills, support multiple payment methods, and keep billing synced with inventory and customer records.',
    points: ['Quick bill generation', 'GST compliant invoices', 'Multiple payment modes', 'Receipt printing & notes'],
  },
]

export default function SupportPages() {
  const { page } = useParams()
  
  const content = {
    'help-center': {
      title: 'Help Center',
      content: <HelpCenterContent />,
    },
    contact: {
      title: 'Contact Us',
      content: <ContactContent />,
    },
    documentation: {
      title: 'Documentation',
      content: <DocumentationContent />,
    },
  }
  
  const currentContent = content[page] || content['help-center']
  
  return (
    <div className="support-page">
      <Navbar />
      {page !== 'contact' && (
        <div className="page-hero">
          <div className="container">
            <h1>{currentContent.title}</h1>
            <p>We're here to help you succeed</p>
          </div>
        </div>
      )}
      <section className="support-content">
        <div className="container">{currentContent.content}</div>
      </section>
      <Footer />
    </div>
  )
}

function HelpCenterContent() {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <h3>How do I get started?</h3>
          <p>Sign up for a free 7-day trial. No credit card required. You'll have full access to all features during the trial period.</p>
        </div>
        <div className="faq-item">
          <h3>Can I import my existing data?</h3>
          <p>Yes! We provide tools to import your existing inventory, customer, and sales data. Our support team will help you with the migration process.</p>
        </div>
        <div className="faq-item">
          <h3>Is there a mobile app?</h3>
          <p>Our ERP is fully responsive and works on all devices including smartphones and tablets. You can access all features from any device with an internet connection.</p>
        </div>
        <div className="faq-item">
          <h3>What payment methods do you accept?</h3>
          <p>We accept all major credit cards, debit cards, UPI, and net banking. Payments are processed securely.</p>
        </div>
      </div>
    </div>
  )
}

function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { submitContactForm } = await import('../utils/api')
      const result = await submitContactForm(formData)

      // Show success toast
      toast.success('Thank you! Your message has been received. We\'ll contact you soon.', {
        duration: 6000,
        icon: '📬',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: '',
      })

    } catch (error) {
      // Show error toast
      toast.error(error.message || 'Failed to send message. Please try again.', {
        duration: 7000,
        icon: '❌',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="contact-page-new">
      {/* Hero Section */}
      <section className="contact-hero-new">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-description">
              Have a question or need assistance? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container contact-form-wrapper">
          <div className="contact-form-side">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll respond within 24 hours.</p>
            </div>
            <form className="contact-form-new" onSubmit={handleSubmit}>
              <div className="form-row-new">
                <div className="form-field-new">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-field-new">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-row-new">
                <div className="form-field-new">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-field-new">
                  <label htmlFor="reason">Subject</label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-field-new">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="6"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-submit-new"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FaArrowRight className="btn-icon" />}
              </button>
            </form>
          </div>

          <div className="contact-info-side">
            <div className="contact-info-card">
              <div className="info-icon-wrapper">
                <FaEnvelope className="info-icon" />
              </div>
              <h3>Email Us</h3>
              <p className="info-value">dragdroperp@gmail.com</p>
              <p className="info-meta">We'll respond within 24 hours</p>
            </div>
            
            <div className="contact-info-card">
              <div className="info-icon-wrapper">
                <FaClock className="info-icon" />
              </div>
              <h3>Business Hours</h3>
              <p className="info-value">Monday - Friday</p>
              <p className="info-meta">9:00 AM - 6:00 PM IST</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon-wrapper">
                <FaHeadset className="info-icon" />
              </div>
              <h3>Support</h3>
              <p className="info-value">24/7 Available</p>
              <p className="info-meta">For premium customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function DocumentationContent() {
  return (
    <div className="documentation-content">
      <h2>How Our ERP Works</h2>
      <p className="doc-intro">
        Our comprehensive grocery management system helps you streamline operations, track profits, manage inventory, and
        grow your business efficiently. Here's how each feature works:
      </p>
      <div className="doc-grid">
        {documentationItems.map((item) => (
          <article className="doc-card" key={item.title}>
            <div className="doc-card-icon" aria-hidden="true">
              <span>{item.label}</span>
        </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
          </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
