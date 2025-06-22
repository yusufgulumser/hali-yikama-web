import React from 'react';
import styles from './Tips.module.css';
import { motion } from 'framer-motion';

const Tips = () => {
  const cleaningTips = [
    {
      id: 1,
      title: "Makyaj Lekesi",
      description: "Temiz bir bezi asetona batırıp lekeyi nazikçe silin. İşlem sonrası mutlaka havalandırın.",
      icon: "💄"
    },
    {
      id: 2,
      title: "Çay Lekesi",
      description: "Ilık su ve karbonat karışımını lekenin üzerine uygulayın. 10 dakika bekletip durulayın.",
      icon: "🫖"
    },
    {
      id: 3,
      title: "Yağ Lekesi",
      description: "Bulaşık deterjanı ve ılık su karışımıyla nazikçe silin. Kuru bir bezle tamponlayın.",
      icon: "🍳"
    },
    {
      id: 4,
      title: "Mürekkep Lekesi",
      description: "Saç spreyi sıkıp 1 dakika bekleyin, ardından nemli bezle silin.",
      icon: "✒️"
    },
    {
      id: 5,
      title: "Çikolata Lekesi",
      description: "Soğuk suyla yıkayıp, ardından oksijenli su uygulayın.",
      icon: "🍫"
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
        <h1>Puf Noktalar</h1>
        <p>Evde leke çıkarma konusunda işinize yarayacak pratik bilgiler</p>
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
            className={styles.tipCard}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.tipIcon}>{tip.icon}</div>
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
        <p>Not: Bu öneriler genel bilgi amaçlıdır. Hassas kumaşlarda mutlaka profesyonel yardım alınmalıdır.</p>
      </motion.div>
    </div>
  );
};

export default Tips; 