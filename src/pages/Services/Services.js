import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
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

  const services = [
    {
      id: 1,
      title: 'Halı Temizliği',
      subtitle: 'Carpet Cleaning',
      description: 'Halılarınızı derinlemesine temizleyerek yenileyin. Halılarınızın her santimetresini titizlikle temizleyerek kir, leke ve alerjenleri ortadan kaldırıyoruz. Halılarınızın tazeliğini, canlılığını geri kazanmasını sağlıyoruz.',
      icon: '🏠',
      image: '/images/carpet-cleaning.jpeg',
      features: [
        'Makina halısı temizliği',
        'El dokuma halı bakımı',
        'Antika halı restorasyonu',
        'Leke çıkarma işlemi',
        'Antibakteriyel uygulama',
        'Renk canlandırma'
      ],
      process: [
        'Halı türü ve leke analizi',
        'Ön temizlik ve toz alma',
        'Özel deterjan uygulaması',
        'Makinalı derin temizlik',
        'Durulama ve kurutma',
        'Kalite kontrol ve teslimat'
      ]
    },
    {
      id: 2,
      title: 'Koltuk Temizliği',
      subtitle: 'Sofa Cleaning',
      description: 'Koltuklarınızı hayata döndürün. Uzmanlarımız, döşemelerinizdeki kir, leke ve kokuları gidermek için nazik ama etkili yöntemler kullanır. Koltuklarınızın sadece temiz olmasını değil, aynı zamanda orijinal yumuşaklık ve görünümüne geri dönmesini sağlıyoruz.',
      icon: '🛋️',
      image: '/images/sofa-cleaning.jpg',
      features: [
        'Kumaş koltuk temizliği',
        'Deri koltuk bakımı',
        'Süet döşeme temizliği',
        'Leke ve koku giderme',
        'Antimikrobiyal işlem',
        'Kumaş koruyucu uygulama'
      ],
      process: [
        'Döşeme türü belirleme',
        'Ön vakumlama işlemi',
        'Leke ön işlemi',
        'Nemli temizlik',
        'Dezenfektan uygulama',
        'Hızlı kurutma'
      ]
    },
    {
      id: 3,
      title: 'Yatak Temizliği',
      subtitle: 'Mattress Cleaning',
      description: 'Rahat bir uyku için yataklarınızı temizleyin. Yataklarınızdaki toz akarlarını, alerjenleri ve lekeleri derinlemesine temizleyerek hijyeni artırıyor ve yatağınızın ömrünü uzatıyoruz. Hizmetimiz, daha temiz ve sağlıklı bir uyku ortamı sağlar.',
      icon: '🛏️',
      image: '/images/mattress-cleaning.jpg',
      features: [
        'Yatak temizliği',
        'Şilte hijyenizasyonu',
        'Akar öldürme işlemi',
        'Koku giderme',
        'Allerjen temizliği',
        'UV sterilizasyon'
      ],
      process: [
        'Yatak yüzeyi kontrolü',
        'Vakumlama işlemi',
        'Leke çıkarma',
        'Steam temizlik',
        'Antibakteriyel uygulama',
        'Doğal kurutma'
      ]
    },
    {
      id: 4,
      title: 'Perde Temizliği',
      subtitle: 'Curtain Cleaning',
      description: 'Perdelerinizi yenileyin. Perdelerinizi özenle temizleyerek toz, kir ve lekeleri gideriyor, orijinal parlaklıklarını ve güzelliklerini geri kazandırıyoruz. Bu hizmet, evinizin temizliğini korumaya yardımcı olur ve pencere kaplamalarınızın ömrünü uzatır.',
      icon: '🪟',
      image: '/images/curtain-cleaning.jpg',
      features: [
        'Tül perde temizliği',
        'Kadife perde bakımı',
        'Stor perde temizliği',
        'Panel perde yıkama',
        'Jaluzi temizliği',
        'Perde ütüleme'
      ],
      process: [
        'Perde söküm işlemi',
        'Kumaş analizi',
        'Uygun yıkama yöntemi',
        'Özel deterjan seçimi',
        'Nazik yıkama',
        'Takma ve düzenleme'
      ]
    },
    {
      id: 5,
      title: 'Yorgan Temizliği',
      subtitle: 'Duvet Cleaning',
      description: 'Yorganlarınızı tertemiz tutun. Yorganlarınızı nazikçe temizleyip tazeleyerek kir, leke ve alerjenleri gideriyoruz. Hizmetimiz, yorganlarınızın yumuşak, konforlu ve hijyenik kalmasını sağlar, size dinlendirici ve temiz bir uyku deneyimi sunar.',
      icon: '🛌',
      image: '/images/duvet-cleaning.jpg',
      features: [
        'Kaz tüyü yorgan temizliği',
        'Elyaf yorgan yıkama',
        'Yün yorgan bakımı',
        'Nevresim temizliği',
        'Yorgan ütüleme',
        'Hijyenizasyon'
      ],
      process: [
        'Yorgan türü kontrolü',
        'Ön kontrol ve etiket okuma',
        'Uygun sıcaklık ayarı',
        'Özel program yıkama',
        'Çift durulama',
        'Doğal kurutma'
      ]
    },
    {
      id: 6,
      title: 'Battaniye Temizliği',
      subtitle: 'Blanket Cleaning',
      description: 'Battaniyelerinizin ömrünü uzatın. Battaniyelerinizi titizlikle temizleyerek toz, kir ve lekeleri gideriyoruz, tazeliklerini ve kabarıklıklarını koruyoruz. Hizmetimiz, battaniyelerinizin kalitesini korur ve onları yıllarca davetkar kılar.',
      icon: '🧸',
      image: '/images/blanket-cleaning.jpg',
      features: [
        'Yün battaniye temizliği',
        'Pamuk battaniye yıkama',
        'Polar örtü temizliği',
        'Bebek battaniyesi bakımı',
        'Yumuşatıcı uygulama',
        'Statik önleyici işlem'
      ],
      process: [
        'Malzeme türü belirleme',
        'Ön leke kontrolü',
        'Uygun program seçimi',
        'Nazik yıkama',
        'Yumuşatıcı uygulaması',
        'Düzgün kurutma'
      ]
    }
  ];

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className={styles.services}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Profesyonel Temizlik Hizmetlerimiz</h1>
            <p className={styles.heroSubtitle}>
              Halı, koltuk, yatak ve perdeleriniz için kapsamlı ve güvenilir temizlik çözümleri sunuyoruz. 
              10+ yıllık deneyimimizle kaliteli hizmet garantisi veriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section 
        className={`${styles.servicesSection} section`}
        id="services-grid"
        data-animate
      >
        <div className="container">
          <div className={`${styles.servicesGrid} ${isVisible('services-grid') ? 'fade-in visible' : 'fade-in'}`}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`${styles.serviceCard} card`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.serviceHeader}>
                  <div 
                    className={styles.serviceImage}
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className={styles.serviceImageOverlay}>
                      <span className={styles.serviceIcon}>{service.icon}</span>
                    </div>
                  </div>
                  <div className={styles.serviceTitle}>
                    <h3>{service.title}</h3>
                    <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                  </div>
                </div>
                
                <div className={styles.serviceContent}>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  <div className={styles.serviceFeatures}>
                    <h4>Hizmet Kapsamı:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx} style={{ '--i': idx }}>
                          <span className={styles.checkIcon} style={{ '--i': idx }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={styles.serviceFooter}>
                  <div className={styles.actionButtons}>
                    <Link to="/contact" className={styles.primaryAction}>
                      <span>🚀</span>
                      <span>Sipariş Verin</span>
                    </Link>
                    <Link to="/prices" className={styles.secondaryAction}>
                      <span>💰</span>
                      <span>Fiyat Listesi</span>
                    </Link>
                  </div>
                  <div className={styles.servicePrice}>
                    <span className={styles.priceLabel}>Başlangıç</span>
                    <span className={styles.priceValue}>
                      {service.id === 1 ? '₺60/m²' : 
                       service.id === 2 ? '₺150/adet' : 
                       service.id === 3 ? '₺200/adet' : 
                       service.id === 4 ? '₺40/m²' : 
                       service.id === 5 ? '₺130/adet' : '₺90/adet'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        className={`${styles.whyChooseUs} section section-alt`}
        id="why-choose-us"
        data-animate
      >
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('why-choose-us') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.headerContent}>
              <span className={styles.headerBadge}>✨ Gülümser Halı Yıkama Avantajları</span>
              <h2>Neden Bizi Tercih Etmelisiniz?</h2>
                              <p>15+ yıllık deneyimimiz ve modern teknolojimizle halı, koltuk, yatak ve perdelerinize özel bakım sunuyoruz</p>
            </div>
            <div className={styles.headerStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statLabel}>Mutlu Müşteri</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>%99.8</span>
                <span className={styles.statLabel}>Memnuniyet</span>
              </div>
            </div>
          </div>
          
          <div className={`${styles.reasonsGrid} ${isVisible('why-choose-us') ? 'fade-in visible' : 'fade-in'}`}>
            {[
              { icon: '🏆', title: '15+ Yıl Deneyim', desc: 'Sektördeki uzun yıllarımızla kazandığımız deneyimi hizmetinizde', badge: 'Uzman Ekip' },
              { icon: '🚚', title: 'Ücretsiz Alma-Teslim', desc: 'Evinizden alıp temizlik sonrası geri getiriyoruz', badge: 'Bedava Hizmet' },
              { icon: '🛡️', title: 'Hasar Garantisi', desc: 'Tüm işlemlerimizde %100 hasar garantisi sunuyoruz', badge: '%100 Güvence' },
              { icon: '⚡', title: 'Hızlı Teslimat', desc: '48-72 saat içinde temizlenmiş ürünlerinizi teslim ediyoruz', badge: '2-3 Gün' },
              { icon: '🌿', title: 'Ekolojik Ürünler', desc: 'Çevre ve sağlık dostu temizlik malzemeleri kullanıyoruz', badge: 'Çevre Dostu' },
              { icon: '💯', title: 'Memnuniyet Garantisi', desc: '%99.8 müşteri memnuniyeti ile hizmet veriyoruz', badge: 'Kalite Taahhüdü' }
            ].map((reason, index) => (
              <div key={index} className={styles.reasonCard} style={{ '--i': index }}>
                <div className={styles.reasonHeader}>
                  <div className={styles.reasonIconWrapper}>
                    <span className={styles.reasonIcon}>{reason.icon}</span>
                  </div>
                  <span className={styles.reasonBadge}>{reason.badge}</span>
                </div>
                <div className={styles.reasonContent}>
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Services; 