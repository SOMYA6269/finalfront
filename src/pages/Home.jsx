import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'
import dashboardImage from '../assets/images/Dashboard (2).png'
import mobileImage from '../assets/images/mobile.jpg'
import { 
  FaBox, 
  FaFileInvoice, 
  FaCloud,
  FaMobileAlt,
  FaBarcode,
  FaChartLine,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
  FaUsers,
  FaStore,
  FaShieldAlt,
  FaClock,
  FaRocket
} from 'react-icons/fa'

const WORKSPACE_URL = 'https://app.draganddrop.in'

const WHY_CHOOSE_US = [
  {
    icon: FaFileInvoice,
    title: 'Fast & Simple Billing',
    description: 'Generate professional invoices in seconds. Streamline your billing process with automated workflows.'
  },
  {
    icon: FaBox,
    title: 'Inventory Automation',
    description: 'Automate stock tracking, reorder points, and inventory management. Save hours every day.'
  },
  {
    icon: FaCloud,
    title: 'Daily Backup & Cloud Storage',
    description: 'Your data is safe with automatic daily backups. Access from anywhere, anytime.'
  },
  {
    icon: FaMobileAlt,
    title: 'Multi-Device Access',
    description: 'Manage your business on desktop, tablet, or mobile. Full functionality across all devices.'
  },
  {
    icon: FaBarcode,
    title: 'Barcode + QR Support',
    description: 'Quick inventory updates with barcode scanning. Fast and accurate stock management.'
  },
  {
    icon: FaChartLine,
    title: 'Advanced Reports',
    description: 'Get comprehensive insights into sales, profits, inventory, and business performance.'
  },
]

const COMPARISON_DATA = [
  { feature: 'Cloud Backup', dragdrop: true, traditional: false, competitors: true },
  { feature: 'Mobile Dashboard', dragdrop: true, traditional: false, competitors: true },
  { feature: 'Billing Speed', dragdrop: true, traditional: false, competitors: false },
  { feature: 'Inventory Alerts', dragdrop: true, traditional: false, competitors: true },
  { feature: 'Offline Support', dragdrop: true, traditional: false, competitors: false },
  { feature: 'Barcode Scanning', dragdrop: true, traditional: false, competitors: false },
  { feature: 'Value for Money', dragdrop: true, traditional: false, competitors: false },
  { feature: 'Real-time Sync', dragdrop: true, traditional: false, competitors: true },
  { feature: '24/7 Support', dragdrop: true, traditional: false, competitors: false },
]

const FEATURES_BLOCKS = [
  {
    category: 'Inventory Features',
    icon: FaBox,
    features: [
      'Real-time stock tracking',
      'Automated reorder points',
      'Multi-warehouse management',
      'Batch & serial number tracking',
      'Offline Support'
    ]
  },
  {
    category: 'Billing Features',
    icon: FaFileInvoice,
    features: [
      'Quick invoice generation',
      'Payment tracking',
      'Tax calculations',
      'Multiple payment methods'
    ]
  },
  {
    category: 'Reports & Analytics',
    icon: FaChartLine,
    features: [
      'Sales reports',
      'Profit & loss statements',
      'Inventory reports',
      'Customer analytics'
    ]
  },
  {
    category: 'Store Management',
    icon: FaStore,
    features: [
      'Multi-store support',
      'Store-wise inventory',
      'Centralized control',
      'Store performance metrics'
    ]
  },
]

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    business: 'TechMart Solutions',
    role: 'CEO',
    text: 'Drag & Drop ERP has transformed our inventory management. The real-time tracking and automated alerts have saved us countless hours.',
    rating: 5,
    avatar: 'RK'
  },
  {
    name: 'Priya Sharma',
    business: 'RetailPro',
    role: 'Operations Manager',
    text: 'The billing and invoicing features are exceptional. We\'ve streamlined our entire billing process and reduced errors significantly.',
    rating: 5,
    avatar: 'PS'
  },
  {
    name: 'Amit Patel',
    business: 'QuickStore',
    role: 'Founder',
    text: 'Best investment we made for our business. The dashboard gives us insights we never had before, helping us make better decisions.',
    rating: 5,
    avatar: 'AP'
  },
]

export default function Home() {
  return (
    <div className="homepage-enterprise">
      <Navbar />
      <main className="home-main-enterprise">
        {/* Hero Section */}
        <section className="hero-enterprise">
          <div className="container-enterprise">
            <div className="hero-content-enterprise">
              <div className="hero-left-enterprise">
                <h1 className="hero-title-enterprise">
                  Drag Your Data & Drop Your Power
                </h1>
                <p className="hero-subtitle-enterprise">
                  Successful business relies on successful inventory management. Automate your inventory operations and sell more with less effort.
                </p>
                <div className="hero-cta-enterprise">
                  <a 
                    href={WORKSPACE_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-get-started"
                  >
                    Get Started
                    <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className="hero-right-enterprise">
                <div className="dashboard-mockup-enterprise desktop-view">
                  <div className="laptop-frame-desktop-enterprise">
                    <div className="laptop-screen-desktop-enterprise">
                      <div className="laptop-screen-content-desktop">
                        <img 
                          src={dashboardImage} 
                          alt="Drag & Drop ERP Dashboard" 
                          className="dashboard-img-enterprise"
                        />
                      </div>
                    </div>
                    <div className="laptop-base-desktop-enterprise"></div>
                    <div className="laptop-keyboard-desktop-enterprise"></div>
                  </div>
                  <p className="dashboard-label-enterprise">Grocery Studio</p>
                </div>
                <div className="dashboard-mockup-enterprise mobile-view">
                  <div className="laptop-frame-enterprise">
                    <div className="laptop-screen-enterprise">
                      <div className="laptop-screen-content">
                        <img 
                          src={dashboardImage} 
                          alt="Drag & Drop ERP Dashboard" 
                          className="dashboard-img-laptop"
                        />
                      </div>
                    </div>
                    <div className="laptop-base-enterprise"></div>
                    <div className="laptop-keyboard-enterprise"></div>
                  </div>
                  <p className="dashboard-label-enterprise">Grocery Studio</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ratings Section */}
        <section className="ratings-enterprise">
          <div className="container-enterprise">
            <div className="ratings-content-enterprise">
              <div className="rating-stars-enterprise">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="rating-score">4.8/5</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-enterprise">
          <div className="container-enterprise">
            <div className="section-header-enterprise">
              <h2 className="section-title-enterprise">Why Choose Us</h2>
              <p className="section-subtitle-enterprise">Everything you need to run your business efficiently</p>
            </div>
            <div className="why-choose-grid-enterprise">
              {WHY_CHOOSE_US.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="why-choose-card-enterprise" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="why-choose-icon-enterprise">
                      <IconComponent />
                    </div>
                    <h3 className="why-choose-title-enterprise">{item.title}</h3>
                    <p className="why-choose-description-enterprise">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="comparison-enterprise">
          <div className="container-enterprise">
            <div className="section-header-enterprise">
              <h2 className="section-title-enterprise">See How We Compare</h2>
              <p className="section-subtitle-enterprise">Choose the best solution for your business</p>
            </div>
            <div className="comparison-table-enterprise">
              <div className="comparison-table-wrapper">
                <div className="comparison-header-enterprise">
                  <div className="comparison-col-feature">Features</div>
                  <div className="comparison-col-product">Drag & Drop</div>
                  <div className="comparison-col-product">Traditional Software</div>
                  <div className="comparison-col-product">Competitors</div>
                </div>
                {COMPARISON_DATA.map((row, index) => (
                  <div key={index} className="comparison-row-enterprise">
                    <div className="comparison-col-feature">{row.feature}</div>
                    <div className="comparison-col-product" data-label="Drag & Drop">
                      {row.dragdrop ? <FaCheckCircle className="check-icon" /> : <FaTimes className="cross-icon" />}
                    </div>
                    <div className="comparison-col-product" data-label="Traditional Software">
                      {row.traditional ? <FaCheckCircle className="check-icon" /> : <FaTimes className="cross-icon" />}
                    </div>
                    <div className="comparison-col-product" data-label="Competitors">
                      {row.competitors ? <FaCheckCircle className="check-icon" /> : <FaTimes className="cross-icon" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile + Desktop View Section */}
        <section className="device-showcase-enterprise">
          <div className="container-enterprise">
            <div className="device-showcase-content-enterprise">
              <div className="device-showcase-left-enterprise">
                <div className="mobile-mockup-enterprise">
                  <div className="phone-frame-showcase">
                    <div className="phone-screen-showcase">
                      <img 
                        src={mobileImage} 
                        alt="Drag & Drop ERP Mobile Dashboard" 
                        className="mobile-screen-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="device-showcase-right-enterprise">
                <h2 className="device-title-enterprise">Manage your business on the go</h2>
                <p className="device-description-enterprise">
                  Access your complete business dashboard from any device. Whether you're at the store, 
                  at home, or on the move, stay connected to your business 24/7.
                </p>
                <div className="device-features-enterprise">
                  <div className="device-feature-item-enterprise">
                    <FaCheckCircle />
                    <span>Full functionality on mobile</span>
                  </div>
                  <div className="device-feature-item-enterprise">
                    <FaCheckCircle />
                    <span>Real-time sync across devices</span>
                  </div>
                  <div className="device-feature-item-enterprise">
                    <FaCheckCircle />
                    <span>Offline mode support</span>
                  </div>
                  <div className="device-feature-item-enterprise">
                    <FaCheckCircle />
                    <span>Secure cloud access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-enterprise">
          <div className="container-enterprise">
            <div className="section-header-enterprise">
              <h2 className="section-title-enterprise">Complete Feature Set</h2>
              <p className="section-subtitle-enterprise">Everything you need to manage your business</p>
            </div>
            <div className="features-blocks-enterprise">
              {FEATURES_BLOCKS.map((block, index) => {
                const IconComponent = block.icon
                return (
                  <div key={index} className="feature-block-enterprise" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="feature-block-header-enterprise">
                      <div className="feature-block-icon-enterprise">
                        <IconComponent />
                      </div>
                      <h3 className="feature-block-title-enterprise">{block.category}</h3>
                    </div>
                    <ul className="feature-block-list-enterprise">
                      {block.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheckCircle />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-enterprise">
          <div className="container-enterprise">
            <div className="cta-content-enterprise">
              <h2 className="cta-title-enterprise">Grow your business faster with Drag & Drop</h2>
              <p className="cta-subtitle-enterprise">Join thousands of businesses already using our platform</p>
              <a 
                href={WORKSPACE_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-cta-enterprise"
              >
                Start Free Trial
                <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
