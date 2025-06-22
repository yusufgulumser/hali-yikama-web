import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { validateContactForm } from '../../utils/validation';
import { sendContactEmail, initEmailJS } from '../../services/emailService';
import '../../utils/emailTest'; // Test fonksiyonları için

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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // EmailJS'i başlat
    initEmailJS();

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

    // Hata varsa temizle
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Genel hata mesajını temizle
    if (formErrors.contact) {
      setFormErrors(prev => ({
        ...prev,
        contact: ''
      }));
    }

    // Submit mesajını temizle
    if (submitMessage) {
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Önceki mesajları temizle
    setSubmitMessage('');
    setFormErrors({});

    // Form validasyonu
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    // E-posta gönderimi
    setIsSubmitting(true);
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitMessage('✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        // Formu temizle
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          address: '',
          message: ''
        });
      } else {
        setSubmitMessage('❌ ' + result.message);
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      setSubmitMessage('❌ Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };



  const workingHours = [
    { day: 'Pazartesi - Cumartesi', hours: '09:00 - 17:00', status: 'active' },
    { day: 'Pazar', hours: 'Kapalı', status: 'closed' },
    { day: 'Resmi Tatiller', hours: 'Kapalı', status: 'closed' }
  ];

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className={styles.contactContainer}>
      {/* Modern Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1>Profesyonel Halı Yıkama için Bize Ulaşın</h1>
        <p>15+ yıllık deneyimimizle Esenler ve çevre ilçelerde güvenilir hizmet. Ücretsiz keşif, şeffaf fiyat ve memnuniyet garantisi ile yanınızdayız.</p>
      </motion.div>

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
                <h2>💬 İletişim Formu</h2>
                <p>Bize ulaşmak için formu doldurun veya aşağıdaki hızlı iletişim seçeneklerini kullanın.</p>
                <div className={styles.formActions}>
                  <a href="https://wa.me/905313842496" className={styles.quickAction} target="_blank" rel="noopener noreferrer">
                    <span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                      </svg>
                    </span>
                    <span>WhatsApp</span>
                  </a>
                  <a href="tel:+905313842496" className={styles.quickAction}>
                    <span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </span>
                    <span>Telefon</span>
                  </a>
                  <a href="mailto:gulumserhaliyikama@gmail.com" className={styles.quickAction}>
                    <span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </span>
                    <span>E-posta</span>
                  </a>
                </div>
              </div>
              
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                {/* Hizmet Türü - En Üstte */}
                <div className={styles.formGroup}>
                  <label htmlFor="service">🎯 Ne yapmak istiyorsunuz? *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className={styles.serviceSelect}
                  >
                    <option value="">Lütfen seçiniz</option>
                    <option value="siparis">Halı siparişi vermek istiyorum</option>
                    <option value="soru">Soru sormak istiyorum</option>
                  </select>
                </div>

                {/* Genel hata mesajları */}
                {Object.keys(formErrors).length > 0 && (
                  <div className={styles.errorSummary}>
                    {formErrors.service && <div className={styles.errorItem}>⚠️ {formErrors.service}</div>}
                    {formErrors.name && <div className={styles.errorItem}>⚠️ {formErrors.name}</div>}
                    {formErrors.phone && <div className={styles.errorItem}>⚠️ {formErrors.phone}</div>}
                    {formErrors.email && <div className={styles.errorItem}>⚠️ {formErrors.email}</div>}
                    {formErrors.address && <div className={styles.errorItem}>⚠️ {formErrors.address}</div>}
                    {formErrors.contact && <div className={styles.errorItem}>⚠️ {formErrors.contact}</div>}
                  </div>
                )}

                {/* Submit mesajı */}
                {submitMessage && (
                  <div className={`${styles.submitMessage} ${submitMessage.includes('✅') ? styles.success : styles.error}`}>
                    {submitMessage}
                  </div>
                )}

                {/* Formun geri kalanı sadece hizmet türü seçildiyse gösterilir */}
                {formData.service && (
                  <>
                    {/* Ad Soyad - Her zaman zorunlu */}
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
                        className={formErrors.name ? styles.inputError : ''}
                      />
                    </div>

                    {/* Soru sorma formu */}
                    {formData.service === 'soru' && (
                      <>
                        <div className={styles.contactWarning}>
                          <span className={styles.warningIcon}>ℹ️</span>
                          <span>Lütfen sorularınız hakkında iletişime geçebilmemiz için telefon numaranızı veya e-posta adresinizi giriniz.</span>
                        </div>
                        
                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label htmlFor="phone">📞 Telefon</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="0531 384 2496"
                              className={formErrors.phone ? styles.inputError : ''}
                            />
                          </div>
                          
                          <div className={styles.formGroup}>
                            <label htmlFor="email">📧 E-posta</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="ornek@email.com"
                              className={formErrors.email ? styles.inputError : ''}
                            />
                          </div>
                        </div>

                        <div className={styles.formGroup}>
                          <label htmlFor="message">💬 Sorunuz</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Sorunuzu detaylı bir şekilde yazabilirsiniz..."
                          ></textarea>
                        </div>
                      </>
                    )}

                    {/* Halı siparişi formu */}
                    {formData.service === 'siparis' && (
                      <>
                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label htmlFor="phone">📞 Telefon *</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              placeholder="0531 384 2496"
                              className={formErrors.phone ? styles.inputError : ''}
                            />
                          </div>
                          
                          <div className={styles.formGroup}>
                            <label htmlFor="address">📍 Adres *</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              placeholder="İlçe ve mahalle"
                              className={formErrors.address ? styles.inputError : ''}
                            />
                          </div>
                        </div>

                        <div className={styles.formGroup}>
                          <label htmlFor="message">💬 Sipariş Detayları</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Halı türü, boyutları, leke durumu, özel istekleriniz..."
                          ></textarea>
                        </div>
                      </>
                    )}

                    <button 
                      type="submit" 
                      className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? '⏳' : '📧'}</span>
                      <span>{isSubmitting ? 'Gönderiliyor...' : 'E-posta Gönder'}</span>
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* Working Hours */}
            <div className={styles.sidebarContainer}>
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
    </div>
  );
};

export default Contact; 