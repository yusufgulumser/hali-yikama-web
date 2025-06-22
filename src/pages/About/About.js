import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: 'Mehmet Yıldız',
      position: 'Kurucu & Genel Müdür',
      experience: '15+ Yıl Deneyim',
      specialty: 'Halı Yıkama Uzmanı',
      image: '👨‍💼',
      description: 'Tekstil mühendisliği geçmişi ile sektörde öncü olmaya devam ediyor.'
    },
    {
      name: 'Fatma Demir',
      position: 'Operasyon Müdürü',
      experience: '12+ Yıl Deneyim',
      specialty: 'Kalite Kontrol',
      image: '👩‍💼',
      description: 'Kalite standartlarımızın yüksek tutulmasından sorumlu deneyimli uzman.'
    },
    {
      name: 'Ali Kaya',
      position: 'Teknik Uzman',
      experience: '10+ Yıl Deneyim',
      specialty: 'Leke Uzmanı',
      image: '👨‍🔧',
      description: 'En zor lekelerin çıkarılmasında uzmanlaşmış teknik personel.'
    },
    {
      name: 'Zeynep Şahin',
      position: 'Müşteri Hizmetleri',
      experience: '8+ Yıl Deneyim',
      specialty: 'Müşteri İlişkileri',
      image: '👩‍💻',
      description: 'Müşteri memnuniyetinin sağlanmasında öncü rol oynayan deneyimli personel.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Kalite',
      description: 'Her işimizde en yüksek kalite standartlarını uygularız. Müşteri memnuniyeti bizim önceliğimizdir.'
    },
    {
      icon: '🤝',
      title: 'Güven',
      description: 'Şeffaf fiyatlandırma ve dürüst yaklaşımımızla müşterilerimizin güvenini kazanıyoruz.'
    },
    {
      icon: '🌿',
      title: 'Çevre Bilinci',
      description: 'Ekolojik temizlik ürünleri kullanarak çevreye saygılı hizmet sunuyoruz.'
    },
    {
      icon: '⚡',
      title: 'Hız',
      description: 'Zamanınızı değerli buluyoruz. Hızlı ve etkili çözümler sunmaya odaklanıyoruz.'
    },
    {
      icon: '🔬',
      title: 'İnovasyon',
      description: 'Sektördeki en yeni teknolojileri takip ederek hizmet kalitemizi sürekli geliştiriyoruz.'
    },
    {
      icon: '💯',
      title: 'Mükemmellik',
      description: 'Her projede mükemmellik hedefiyle çalışır, sonuca odaklanırız.'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Kuruluş',
      description: 'İstanbul\'da küçük bir atölye ile halı yıkama işine başladık.'
    },
    {
      year: '2012',
      title: 'İlk Büyük Yatırım',
      description: 'Modern makina parkurumuzu oluşturduk ve kapasitemizi artırdık.'
    },
    {
      year: '2015',
      title: 'Şube Açılışı',
      description: 'İkinci şubemizi açarak hizmet alanımızı genişlettik.'
    },
    {
      year: '2018',
      title: 'Teknoloji Yenileme',
      description: 'Çevre dostu teknolojilere yatırım yaparak ekolojik hizmet başlattık.'
    },
    {
      year: '2021',
      title: 'Online Platform',
      description: 'Dijital dönüşümle online sipariş sistemini hayata geçirdik.'
    },
    {
      year: '2024',
      title: 'Bugün',
      description: '15+ yıllık deneyimle İstanbul\'un güvenilir halı yıkama markası olduk.'
    }
  ];

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Gülümser Hakkında</h1>
            <p className={styles.heroSubtitle}>
              15+ yıllık deneyimimiz ile İstanbul'un en güvenilir halı yıkama hizmeti. 
              Ailenizin sağlığı için temizlik standardında hiçbir ödün vermiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section 
        className={`${styles.story} section`}
        id="company-story"
        data-animate
      >
        <div className="container">
          <div className={`${styles.storyContent} ${isVisible('company-story') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.storyText}>
              <h2>Hikayemiz</h2>
              <p>
                2009 yılında, halı, koltuk, yatak ve perde temizliği konusunda uzmanlaşmış bir ekip olarak yola çıktık. 
                İstanbul'da küçük bir atölye ile başladığımız bu yolculukta, müşterilerimizin güveni 
                ve memnuniyeti bizim en büyük motivasyonumuz oldu.
              </p>
              <p>
                Yıllar içinde edindiğimiz deneyim ve sürekli yenilenen teknolojik altyapımızla, 
                halı yıkama sektöründe öncü konuma geldik. Bugün binlerce mutlu müşterimizle, 
                İstanbul'un en güvenilir halı yıkama markası olmaya devam ediyoruz.
              </p>
              <p>
                Çevre dostu ürünler kullanarak, hem evinizin hem de doğanın sağlığını korumayı 
                ilke edindik. Modern ekipmanlarımız ve uzman kadromuzla, her türlü tekstil 
                ürününe özel bakım sağlıyoruz.
              </p>
            </div>
            <div className={styles.storyStats}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>🏆</div>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Yıl Deneyim</span>
                <span className={styles.statDescription}>Sektörde köklü deneyim</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>😊</div>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statLabel}>Mutlu Müşteri</span>
                <span className={styles.statDescription}>Güvenilir hizmet</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>🧽</div>
                <span className={styles.statNumber}>100K+</span>
                <span className={styles.statLabel}>Temizlenen Ürün</span>
                <span className={styles.statDescription}>Başarıyla tamamlanan</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>⭐</div>
                <span className={styles.statNumber}>%99.8</span>
                <span className={styles.statLabel}>Memnuniyet Oranı</span>
                <span className={styles.statDescription}>Kalite garantisi</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>⏰</div>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Destek Hattı</span>
                <span className={styles.statDescription}>Kesintisiz hizmet</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>🌿</div>
                <span className={styles.statNumber}>%100</span>
                <span className={styles.statLabel}>Ekolojik Ürün</span>
                <span className={styles.statDescription}>Çevre dostu temizlik</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        className={`${styles.timeline} section section-alt`}
        id="timeline"
        data-animate
      >
        <div className="container">
          <div className={`text-center mb-xl ${isVisible('timeline') ? 'fade-in visible' : 'fade-in'}`}>
            <h2>Yolculuğumuz</h2>
            <p className="text-secondary">
              15 yıllık serüvenimizde geçirdiğimiz önemli aşamalar
            </p>
          </div>
          
          <div className={`${styles.timelineContainer} ${isVisible('timeline') ? 'fade-in visible' : 'fade-in'}`}>
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={styles.timelineItem}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        className={`${styles.team} section`}
        id="team"
        data-animate
      >
        <div className="container">
          <div className={`text-center mb-xl ${isVisible('team') ? 'fade-in visible' : 'fade-in'}`}>
            <h2>Uzman Ekibimiz</h2>
            <p className="text-secondary">
              Deneyimli ve uzman kadromuzla hizmetinizdeyiz
            </p>
          </div>
          
          <div className={`${styles.teamGrid} ${isVisible('team') ? 'fade-in visible' : 'fade-in'}`}>
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`${styles.teamCard} card`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.memberImage}>
                  <span className={styles.memberAvatar}>{member.image}</span>
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <h4>{member.position}</h4>
                  <p className={styles.memberExperience}>{member.experience}</p>
                  <p className={styles.memberSpecialty}>{member.specialty}</p>
                  <p className={styles.memberDescription}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        className={`${styles.values} section section-alt`}
        id="values"
        data-animate
      >
        <div className="container">
          <div className={`text-center mb-xl ${isVisible('values') ? 'fade-in visible' : 'fade-in'}`}>
            <h2>Değerlerimiz</h2>
            <p className="text-secondary">
              İş yapış şeklimizi belirleyen temel değerlerimiz
            </p>
          </div>
          
          <div className={`${styles.valuesGrid} ${isVisible('values') ? 'fade-in visible' : 'fade-in'}`}>
            {values.map((value, index) => (
              <div 
                key={index} 
                className={styles.valueCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default About; 