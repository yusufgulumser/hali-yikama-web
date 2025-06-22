import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceAreas.module.css';

const ServiceAreas = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // İlçe ve mahalleler
  const serviceAreas = [
    {
      district: 'Esenler',
      isMainCenter: true,
      neighborhoods: [
        'Atışalanı', 'Çiftehavuzlar', 'Fevzi Çakmak', 'Havaalanı', 
        'Kemer', 'Menderes', 'Namık Kemal', 'Nine Hatun', 
        'Oruçreis', 'Tuna', 'Turgutreis', 'Yavuz Selim'
      ]
    },
    {
      district: 'Güngören',
      neighborhoods: [
        'Abdurrahman Nafiz Gürman', 'Akçaburgaz', 'Geçit',
        'Güneştepe', 'Haznedar', 'Mareşal Fevzi Çakmak',
        'Mehmet Nesih Özmen', 'Merkez', 'Tozkoparan'
      ]
    },
    {
      district: 'Bağcılar',
      neighborhoods: [
        'Bağlar', 'Demirkapı', 'Evren', 'Fatih', 'Göztepe',
        'Güneşli', 'İnönü', 'Kemalpaşa', 'Kirazlı', 'Mahmutbey',
        'Merkez', 'Sakızağacı', 'Sancaktepe', 'Yıldıztepe', 'Yüzyıl'
      ]
    },
    {
      district: 'Bayrampaşa',
      neighborhoods: [
        'Altıntepsi', 'Cevatpaşa', 'Kartaltepe', 'Muratpaşa',
        'Ortamahalle', 'Ruhupaşa', 'Terazidere', 'Vatan', 'Yıldırım'
      ]
    },
    {
      district: 'Zeytinburnu',
      neighborhoods: [
        'Beştelsiz', 'Çırpıcı', 'Gökalp', 'Merkezefendi',
        'Nuripaşa', 'Sümer', 'Telsiz', 'Veliefendi', 'Yenidoğan'
      ]
    },
    {
      district: 'Bahçelievler',
      neighborhoods: [
        'Adnan Kahveci', 'Bahçelievler', 'Cumhuriyet', 'Ertuğrulgazi',
        'Fevzi Çakmak', 'Hürriyet', 'Kocasinan', 'Sirinevler',
        'Soğanlı', 'Şirinevler', 'Yenibosna', 'Zafer'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1>Hizmet Verdiğimiz Bölgeler</h1>
        <p>Esenler merkezli olarak çevre ilçelerde ücretsiz alma-teslim hizmeti sunuyoruz. Tüm mahallelerimize profesyonel halı yıkama hizmeti veriyoruz.</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.areasGrid}
      >
        {serviceAreas.map((area, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`${styles.areaCard} ${area.isMainCenter ? styles.mainCenter : ''}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.districtInfo}>
                <span className={styles.districtIcon}>
                  {area.isMainCenter ? '🏠' : '📍'}
                </span>
                <h2>{area.district}</h2>
                {area.isMainCenter && (
                  <span className={styles.mainBadge}>Ana Merkez</span>
                )}
              </div>
              <span className={styles.neighborhoodCount}>
                {area.neighborhoods.length} Mahalle
              </span>
            </div>

            <div className={styles.neighborhoodsList}>
              {area.neighborhoods.map((neighborhood, idx) => (
                <span key={idx} className={styles.neighborhood}>
                  {neighborhood}
                </span>
              ))}
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.serviceInfo}>
                <span className={styles.serviceIcon}>🚚</span>
                <span>Ücretsiz Alma-Teslim</span>
              </div>
              <a href="tel:+905313842496" className={styles.callButton}>
                <span>📞</span>
                <span>Ara</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={styles.serviceNote}
      >
        <div className={styles.noteCard}>
          <h3>🎯 Özel Hizmet Bilgileri</h3>
          <div className={styles.noteGrid}>
            <div className={styles.noteItem}>
              <span className={styles.noteIcon}>🚚</span>
              <h4>Ücretsiz Taşıma</h4>
              <p>Tüm listelenen bölgelerde ücretsiz evden alma ve teslim hizmeti</p>
            </div>
            <div className={styles.noteItem}>
              <span className={styles.noteIcon}>⏱️</span>
              <h4>Hızlı Teslimat</h4>
              <p>1 hafta içinde temizlenmiş halılarınızı teslim ediyoruz</p>
            </div>
            <div className={styles.noteItem}>
              <span className={styles.noteIcon}>📞</span>
              <h4>7/24 Destek</h4>
              <p>WhatsApp hattımızdan her zaman bize ulaşabilirsiniz</p>
            </div>
          </div>
          <div className={styles.extraAreas}>
            <h4>🗺️ Diğer Bölgeler</h4>
            <p>Listelenmemiş bölgeler için lütfen bizimle iletişime geçin. Size özel çözüm üretmekten memnuniyet duyarız.</p>
            <div className={styles.contactActions}>
              <a href="tel:+905313842496" className={styles.primaryBtn}>
                <span>📞</span>
                <span>Hemen Ara</span>
              </a>
              <a href="https://wa.me/905313842496" className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceAreas; 