import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ImageGallery.css'

// All images use absolute paths from /public/images/ for SEO
const IMAGES = [
  {
    src: '/images/ddfinal.png',
    alt: 'Drag & Drop ERP Logo - Business Management Software',
    title: 'Drag & Drop ERP Logo',
    description: 'Official logo of Drag & Drop ERP - Business Management Software',
    category: 'Branding'
  },
  {
    src: '/images/Dashboard-2.png',
    alt: 'Drag & Drop ERP Dashboard - Grocery Studio Interface',
    title: 'Dashboard Interface',
    description: 'Main dashboard view showing inventory management, billing, and analytics features',
    category: 'Screenshots'
  },
  {
    src: '/images/mobile.jpg',
    alt: 'Drag & Drop ERP Mobile Dashboard - Mobile App Interface',
    title: 'Mobile Dashboard',
    description: 'Mobile-responsive dashboard for managing business on the go',
    category: 'Screenshots'
  },
  {
    src: '/images/invoice.png',
    alt: 'Invoice Management Interface - Grocery Studio',
    title: 'Invoice Management',
    description: 'Professional invoice creation and management interface in Grocery Studio',
    category: 'Screenshots'
  },
  {
    src: '/images/home.png',
    alt: 'Home Dashboard View - Business Overview',
    title: 'Home Dashboard',
    description: 'Overview dashboard showing business metrics and quick actions',
    category: 'Screenshots'
  },
  {
    src: '/images/financial.png',
    alt: 'Financial Reports and Analytics Dashboard',
    title: 'Financial Reports',
    description: 'Comprehensive financial reporting and analytics dashboard',
    category: 'Screenshots'
  },
  {
    src: '/images/staff.png',
    alt: 'Staff Management Interface - Employee Dashboard',
    title: 'Staff Management',
    description: 'Staff and employee management interface with role-based access',
    category: 'Screenshots'
  }
]

export default function ImageGallery() {
  useEffect(() => {
    document.title = 'Image Gallery - Drag & Drop ERP'
  }, [])

  return (
    <div className="image-gallery-page">
      <Navbar />
      <main className="gallery-main">
        <div className="gallery-container">
          <header className="gallery-header">
            <h1>Image Gallery</h1>
            <p>Explore all images and screenshots from Drag & Drop ERP</p>
          </header>

          <div className="gallery-grid">
            {IMAGES.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    title={image.title}
                    loading="lazy"
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-info">
                  <span className="gallery-category">{image.category}</span>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

