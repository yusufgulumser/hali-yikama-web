import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Contact.module.css';

const Contact = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    alert('🎉 Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      address: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Telefon Hattı',
      subtitle: '7/24 Müşteri Hizmetleri',
      details: ['+90 555 123 4567', 'Anında destek alın'],
      action: 'tel:+905551234567',
      actionText: 'Hemen Ara',
      color: 'phone'
    },
    {
      icon: '💬',
      title: 'WhatsApp Destek',
      subtitle: 'Hızlı İletişim',
      details: ['Fotoğraf gönderin, fiyat alın', 'Anlık yanıt garantisi'],
      action: 'https://wa.me/905551234567',
      actionText: 'WhatsApp Aç',
      color: 'whatsapp'
    },
    {
      icon: '📧',
      title: 'E-posta',
      subtitle: 'Detaylı Bilgi',
      details: ['info@haliyikama.com', 'Profesyonel destek'],
      action: 'mailto:info@haliyikama.com',
      actionText: 'E-posta Gönder',
      color: 'email'
    }
  ];

  // Esenler ve çevresi ilçeler
  const serviceAreas = [
    'Esenler', 'Bağcılar', 'Bahçelievler', 'Güngören', 'Zeytinburnu',
    'Fatih', 'Eyüpsultan', 'Gaziosmanpaşa', 'Sultangazi', 'Başakşehir',
    'Küçükçekmece', 'Avcılar', 'Beylikdüzü', 'Esenyurt', 'Büyükçekmece',
    'Bakırköy', 'Bayrampaşa', 'Kağıthane', 'Şişli', 'Beşiktaş'
  ];

  const workingHours = [
    { day: 'Pazartesi - Cumartesi', hours: '08:00 - 18:00', status: 'active' },
    { day: 'Pazar', hours: '10:00 - 16:00', status: 'limited' },
    { day: 'Resmi Tatiller', hours: 'Kapalı', status: 'closed' }
  ];

  const quickServices = [
    { icon: '🏠', title: 'Halı Temizliği', desc: 'Tüm halı türleri', price: '₺60/m²' },
    { icon: '🛋️', title: 'Koltuk Temizliği', desc: 'Koltuk takımları', price: '₺300/takım' },
    { icon: '🛏️', title: 'Yatak Temizliği', desc: 'Yatak & şilte', price: '₺150/adet' },
    { icon: '🪟', title: 'Stor Perde', desc: 'Tüm perde türleri', price: '₺100/m²' }
  ];

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className={styles.contact}>
      {/* Modern Hero Section */}
      <section className={styles.modernHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <span className={styles.heroBadge}>📞 İletişim</span>
              <h1 className={styles.heroTitle}>
                Profesyonel Halı Yıkama için <span className={styles.highlight}>Bize Ulaşın</span>
              </h1>
              <p className={styles.heroSubtitle}>
                15+ yıllık deneyimimizle Esenler ve çevre ilçelerde güvenilir hizmet. 
                Ücretsiz keşif, şeffaf fiyat ve memnuniyet garantisi ile yanınızdayız.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Yıl Deneyim</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5000+</span>
                  <span className={styles.statLabel}>Mutlu Müşteri</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>%99</span>
                  <span className={styles.statLabel}>Memnuniyet</span>
                </div>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.heroCard}>
                <div className={styles.heroCardHeader}>
                  <h3>🎯 Hızlı İletişim</h3>
                  <p>En hızlı yanıt için tercih edin</p>
                </div>
                <div className={styles.heroActions}>
                  <a href="tel:+905551234567" className={styles.primaryAction}>
                    <span>📞</span>
                    <span>Hemen Ara</span>
                  </a>
                  <a href="https://wa.me/905551234567" className={styles.secondaryAction} target="_blank" rel="noopener noreferrer">
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
                <div className={styles.heroNote}>
                  <small>🕒 7/24 müşteri hizmetleri aktif</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section 
        className={`${styles.contactMethods} section`}
        id="contact-methods"
        data-animate
      >
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('contact-methods') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.headerBadge}>📞 İletişim Kanalları</span>
            <h2>Size En Uygun İletişim Yolunu Seçin</h2>
            <p>Farklı iletişim seçeneklerimizle 7/24 hizmetinizdeyiz</p>
          </div>
          
          <div className={`${styles.methodsGrid} ${isVisible('contact-methods') ? 'fade-in visible' : 'fade-in'}`}>
            {contactMethods.map((method, index) => (
              <div key={index} className={`${styles.methodCard} ${styles[method.color]}`} style={{ '--i': index }}>
                <div className={styles.methodIcon}>{method.icon}</div>
                <div className={styles.methodContent}>
                  <h3>{method.title}</h3>
                  <p className={styles.methodSubtitle}>{method.subtitle}</p>
                  <div className={styles.methodDetails}>
                    {method.details.map((detail, idx) => (
                      <span key={idx} className={styles.methodDetail}>{detail}</span>
                    ))}
                  </div>
                </div>
                <a 
                  href={method.action} 
                  className={styles.methodAction}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {method.actionText}
                  <span className={styles.actionArrow}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section 
        className={`${styles.formSection} section section-alt`}
        id="contact-form"
        data-animate
      >
        <div className="container">
          <div className={`${styles.formGrid} ${isVisible('contact-form') ? 'fade-in visible' : 'fade-in'}`}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h2>💬 Bize Mesaj Gönderin</h2>
                <p>Halı yıkama ihtiyacınızı paylaşın, size özel çözüm sunalım.</p>
                <div className={styles.formActions}>
                  <a href="https://wa.me/905551234567" className={styles.quickAction} target="_blank" rel="noopener noreferrer">
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>
                  <a href="tel:+905551234567" className={styles.quickAction}>
                    <span>📞</span>
                    <span>Telefon</span>
                  </a>
                  <a href="mailto:info@haliyikama.com" className={styles.quickAction}>
                    <span>📧</span>
                    <span>E-posta</span>
                  </a>
                </div>
              </div>
              
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">👤 Ad Soyad *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">📧 E-posta *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="ornek@email.com"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">📞 Telefon *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="0555 123 4567"
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="service">🏠 Hizmet Türü</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Hizmet seçiniz</option>
                      <option value="makina-hali">Makina Halısı</option>
                      <option value="yun-hali">Yün Halı</option>
                      <option value="el-hali">El Halısı</option>
                      <option value="koltuk-temizligi">Koltuk Temizliği</option>
                      <option value="yatak-temizligi">Yatak Temizliği</option>
                      <option value="stor-perde">Stor Perde</option>
                      <option value="yorgan-battaniye">Yorgan & Battaniye</option>
                      <option value="tumu">Tümü</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="address">📍 Adres</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="İlçe ve mahalle"
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">💬 Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Halı boyutları, leke durumu, özel istekleriniz..."
                  ></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  <span>🚀</span>
                  <span>Mesaj Gönder</span>
                </button>
              </form>
            </div>

            {/* Quick Services & Hours */}
            <div className={styles.sidebarContainer}>
              {/* Quick Services */}
              <div className={styles.quickServices}>
                <h3>⚡ Hızlı Fiyat Listesi</h3>
                <div className={styles.servicesList}>
                  {quickServices.map((service, index) => (
                    <div key={index} className={styles.serviceItem} style={{ '--i': index }}>
                      <span className={styles.serviceIcon}>{service.icon}</span>
                      <div className={styles.serviceInfo}>
                        <h4>{service.title}</h4>
                        <p>{service.desc}</p>
                      </div>
                      <span className={styles.servicePrice}>{service.price}</span>
                    </div>
                  ))}
                </div>
                <Link to="/prices" className={styles.viewAllPrices}>
                  Tüm Fiyatları Gör →
                </Link>
              </div>

              {/* Working Hours */}
              <div className={styles.workingHours}>
                <h3>🕒 Çalışma Saatleri</h3>
                <div className={styles.hoursList}>
                  {workingHours.map((schedule, index) => (
                    <div key={index} className={`${styles.hoursItem} ${styles[schedule.status]}`}>
                      <span className={styles.hoursDay}>{schedule.day}</span>
                      <span className={styles.hoursTime}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.hoursNote}>
                  <small>📱 Acil durumlar için 7/24 WhatsApp hattımız aktif</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section 
        className={`${styles.serviceAreas} section`}
        id="service-areas"
        data-animate
      >
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('service-areas') ? 'fade-in visible' : 'fade-in'}`}>
            <span className={styles.headerBadge}>📍 Hizmet Bölgeleri</span>
            <h2>Esenler ve Çevre İlçelere Hizmet</h2>
            <p>Ücretsiz alma-teslim hizmeti verdiğimiz bölgeler</p>
          </div>
          
          <div className={`${styles.areasContainer} ${isVisible('service-areas') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.areasGrid}>
              {serviceAreas.map((area, index) => (
                <div 
                  key={index} 
                  className={`${styles.areaCard} ${area === 'Esenler' ? styles.mainArea : ''}`}
                  style={{ '--i': index }}
                >
                  <span className={styles.areaIcon}>
                    {area === 'Esenler' ? '🏠' : '📍'}
                  </span>
                  <span className={styles.areaName}>{area}</span>
                  {area === 'Esenler' && <span className={styles.mainBadge}>Ana Merkez</span>}
                </div>
              ))}
            </div>
            
            <div className={styles.areasNote}>
              <div className={styles.noteCard}>
                <h4>🚚 Ücretsiz Taşıma Garantisi</h4>
                <p>Listelenen tüm bölgelere ücretsiz evden alma ve teslim hizmeti sunuyoruz.</p>
                <p><strong>Diğer bölgeler için:</strong> Lütfen bizimle iletişime geçin, size özel çözüm üretelim.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact; 