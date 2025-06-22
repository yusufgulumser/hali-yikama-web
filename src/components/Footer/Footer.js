import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetlerimiz', path: '/services' },
    { name: 'Fiyatlarımız', path: '/prices' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'İletişim', path: '/contact' }
  ];

  const services = [
    'Halı Temizliği',
    'Koltuk Temizliği', 
    'Yatak Temizliği',
    'Stor Perde Temizliği',
    'Yorgan & Battaniye'
  ];

  const serviceAreas = [
    'Esenler', 'Bağcılar', 'Bahçelievler', 'Güngören',
    'Zeytinburnu', 'Fatih', 'Eyüpsultan', 'Gaziosmanpaşa'
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.companySection}>
            <div className={styles.logo}>
              <img src="/images/logo.jpg" alt="Gülümser Halı Yıkama" className={styles.logoImage} />
              <div className={styles.logoContent}>
                <h3 className={styles.logoText}>Gülümser</h3>
                <span className={styles.logoSubtext}>Halı Yıkama</span>
              </div>
            </div>
            <p className={styles.description}>
              15+ yıllık deneyimimizle Esenler ve çevre ilçelerde güvenilir halı yıkama hizmeti. 
              Profesyonel ekip, modern teknoloji ve %100 müşteri memnuniyeti garantisi.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>✅</span>
                <span>15+ Yıl Deneyim</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>🚚</span>
                <span>Ücretsiz Taşıma</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>💯</span>
                <span>%100 Garanti</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>🔗</span>
              Hızlı Linkler
            </h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>🏠</span>
              Hizmetlerimiz
            </h4>
            <ul className={styles.linkList}>
              {services.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <span className={styles.serviceIcon}>✨</span>
                  {service}
                </li>
              ))}
            </ul>
            <Link to="/services" className={styles.viewAllServices}>
              Tüm Hizmetleri Gör →
            </Link>
          </div>

          {/* Contact & Areas */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>📞</span>
              İletişim & Bölgeler
            </h4>
            <div className={styles.contactInfo}>
              <a href="tel:+905551234567" className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Telefon</span>
                  <span className={styles.contactValue}>+90 555 123 45 67</span>
                </div>
              </a>
              <a href="https://wa.me/905551234567" className={styles.contactItem} target="_blank" rel="noopener noreferrer">
                <span className={styles.contactIcon}>💬</span>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <span className={styles.contactValue}>Hızlı Destek</span>
                </div>
              </a>
              <a href="mailto:info@haliyikama.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>E-posta</span>
                  <span className={styles.contactValue}>info@haliyikama.com</span>
                </div>
              </a>
            </div>
            
            <div className={styles.serviceAreas}>
              <h5 className={styles.areasTitle}>Hizmet Bölgeleri</h5>
              <div className={styles.areasTags}>
                {serviceAreas.map((area, index) => (
                  <span key={index} className={styles.areaTag}>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaLeft}>
              <h3>🚀 Hemen Hizmet Alın!</h3>
              <p>Halılarınız için profesyonel bakım zamanı. Ücretsiz keşif hizmeti ile başlayın.</p>
            </div>
            <div className={styles.ctaActions}>
              <a href="tel:+905551234567" className={styles.ctaButton}>
                <span>📞</span>
                <span>Hemen Ara</span>
              </a>
              <a href="https://wa.me/905551234567" className={styles.ctaButtonSecondary} target="_blank" rel="noopener noreferrer">
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className={styles.socialSection}>
          <h4 className={styles.socialTitle}>Bizi Takip Edin</h4>
          <div className={styles.socialLinks}>
            <a href="tel:+905551234567" className={styles.socialLink} title="Telefon">
              <span>📞</span>
              <span>Telefon</span>
            </a>
            <a href="https://wa.me/905551234567" className={styles.socialLink} title="WhatsApp" target="_blank" rel="noopener noreferrer">
              <span>💬</span>
              <span>WhatsApp</span>
            </a>
            <a href="mailto:info@haliyikama.com" className={styles.socialLink} title="E-posta">
              <span>📧</span>
              <span>E-posta</span>
            </a>
            <a href="#" className={styles.socialLink} title="Instagram">
              <span>📷</span>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <div className={styles.bottomLeft}>
              <p>&copy; {currentYear} Gülümser Halı Yıkama. Tüm hakları saklıdır.</p>
              <p className={styles.bottomSubtext}>Esenler merkezli güvenilir halı yıkama hizmeti</p>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.workingHours}>
                <span className={styles.hoursIcon}>🕒</span>
                <div className={styles.hoursContent}>
                  <span className={styles.hoursLabel}>Çalışma Saatleri</span>
                  <span className={styles.hoursValue}>Pazartesi - Cumartesi: 08:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 