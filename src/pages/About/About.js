import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    {
      icon: "🏆",
      number: "15+",
      label: "Yıl Deneyim",
      description: "Sektörde köklü deneyim"
    },
    {
      icon: "😊", 
      number: "50K+",
      label: "Mutlu Müşteri",
      description: "Güvenilir hizmet"
    },
    {
      icon: "🧽",
      number: "100K+", 
      label: "Temizlenen Ürün",
      description: "Başarıyla tamamlanan"
    },
    {
      icon: "⭐",
      number: "%99.8",
      label: "Memnuniyet",
      description: "Kalite garantisi"
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1>Gülümser Halı Yıkama Hakkında</h1>
        <p>15+ yıllık deneyimimiz ile İstanbul'un en güvenilir halı yıkama hizmeti. Ailenizin sağlığı için temizlik standardında hiçbir ödün vermiyoruz.</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.statsGrid}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={styles.statCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statDescription}>{stat.description}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={styles.storySection}
      >
        <div className={styles.storyCard}>
          <h2>Hikayemiz</h2>
          <div className={styles.storyContent}>
            <p>
              <strong>2009 yılında</strong> Esenler'de küçük bir şubemizle halı yıkama işine başladık. 
              O günlerin mütevazı atölyesinde, sadece birkaç kişilik ekibimizle halıları tek tek, 
              özenle temizliyorduk. Her halı bizim için özeldi, her müşteri ailemizin bir parçasıydı.
            </p>
            <p>
              Zamanla müşterilerimizin artan güveni ve memnuniyeti sayesinde <strong>büyümeye</strong> başladık. 
              Daha fazla halıya, daha kaliteli hizmete duyulan ihtiyaç bizi harekete geçirdi. 
              Esenler'deki o küçük şubemizin sınırlarını aştık ve <strong>Bağcılar'a taşındık</strong>.
            </p>
            <p>
              Bağcılar'daki yeni yerimizde modern makinalarımızla, genişlemiş ekibimizle 
              <strong>daha da açıldık</strong>. Artık sadece halı değil, koltuk, yatak, perde ve 
              yorgan temizliği de yapıyorduk. Her geçen gün daha fazla aileeye ulaşıyor, 
              evlerinin temizliğinde güvenilir bir partner oluyorduk.
            </p>
            <p>
              <strong>Bugün</strong>, 15+ yıllık deneyimimizle İstanbul'un en güvenilir halı yıkama 
              markası haline geldik. Esenler'deki o küçük şubeden başlayan yolculuğumuz, 
              binlerce mutlu müşteriye ve onlarca bin temizlenen ürüne uzanıyor. 
              Her halı hala bizim için özel, her müşteri hala ailemizin bir parçası.
            </p>
          </div>
        </div>
      </motion.div>


    </div>
  );
};

export default About; 