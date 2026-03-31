import { useState, useEffect } from "react";
import "./App.css";

import livingImg from "./assets/images/living.png";
import kitchenImg from "./assets/images/kitchen.png";
import bedroomImg from "./assets/images/bedroom.png";
import diningImg from "./assets/images/dining.png";
import annexImg from "./assets/images/annex.png";
import patioImg from "./assets/images/patio.png";

const translations = {
  en: {
    nav: {
      gallery: "Gallery",
      features: "Features",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Available Now",
      title: "Exclusive 1-Bedroom Apartment + Annex in Miraflores!",
      subtitle: "Ground floor with private patio near Malecón Cisneros. Ideal for living, office, or remote work.",
      priceLabel: "Monthly Rent",
      price: "$750",
      priceNote: "without parking",
      viewGallery: "View Gallery",
      learnMore: "Learn More",
    },
    features: {
      title: "Property Highlights",
      bedroom: "1 Bedroom + Annex",
      bathroom: "Full Bathroom",
      area: "72 m² / 90 m² total",
      patio: "Private Patio",
      location: "3 Blocks from Malecón",
      furnished: "Semi Furnished",
    },
    gallery: {
      title: "Photo Gallery",
      subtitle: "Click on any image to view it in full size",
      view: "View",
      clickToAdd: "Click to add image",
      livingRoom: "Living Room",
      kitchen: "Kitchen",
      bedroom: "Bedroom",
      dining: "Dining Room",
      annex: "Multipurpose Annex",
      patio: "Private Patio",
    },
    about: {
      title: "About This Property",
      text1: "Spacious semi-furnished apartment (ground floor type) with 1 bedroom + multipurpose annex, ideal for living, office, or consulting room. Perfect for remote work.",
      text2: "Premium Location: Just 3 blocks from Malecón Cisneros. Near Larcomar, Good Hope Clinic, University of Piura, banks, notaries, library, municipal auditorium, cultural centers, galleries, restaurants and cafés.",
      text3: "Rooms: 1 main bedroom, versatile annex, living-dining room, full bathroom, kitchen, and laundry area. Private patio perfect for natural lighting and ventilation. Optional parking available.",
      coveredArea: "Covered Area",
      totalArea: "Total Area",
      security: "24/7 Security",
    },
    pricing: {
      title: "Pricing & Terms",
      withoutParking: "Without Parking",
      withParking: "With Parking",
      maintenance: "Maintenance",
      maintenanceNote: "Includes water, common area cleaning, and elevator",
      contract: "Contract Terms",
      contractNote: "1 year contract requires 2 months deposit + 1 month advance",
    },
    contact: {
      title: "Contact Information",
      name: "Isabel V",
      whatsapp: "+1 405 702 2886",
      email: "irvorlandini@gmail.com",
      callWhatsapp: "WhatsApp",
      sendEmail: "Send Email",
    },
    footer: {
      tagline: "Live in the best area of Miraflores!",
      copyright: "© 2026 Miraflores Rental. All rights reserved.",
    },
    heroImage: {
      title: "Property Image",
      subtitle: "Add your main photo here",
    },
  },
  es: {
    nav: {
      gallery: "Galería",
      features: "Características",
      about: "Detalles",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible Ahora",
      title: "¡Exclusivo Depa 1 Dormitorio + Anexo en Miraflores!",
      subtitle: "Primer piso con patio propio cerca del Malecón Cisneros. Ideal para vivienda, oficina o trabajo remoto.",
      priceLabel: "Renta Mensual",
      price: "$750",
      priceNote: "sin cochera",
      viewGallery: "Ver Galería",
      learnMore: "Más Información",
    },
    features: {
      title: "Características de la Propiedad",
      bedroom: "1 Dormitorio + Anexo",
      bathroom: "Baño Completo",
      area: "72 m² / 90 m² total",
      patio: "Patio Propio",
      location: "3 Cuadras del Malecón",
      furnished: "Semi Amueblado",
    },
    gallery: {
      title: "Galería de Fotos",
      subtitle: "Haz clic en cualquier imagen para verla en tamaño completo",
      view: "Ver",
      clickToAdd: "Clic para agregar imagen",
      livingRoom: "Sala",
      kitchen: "Cocina",
      bedroom: "Dormitorio",
      dining: "Comedor",
      annex: "Anexo Multiusos",
      patio: "Patio Propio",
    },
    about: {
      title: "Acerca de Esta Propiedad",
      text1: "Amplio departamento semi amoblado (tipo planta baja) de 1 dormitorio + Anexo multiusos, ideal para vivienda, oficina o consultorio. Perfecto para trabajo remoto.",
      text2: "Ubicación Premium: A solo 3 cuadras del Malecón Cisneros. Cerca de Larcomar, Clínica Good Hope, Univ. de Piura, bancos, notarías, librería, auditorio municipal, centros culturales, galerías, restaurantes y cafeterías.",
      text3: "Ambientes: 1 Dormitorio principal, anexo versátil, sala-comedor, baño completo, cocina y área de lavandería. Patio propio perfecto para iluminación natural y ventilación. Cochera opcional disponible.",
      coveredArea: "Área Techada",
      totalArea: "Área Total",
      security: "Seguridad 24/7",
    },
    pricing: {
      title: "Precios y Condiciones",
      withoutParking: "Sin Cochera",
      withParking: "Con Cochera",
      maintenance: "Mantenimiento",
      maintenanceNote: "Incluye agua, limpieza de áreas comunes y ascensor",
      contract: "Condiciones del Contrato",
      contractNote: "Contrato de 1 año requiere 2 meses de depósito y 1 mes de adelanto",
    },
    contact: {
      title: "Información de Contacto",
      name: "Isabel V",
      whatsapp: "+1 405 702 2886",
      email: "irvorlandini@gmail.com",
      callWhatsapp: "WhatsApp",
      sendEmail: "Enviar Email",
    },
    footer: {
      tagline: "¡Vive en la mejor zona de Miraflores!",
      copyright: "© 2026 Miraflores Rental. Todos los derechos reservados.",
    },
    heroImage: {
      title: "Imagen de la Propiedad",
      subtitle: "Agrega tu foto principal aquí",
    },
  },
};

function App() {
  const [activeImage, setActiveImage] = useState(0);
  const [heroImage, setHeroImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  const heroImages = [
    { src: livingImg, label: "Living Room" },
    { src: kitchenImg, label: "Kitchen" },
    { src: bedroomImg, label: "Bedroom" },
    { src: diningImg, label: "Dining" },
    { src: annexImg, label: "Annex" },
    { src: patioImg, label: "Patio" },
  ];

  const images = [
    { id: 1, label: t.gallery.livingRoom, src: livingImg },
    { id: 2, label: t.gallery.kitchen, src: kitchenImg },
    { id: 3, label: t.gallery.bedroom, src: bedroomImg },
    { id: 4, label: t.gallery.dining, src: diningImg },
    { id: 5, label: t.gallery.annex, src: annexImg },
    { id: 6, label: t.gallery.patio, src: patioImg },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const features = [
    { icon: "🛏️", label: t.features.bedroom },
    { icon: "🚿", label: t.features.bathroom },
    { icon: "📐", label: t.features.area },
    { icon: "🌿", label: t.features.patio },
    { icon: "📍", label: t.features.location },
    { icon: "🛋️", label: t.features.furnished },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const openModal = (index) => {
    setActiveImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">DreamHome</span>
          </div>
          <div className="nav-links">
            <a href="#features">{t.nav.features}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === "en" ? "ES 🇪🇸" : "EN 🇺🇸"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">{t.hero.badge}</span>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-price">
            <span className="price-label">{t.hero.priceLabel}</span>
            <span className="price-amount">{t.hero.price}</span>
            <span className="price-note">{t.hero.priceNote}</span>
          </div>
          <div className="hero-buttons">
            <a href="#gallery" className="btn btn-primary">
              {t.hero.viewGallery}
            </a>
            <a href="#about" className="btn btn-secondary">
              {t.hero.learnMore}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-slideshow">
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.label}
                className={`hero-img ${index === heroImage ? "active" : ""}`}
              />
            ))}
          </div>
          <div className="hero-dots">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`hero-dot ${index === heroImage ? "active" : ""}`}
                onClick={() => setHeroImage(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">{t.features.title}</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <span className="feature-label">{feature.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2 className="section-title">{t.gallery.title}</h2>
        <p className="section-subtitle">{t.gallery.subtitle}</p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={image.src} alt={image.label} className="gallery-image" />
              <div className="gallery-overlay">
                <span>{image.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <button className="modal-nav modal-prev" onClick={prevImage}>
              ‹
            </button>
            <div className="modal-image">
              <img 
                src={images[activeImage].src} 
                alt={images[activeImage].label} 
              />
              <span className="modal-label">{images[activeImage].label}</span>
            </div>
            <button className="modal-nav modal-next" onClick={nextImage}>
              ›
            </button>
            <div className="modal-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeImage ? "active" : ""}`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="about-text">{t.about.text1}</p>
          <p className="about-text">{t.about.text2}</p>
          <p className="about-text">{t.about.text3}</p>
          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-number">72 m²</span>
              <span className="highlight-label">{t.about.coveredArea}</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">90.18 m²</span>
              <span className="highlight-label">{t.about.totalArea}</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">24/7</span>
              <span className="highlight-label">{t.about.security}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2 className="section-title">{t.pricing.title}</h2>
        <div className="pricing-grid-two">
          <div className="pricing-card">
            <span className="pricing-label">{t.pricing.withoutParking}</span>
            <span className="pricing-amount">$750 USD</span>
            <span className="pricing-period">/ {language === "en" ? "month" : "mes"}</span>
          </div>
          <div className="pricing-card featured">
            <span className="pricing-label">{t.pricing.withParking}</span>
            <span className="pricing-amount">$850 USD</span>
            <span className="pricing-period">/ {language === "en" ? "month" : "mes"}</span>
          </div>
        </div>
        <div className="maintenance-info">
          <strong>{t.pricing.maintenance}:</strong> 325 Soles / {language === "en" ? "month" : "mes"} — {t.pricing.maintenanceNote}
        </div>
        <div className="contract-info">
          <strong>{t.pricing.contract}:</strong> {t.pricing.contractNote}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-info">
          <p className="contact-name">{t.contact.name}</p>
          <div className="contact-buttons">
            <a 
              href="https://wa.me/14057022886" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
            >
              💬 {t.contact.callWhatsapp}: {t.contact.whatsapp}
            </a>
            <a 
              href="mailto:irvorlandini@gmail.com" 
              className="btn btn-email"
            >
              ✉️ {t.contact.sendEmail}: {t.contact.email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">DreamHome</span>
          </div>
          <p className="footer-text">{t.footer.tagline}</p>
          <div className="footer-links">
            <a href="#features">{t.nav.features}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <p className="footer-copyright">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
