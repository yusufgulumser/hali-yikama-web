import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Hero Slider Data
  const heroSlides = [
    {
      id: 1,
      title: "Gülümser Halı Yıkama",
      subtitle: "Profesyonel Temizlik Hizmeti",
      description: "15+ yıllık deneyimle İstanbul'un en güvenilir halı yıkama markası. Modern teknoloji ve uzman ekibimizle halı, koltuk, yatak ve perdelerinizi en temiz haline getiriyoruz.",
      image: `${process.env.PUBLIC_URL}/images/carpet-cleaning.jpeg`,
      cta: "Hemen Teklif Alın"
    },
    {
      id: 2,
      title: "Premium Koltuk Temizliği",
      subtitle: "Koltuklarınızı Yenileyin",
      description: "Özel temizlik teknikleriyle koltuklarınızı ilk günkü gibi tertemiz yapıyoruz. Kumaş türüne özel bakım ve koruma sağlıyoruz.",
      image: `${process.env.PUBLIC_URL}/images/sofa-cleaning.jpg`,
      cta: "Keşfet"
    },
    {
      id: 3,
      title: "Hijyenik Yatak Temizliği",
      subtitle: "Sağlıklı Uyku İçin",
      description: "Yataklarınızdaki toz akarları, bakteriler ve alerjenleri tamamen temizliyoruz. UV sterilizasyon ile %99.9 hijyen garantisi.",
      image: `${process.env.PUBLIC_URL}/images/mattress-cleaning.jpg`,
      cta: "Sipariş Ver"
    },
    {
      id: 4,
      title: "Profesyonel Perde Bakımı",
      subtitle: "Evinizin Zarafeti",
      description: "Tüm perde türleri için özel bakım hizmeti. Perdelerinizin parlaklığını ve güzelliğini koruyarak ömrünü uzatıyoruz.",
      image: `${process.env.PUBLIC_URL}/images/curtain-cleaning.jpg`,
      cta: "İletişim"
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const services = [
    {
      id: 1,
      title: 'Halı Temizliği',
      description: 'Halılarınızı derinlemesine temizleyerek yenileyin',
      icon: '🏠',
      image: `${process.env.PUBLIC_URL}/images/carpet-cleaning.jpeg`
    },
    {
      id: 2,
      title: 'Koltuk Temizliği',
      description: 'Koltuklarınızı hayata döndürün',
      icon: '🛋️',
      image: `${process.env.PUBLIC_URL}/images/sofa-cleaning.jpg`
    },
    {
      id: 3,
      title: 'Yatak Temizliği',
      description: 'Rahat bir uyku için yataklarınızı temizleyin',
      icon: '🛏️',
      image: `${process.env.PUBLIC_URL}/images/mattress-cleaning.jpg`
    },
    {
      id: 4,
      title: 'Perde Temizliği',
      description: 'Perdelerinizi yenileyin',
      icon: '🪟',
      image: `${process.env.PUBLIC_URL}/images/curtain-cleaning.jpg`
    },
    {
      id: 5,
      title: 'Yorgan Temizliği',
      description: 'Yorganlarınızı tertemiz tutun',
      icon: '🛌',
      image: `${process.env.PUBLIC_URL}/images/duvet-cleaning.jpg`
    },
    {
      id: 6,
      title: 'Battaniye Temizliği',
      description: 'Battaniyelerinizin ömrünü uzatın',
      icon: '🧸',
      image: `${process.env.PUBLIC_URL}/images/blanket-cleaning.jpg`
    }
  ];

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className={styles.home}>
      {/* Hero Slider Section */}
      <section className={styles.heroSlider}>
        <div className={styles.sliderContainer}>
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.slideOverlay}></div>
              <div className="container">
                <div className={styles.slideContent}>
                  <h1 className={styles.slideTitle}>{slide.title}</h1>
                  <h2 className={styles.slideSubtitle}>{slide.subtitle}</h2>
                  <p className={styles.slideDescription}>{slide.description}</p>
                  <div className={styles.slideActions}>
                    <Link to="/contact" className="btn-primary">
                      {slide.cta}
                    </Link>
                    <Link to="/services" className="btn-secondary">
                      Tüm Hizmetler
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slider Controls */}
          <button className={styles.sliderArrow} onClick={prevSlide} aria-label="Önceki">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className={`${styles.sliderArrow} ${styles.sliderArrowRight}`} onClick={nextSlide} aria-label="Sonraki">
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Slider Dots */}
          <div className={styles.sliderDots}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Showcase Section */}
      <section 
        className={`${styles.companyShowcase} section`}
        id="company-showcase"
        data-animate
      >
        <div className="container">
          <div className={`text-center mb-xl ${isVisible('company-showcase') ? 'fade-in visible' : 'fade-in'}`}>
            <h2>Gülümser Halı Yıkama</h2>
            <p className="text-secondary">
              15+ yıllık deneyimimiz ve modern teknolojimizle İstanbul'un güvenilir halı yıkama markası
            </p>
          </div>
          
          <div className={`${styles.showcaseStats} ${isVisible('company-showcase') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fas fa-award"></i>
              </div>
              <div className={styles.statContent}>
                <h3>15+</h3>
                <p>Yıllık Deneyim</p>
                <span>Sektördeki uzun deneyimimiz</span>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fas fa-users"></i>
              </div>
              <div className={styles.statContent}>
                <h3>50K+</h3>
                <p>Mutlu Müşteri</p>
                <span>Memnun müşteri sayımız</span>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className={styles.statContent}>
                <h3>%99.8</h3>
                <p>Memnuniyet Oranı</p>
                <span>Kalite garantimiz</span>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <div className={styles.statContent}>
                <h3>24/7</h3>
                <p>Destek Hattı</p>
                <span>Kesintisiz hizmet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className={`${styles.features} section`}
        id="features"
        data-animate
      >
        <div className="container">
          <div className={`${styles.featuresContent} ${isVisible('features') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🚚</span>
                <h3>Ücretsiz Taşıma</h3>
                <p>Evinizden alma ve teslim hizmeti</p>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>⚡</span>
                <h3>Hızlı Teslimat</h3>
                <p>48 saat içinde temizlik ve teslimat</p>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🌿</span>
                <h3>Ekolojik Ürünler</h3>
                <p>Çevre dostu temizlik malzemeleri</p>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>💯</span>
                <h3>Garanti</h3>
                <p>%100 müşteri memnuniyet garantisi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section 
        className={`${styles.servicesPreview} section section-alt`}
        id="services-preview"
        data-animate
      >
        <div className="container">
          <div className={`text-center mb-xl ${isVisible('services-preview') ? 'fade-in visible' : 'fade-in'}`}>
            <h2>Hizmetlerimiz</h2>
            <p className="text-secondary">
              Halı, koltuk, yatak ve perdeleriniz için kapsamlı temizlik çözümleri sunuyoruz
            </p>
          </div>
          
          <div className={`${styles.servicesGrid} ${isVisible('services-preview') ? 'fade-in visible' : 'fade-in'}`}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`${styles.serviceCard} card`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className={styles.serviceImage}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className={styles.serviceImageOverlay}>
                    <span className={styles.serviceIcon}>
                      {service.icon}
                    </span>
                  </div>
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`${styles.servicesCallToAction} ${isVisible('services-preview') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.ctaContent}>
              <h3>Daha Fazla Hizmet Arıyorsunuz?</h3>
              <p>15+ yıllık deneyimimizle sunduğumuz tüm profesyonel temizlik hizmetlerini keşfedin</p>
              <Link to="/services" className={styles.modernCta}>
                <span>Tüm Hizmetlerimizi Keşfedin</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;