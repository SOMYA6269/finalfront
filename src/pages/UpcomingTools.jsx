import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './UpcomingTools.css'
import { 
  FaShoppingCart, 
  FaMobileAlt, 
  FaRobot, 
  FaLock, 
  FaArrowRight
} from 'react-icons/fa'

const CURRENT_TOOL = {
  id: 'grocery-studio',
  icon: FaShoppingCart,
  name: 'Grocery Studio',
  tagline: 'Your Current Software Tool',
  description: 'Workflow studio for billing, purchasing, and store intelligence. Build your end-to-end grocery operation with drag-and-drop software tools.',
  features: ['Workflow builder', 'Live dashboards', 'Automation hooks', 'Billing automation', 'Store intelligence'],
  isAvailable: true,
  detailLink: '/upcoming-tools/grocery-studio',
  statusNote: 'Live & Available Now',
}

const UPCOMING_TOOLS = []

const STAGE_INFO = {
  live: { label: 'Live', accent: 'success' },
  beta: { label: 'Beta', accent: 'beta' },
  explore: { label: 'Explore', accent: 'explore' },
}

const STAGE_FILTERS = [
  { id: 'all', label: 'All Stages' },
  { id: 'live', label: 'Live Now' },
  { id: 'beta', label: 'Private Beta' },
  { id: 'explore', label: 'In Discovery' },
]

const STAGE_ORDER = ['live', 'beta', 'explore']


export default function UpcomingTools() {
  const [activeStage, setActiveStage] = useState('all')

  const stageCounts = STAGE_ORDER.reduce((counts, stage) => {
    counts[stage] = UPCOMING_TOOLS.filter((tool) => tool.stage === stage).length
    return counts
  }, {})

  const filteredTools =
    activeStage === 'all'
      ? UPCOMING_TOOLS
      : UPCOMING_TOOLS.filter((tool) => tool.stage === activeStage)

  const roadmapTimeline = UPCOMING_TOOLS.filter((tool) => tool.stage !== 'live').map((tool) => ({
    name: tool.name,
    window: tool.releaseWindow,
    stage: STAGE_INFO[tool.stage].label,
  }))

  const lanesToRender = activeStage === 'all' ? STAGE_ORDER : [activeStage]

  const renderLane = (stage) => {
    const tools = UPCOMING_TOOLS.filter((tool) => tool.stage === stage)
    const stageInfo = STAGE_INFO[stage]
    const count = stageCounts[stage] ?? 0

    const stageDescriptions = {
      live: 'Tools currently available and ready for production use',
      beta: 'Tools in active testing with select partners and early adopters',
      explore: 'Tools in research and discovery phase, shaping future capabilities'
    }

    return (
      <div key={stage} className="lane">
        <header>
          <div className="lane-header-left">
            <span className={`tool-stage tool-stage--${stageInfo.accent}`}>{stageInfo.label}</span>
            <strong>{count ? `${count} ${count === 1 ? 'Tool' : 'Tools'}` : 'No tools yet'}</strong>
          </div>
        </header>
        <p className="lane-description">{stageDescriptions[stage]}</p>
        <div className="lane-list">
          {tools.length ? (
            tools.map((tool) => <ToolCard key={tool.id} tool={tool} variant="lane" />)
          ) : (
            <div className="empty-state-card">
              <p className="empty-state-text">No tools in this stage currently</p>
              <p className="empty-state-subtext">Check back soon for updates on new tools in development</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="upcoming-tools-page">
      <Navbar />
      <main className="upcoming-main">
        {/* Hero Section */}
        <section className="tools-hero">
          <div className="container tools-hero-container">
            <div className="hero-intro">
              <span className="hero-badge">Available Now</span>
              <h1>Software Tools for Your Business</h1>
              <p>
                Explore our suite of powerful software tools designed to streamline your operations, 
                automate workflows, and drive business growth.
              </p>
            </div>
            
            {/* Current Tool Showcase */}
            <div className="current-tool-showcase">
              <div className="current-tool-card">
                <div className="current-tool-header">
                  <div className="current-tool-icon-wrapper">
                    <CURRENT_TOOL.icon className="current-tool-icon" />
                  </div>
                  <div className="current-tool-info">
                    <div className="current-tool-badge-inline">
                      <span className="live-indicator"></span>
                      <span>{CURRENT_TOOL.statusNote}</span>
                    </div>
                    <h2>{CURRENT_TOOL.name}</h2>
                    <p className="current-tool-description">{CURRENT_TOOL.description}</p>
                  </div>
                </div>
                <div className="current-tool-features">
                  {CURRENT_TOOL.features.map((feature) => (
                    <div key={feature} className="feature-item">
                      <span className="feature-dot"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="current-tool-actions">
                  <Link to={CURRENT_TOOL.detailLink} className="btn btn-primary">
                    Explore {CURRENT_TOOL.name}
                    <FaArrowRight className="btn-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  )
}

function ToolCard({ tool, variant = 'lane' }) {
  const stageInfo = STAGE_INFO[tool.stage]
  const IconComponent = tool.icon

  return (
    <article className={`tool-card tool-card--${variant}`}>
      <div className="tool-card-header">
        <div className="tool-icon-wrapper">
          <IconComponent className="tool-icon" />
        </div>
        <span className={`tool-stage tool-stage--${stageInfo.accent}`}>{stageInfo.label}</span>
      </div>
      <div className="tool-card-body">
        <h3>{tool.name}</h3>
        <p className="tool-description">{tool.description}</p>
        {tool.tags && tool.tags.length > 0 && (
          <div className="tool-tag-list">
            {tool.tags.map((tag) => (
              <span key={tag} className="tool-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div className="tool-card-footer">
        <div className="tool-card-meta">
          <div className="meta-item">
            <span className="meta-label">Expected Release</span>
            <span className="meta-value">{tool.releaseWindow}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            <span className="meta-value">{tool.statusNote}</span>
          </div>
        </div>
        {tool.isAvailable && tool.detailLink ? (
          <Link to={tool.detailLink} className="tool-link-btn">
            Explore Tool
            <FaArrowRight className="link-arrow" />
          </Link>
        ) : (
          <Link to="/support/contact" className="tool-link-btn secondary">
            Request Early Access
            <FaArrowRight className="link-arrow" />
          </Link>
        )}
      </div>
    </article>
  )
}
