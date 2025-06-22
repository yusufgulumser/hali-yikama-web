import React from 'react';
import styles from './Tips.module.css';
import { motion } from 'framer-motion';

const Tips = () => {
  const cleaningTips = [
    {
      id: 1,
      title: "Halı Renk Koruma",
      description: "Halınızı güneş ışığından koruyun. Doğrudan güneş ışığı halı renklerini %30 oranında soldurabilir.",
      icon: "🌞",
      category: "Koruma"
    },
    {
      id: 2,
      title: "Günlük Bakım",
      description: "Halınızı haftada 2-3 kez elektrikli süpürge ile temizleyin. Bu, kirlerin derinlemesine yerleşmesini %80 önler.",
      icon: "🏠",
      category: "Bakım"
    },
    {
      id: 3,
      title: "Leke Müdahalesi",
      description: "Taze lekeler soğuk su ile hemen müdahale edilmelidir. Sıcak su protein lekelerini kalıcı hale getirir.",
      icon: "💧",
      category: "Acil"
    },
    {
      id: 4,
      title: "Trafik Yolu Temizliği",
      description: "Yoğun geçiş alanlarında ayda 1 kez profesyonel temizlik yaptırın. Bu halının ömrünü 3 kat uzatır.",
      icon: "👥",
      category: "Bakım"
    },
    {
      id: 5,
      title: "Nem Kontrolü",
      description: "Halı altı nemi %60'ın üzerine çıkmasın. Aşırı nem küf ve mantar oluşumuna neden olur.",
      icon: "💨",
      category: "Sağlık"
    },
    {
      id: 6,
      title: "Yağ Lekesi Acil Müdahale",
      description: "Yağ lekelerine hemen tuz döküp 15 dakika bekletin. Tuz yağı %70 oranında emer.",
      icon: "🧂",
      category: "Acil"
    },
    {
      id: 7,
      title: "Koltuk Döşeme Koruma",
      description: "Koltukları direkt güneşten koruyun ve 6 ayda bir profesyonel temizlik yaptırın.",
      icon: "🛋️",
      category: "Koruma"
    },
    {
      id: 8,
      title: "Alerjen Kontrolü",
      description: "Ev tozu akarlarının %95'i düzenli profesyonel temizlikle ortadan kaldırılabilir.",
      icon: "🦠",
      category: "Sağlık"
    },
    {
      id: 9,
      title: "Doğru Kurutma",
      description: "Yıkanan halıları doğal hava akımında kurutun. Makine kurutma halı liflerine zarar verir.",
      icon: "🌬️",
      category: "Bakım"
    },
    {
      id: 10,
      title: "Pet Lekesi Temizliği",
      description: "Hayvan lekelerine sirke-su karışımı (1:3 oran) uygulayın. Amonyak kokusunu nötralize eder.",
      icon: "🐕",
      category: "Acil"
    },
    {
      id: 11,
      title: "Profesyonel Temizlik Zamanı",
      description: "Yılda 1-2 kez profesyonel temizlik, halının ömrünü 5-7 yıl uzatır ve sağlığınızı korur.",
      icon: "🧽",
      category: "Önemli"
    },
    {
      id: 12,
      title: "Perde Bakım İpucu",
      description: "Perdeleri 6 ayda bir yıkatın. Toz birikimi kalorifer verimini %20 düşürür ve alerjiye neden olur.",
      icon: "🪟",
      category: "Bakım"
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={styles.tipsContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1>Profesyonel Halı Bakım İpuçları</h1>
        <p>15+ yıllık deneyimimizden size özel, bilime dayalı halı ve döşeme bakım sırları</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.tipsGrid}
      >
        {cleaningTips.map((tip) => (
          <motion.div
            key={tip.id}
            variants={itemVariants}
            className={`${styles.tipCard} ${styles[tip.category?.toLowerCase()]}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.tipHeader}>
              <div className={styles.tipIcon}>{tip.icon}</div>
              <span className={styles.categoryBadge}>{tip.category}</span>
            </div>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className={styles.disclaimer}
      >
        <div className={styles.disclaimerCard}>
          <h3>🎯 Profesyonel Tavsiye</h3>
          <p>Bu ipuçları 15+ yıllık deneyimimize dayanmaktadır. Değerli halılarınız için düzenli profesyonel bakım en güvenli seçimdir.</p>
          <div className={styles.contactCall}>
            <span>💬 Sorunuz mu var?</span>
            <a href="tel:+905313842496">0531 384 2496</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tips; 