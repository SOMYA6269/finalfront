import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ImageGallery.css'

// Import all images
import dashboardImage from '../assets/images/Dashboard (2).png'
import mobileImage from '../assets/images/mobile.jpg'
import invoiceImage from '../assets/images/invoice.png'
import homeImage from '../assets/images/home.png'
import financialImage from '../assets/images/financial.png'
import staffImage from '../assets/images/staff.png'

const IMAGES = [
  {
    src: '/ddfinal.png',
    alt: 'Drag & Drop ERP Logo - Business Management Software',
    title: 'Drag & Drop ERP Logo',
    description: 'Official logo of Drag & Drop ERP - Business Management Software',
    category: 'Branding'
  },
  {
    src: dashboardImage,
    alt: 'Drag & Drop ERP Dashboard - Grocery Studio Interface',
    title: 'Dashboard Interface',
    description: 'Main dashboard view showing inventory management, billing, and analytics features',
    category: 'Screenshots'
  },
  {
    src: mobileImage,
    alt: 'Drag & Drop ERP Mobile Dashboard - Mobile App Interface',
    title: 'Mobile Dashboard',
    description: 'Mobile-responsive dashboard for managing business on the go',
    category: 'Screenshots'
  },
  {
    src: invoiceImage,
    alt: 'Invoice Management Interface - Grocery Studio',
    title: 'Invoice Management',
    description: 'Professional invoice creation and management interface in Grocery Studio',
    category: 'Screenshots'
  },
  {
    src: homeImage,
    alt: 'Home Dashboard View - Business Overview',
    title: 'Home Dashboard',
    description: 'Overview dashboard showing business metrics and quick actions',
    category: 'Screenshots'
  },
  {
    src: financialImage,
    alt: 'Financial Reports and Analytics Dashboard',
    title: 'Financial Reports',
    description: 'Comprehensive financial reporting and analytics dashboard',
    category: 'Screenshots'
  },
  {
    src: staffImage,
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

