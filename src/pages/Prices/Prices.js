import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Prices.module.css';

const Prices = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [calculator, setCalculator] = useState({
    items: [],
    currentItem: {
      service: '',
      size: '',
      unit: 'm²'
    }
  });
  const [totalPrice, setTotalPrice] = useState(0);

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

  const priceList = [
    {
      category: 'Halı Temizliği',
      icon: '🏠',
      services: [
        { name: 'Makina Halısı', price: '₺60', unit: 'm²', description: 'Standard makina halısı temizliği' },
        { name: 'Makina Yün Halı', price: '₺75', unit: 'm²', description: 'Makina dokuma yün halı temizliği' },
        { name: 'Yün Halı', price: '₺85', unit: 'm²', description: 'Yün halı özel bakım' },
        { name: 'El Halısı', price: '₺110', unit: 'm²', description: 'El dokuması halı özel temizliği' },
        { name: 'Bambu Halı', price: '₺75', unit: 'm²', description: 'Doğal bambu halı bakımı' },
        { name: 'Shaggy Halı', price: '₺80', unit: 'm²', description: 'Uzun tüylü shaggy halı temizliği' },
        { name: 'Akrilik Halı', price: '₺70', unit: 'm²', description: 'Sentetik akrilik halı temizliği' }
      ]
    },
    {
      category: 'Ev Eşyaları',
      icon: '🛋️',
      services: [
        { name: 'Koltuk Takımı', price: '₺300', unit: 'takım', description: '3+2+1 koltuk takımı temizliği' },
        { name: 'Tekli Koltuk', price: '₺120', unit: 'adet', description: 'Tekli koltuk/berjer temizliği' },
        { name: 'Stor Perde', price: '₺100', unit: 'm²', description: 'Tüm stor perde türleri' },
        { name: 'Yatak (Tek)', price: '₺150', unit: 'adet', description: 'Tek kişilik yatak temizliği' },
        { name: 'Yatak (Çift)', price: '₺200', unit: 'adet', description: 'Çift kişilik yatak temizliği' }
      ]
    },
    {
      category: 'Yorgan & Battaniye',
      icon: '🛌',
      services: [
        { name: 'Yorgan (Tek)', price: '₺130', unit: 'adet', description: 'Tek kişilik yorgan temizliği' },
        { name: 'Yorgan (Çift)', price: '₺160', unit: 'adet', description: 'Çift kişilik yorgan temizliği' },
        { name: 'Battaniye', price: '₺90', unit: 'adet', description: 'Standard battaniye temizliği' },
        { name: 'Yün Battaniye', price: '₺120', unit: 'adet', description: 'Yün battaniye özel bakım' },
        { name: 'Nevresim Takımı', price: '₺80', unit: 'takım', description: 'Nevresim takımı yıkama' }
      ]
    }
  ];



  const isVisible = (sectionId) => visibleSections.has(sectionId);

  const serviceOptions = [
    { value: 'makina-hali', label: 'Makina Halısı', price: 60, unit: 'm²' },
    { value: 'makina-yun-hali', label: 'Makina Yün Halı', price: 75, unit: 'm²' },
    { value: 'yun-hali', label: 'Yün Halı', price: 85, unit: 'm²' },
    { value: 'el-hali', label: 'El Halısı', price: 110, unit: 'm²' },
    { value: 'bambu-hali', label: 'Bambu Halı', price: 75, unit: 'm²' },
    { value: 'shaggy-hali', label: 'Shaggy Halı', price: 80, unit: 'm²' },
    { value: 'akrilik-hali', label: 'Akrilik Halı', price: 70, unit: 'm²' },
    { value: 'koltuk-temizligi', label: 'Koltuk Temizliği', price: 150, unit: 'adet' },
    { value: 'yatak-temizligi', label: 'Yatak Temizliği', price: 175, unit: 'adet' },
    { value: 'stor-perde-temizligi', label: 'Stor Perde Temizliği', price: 100, unit: 'm²' },
    { value: 'yorgan-temizligi', label: 'Yorgan Temizliği', price: 130, unit: 'adet' },
    { value: 'battaniye-temizligi', label: 'Battaniye Temizliği', price: 90, unit: 'adet' }
  ];

  const calculatePrice = () => {
    let total = 0;
    calculator.items.forEach(item => {
      const service = serviceOptions.find(s => s.value === item.service);
      if (service && item.size) {
        total += parseFloat(item.size) * service.price;
      }
    });
    setTotalPrice(total);
  };

  const handleServiceChange = (service) => {
    const selectedService = serviceOptions.find(s => s.value === service);
    setCalculator(prev => ({
      ...prev,
      currentItem: {
        service: service,
        size: '',
        unit: selectedService ? selectedService.unit : 'm²'
      }
    }));
  };

  const handleSizeChange = (size) => {
    setCalculator(prev => ({
      ...prev,
      currentItem: {
        ...prev.currentItem,
        size: size
      }
    }));
  };

  const addItem = () => {
    if (calculator.currentItem.service && calculator.currentItem.size) {
      const service = serviceOptions.find(s => s.value === calculator.currentItem.service);
      const newItem = {
        id: Date.now(),
        service: calculator.currentItem.service,
        serviceLabel: service.label,
        size: calculator.currentItem.size,
        unit: calculator.currentItem.unit,
        price: service.price,
        total: parseFloat(calculator.currentItem.size) * service.price
      };

      setCalculator(prev => ({
        ...prev,
        items: [...prev.items, newItem],
        currentItem: {
          service: '',
          size: '',
          unit: 'm²'
        }
      }));
    }
  };

  const removeItem = (id) => {
    setCalculator(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  const resetCalculator = () => {
    setCalculator({
      items: [],
      currentItem: {
        service: '',
        size: '',
        unit: 'm²'
      }
    });
    setTotalPrice(0);
  };

  return (
    <div className={styles.prices}>
      {/* Modern Hero Section */}
      <section className={styles.modernHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <span className={styles.heroBadge}>💰 Fiyat Listesi</span>
              <h1 className={styles.heroTitle}>Şeffaf Fiyatlandırma ile Kaliteli Hizmet</h1>
              <p className={styles.heroSubtitle}>
                15+ yıllık deneyimimizle halı, koltuk, yatak ve perdelerinize özel bakım sunuyoruz. Tüm fiyatlarımız KDV dahil, 
                gizli ücret yoktur. Ücretsiz keşif hizmeti ile kesin fiyat öğrenin.
              </p>
              <div className={styles.heroFeatures}>
                {[
                  { icon: '💯', title: 'Şeffaf Fiyat', desc: 'Gizli ücret yok' },
                  { icon: '🚚', title: 'Ücretsiz Taşıma', desc: 'Alma-teslim bedava' },
                  { icon: '🛡️', title: 'Hasar Garantisi', desc: '%100 güvence' },
                  { icon: '⚡', title: 'Hızlı Teslimat', desc: '48-72 saat' }
                ].map((feature, index) => (
                  <div key={index} className={styles.heroFeature} style={{ '--i': index }}>
                    <div className={styles.featureIconWrapper}>
                      <span className={styles.featureIcon}>{feature.icon}</span>
                    </div>
                    <div className={styles.featureContent}>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.priceHighlight}>
                <div className={styles.highlightHeader}>
                  <h3>Popüler Hizmetler</h3>
                  <span className={styles.highlightBadge}>En Çok Tercih Edilen</span>
                </div>
                <div className={styles.highlightServices}>
                  {[
                    { name: 'Halı Temizliği', price: '₺60', unit: 'm²', popular: true },
                    { name: 'Koltuk Temizliği', price: '₺150', unit: 'adet', popular: true },
                    { name: 'Yatak Temizliği', price: '₺200', unit: 'adet', popular: false },
                    { name: 'Perde Temizliği', price: '₺40', unit: 'm²', popular: false }
                  ].map((service, index) => (
                    <div key={index} className={`${styles.highlightService} ${service.popular ? styles.popular : ''}`}>
                      <div className={styles.serviceLeft}>
                        <span className={styles.serviceName}>{service.name}</span>
                        {service.popular && <span className={styles.popularTag}>⭐</span>}
                      </div>
                      <div className={styles.serviceRight}>
                        <span className={styles.servicePrice}>{service.price}</span>
                        <span className={styles.serviceUnit}>/{service.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.highlightNote}>
                  <small>✨ 30 m² üzeri siparişlerde %10 indirim!</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Price Tables Section */}
      <section 
        className={`${styles.modernPriceSection} section`}
        id="price-tables"
        data-animate
      >
        <div className="container">
          <div className={`${styles.sectionHeader} ${isVisible('price-tables') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.headerContent}>
              <span className={styles.headerBadge}>💎 Fiyat Tabloları</span>
              <h2>Detaylı Hizmet Fiyatları</h2>
              <p>Şeffaf ve uygun fiyatlarımızla kaliteli hizmet sunuyoruz. Tüm fiyatlar KDV dahildir.</p>
            </div>
          </div>
          
          <div className={`${styles.modernPriceGrid} ${isVisible('price-tables') ? 'fade-in visible' : 'fade-in'}`}>
            {priceList.map((category, index) => (
              <div 
                key={index} 
                className={`${styles.modernPriceTable} ${index === 0 ? styles.featured : ''}`}
                style={{ '--i': index }}
              >
                {index === 0 && <div className={styles.featuredBadge}>⭐ En Popüler</div>}
                
                <div className={styles.modernTableHeader}>
                  <div className={styles.headerIcon}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                  </div>
                  <h3 className={styles.categoryTitle}>{category.category}</h3>
                  <div className={styles.headerDecoration}></div>
                </div>
                
                <div className={styles.modernTableBody}>
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className={styles.modernPriceRow} style={{ '--j': serviceIndex }}>
                      <div className={styles.serviceDetails}>
                        <div className={styles.serviceHeader}>
                          <h4 className={styles.serviceName}>{service.name}</h4>
                          <div className={styles.priceTag}>
                            <span className={styles.price}>{service.price}</span>
                            <span className={styles.unit}>/{service.unit}</span>
                          </div>
                        </div>
                        <p className={styles.serviceDescription}>{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={styles.tableFooter}>
                  <Link to="/contact" className={styles.orderButton}>
                    <span>🚀</span>
                    <span>Sipariş Ver</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Modern Calculator Section */}
      <section 
        className={`${styles.modernCalculator} section section-alt`}
        id="calculator"
        data-animate
      >
        <div className="container">
          <div className={`${styles.calculatorHeader} ${isVisible('calculator') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.headerContent}>
              <span className={styles.headerBadge}>🧮 Fiyat Hesaplayıcı</span>
              <h2>Hizmetlerinizin Toplam Fiyatını Hesaplayın</h2>
              <p>İhtiyacınız olan hizmetleri seçin, miktarları girin ve anında toplam fiyatı öğrenin. Kolay ve hızlı!</p>
            </div>
          </div>
          
          <div className={`${styles.modernCalculatorContent} ${isVisible('calculator') ? 'fade-in visible' : 'fade-in'}`}>
            <div className={styles.calculatorLeft}>
              <div className={styles.calculatorCard}>
                <div className={styles.cardHeader}>
                  <h3>Fiyat Hesaplama</h3>
                  <p>Hizmet türünü seçin, miktarını girin ve listeye ekleyin</p>
                </div>
              
              {/* Hizmet Ekleme Formu */}
              <div className={styles.addServiceForm}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="serviceSelect">Hizmet Türü</label>
                    <select
                      id="serviceSelect"
                      value={calculator.currentItem.service}
                      onChange={(e) => handleServiceChange(e.target.value)}
                    >
                      <option value="">Hizmet seçiniz...</option>
                      {serviceOptions.map(service => (
                        <option key={service.value} value={service.value}>
                          {service.label} (₺{service.price}/{service.unit})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="sizeInput">
                      Miktar ({calculator.currentItem.unit})
                    </label>
                    <input
                      type="number"
                      id="sizeInput"
                      value={calculator.currentItem.size}
                      onChange={(e) => handleSizeChange(e.target.value)}
                      placeholder={`Örn: ${calculator.currentItem.unit === 'adet' ? '2' : '12'}`}
                      min="0"
                      step={calculator.currentItem.unit === 'adet' ? '1' : '0.1'}
                      disabled={!calculator.currentItem.service}
                    />
                  </div>
                  
                  <button 
                    onClick={addItem}
                    className={`${styles.addButton} btn-primary`}
                    disabled={!calculator.currentItem.service || !calculator.currentItem.size}
                  >
                    <i className="fas fa-plus"></i> Ekle
                  </button>
                </div>
              </div>

              {/* Eklenen Hizmetler Listesi */}
              {calculator.items.length > 0 && (
                <div className={styles.itemsList}>
                  <h3>Eklenen Hizmetler</h3>
                  {calculator.items.map((item, index) => (
                    <div key={item.id} className={styles.itemCard} style={{ '--index': index }}>
                      <div className={styles.itemInfo}>
                        <span className={styles.itemService}>{item.serviceLabel}</span>
                        <span className={styles.itemDetails}>
                          {item.size} {item.unit} × ₺{item.price} = ₺{item.total.toFixed(0)}
                        </span>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className={styles.removeButton}
                        aria-label="Kaldır"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              <div className={styles.calculatorActions}>
                <button 
                  onClick={calculatePrice}
                  className="btn-primary"
                  disabled={calculator.items.length === 0}
                >
                  Toplam Fiyatı Hesapla
                </button>
                <button 
                  onClick={resetCalculator}
                  className="btn-secondary"
                >
                  Tümünü Temizle
                </button>
              </div>
              
              {totalPrice > 0 && (
                <div className={styles.priceResult}>
                  <h3>Toplam Tahmini Fiyat</h3>
                  <div className={styles.totalPrice}>₺{totalPrice.toFixed(0)}</div>
                  <p className={styles.priceNote}>
                    *Bu tahmini bir fiyattır. Kesin fiyat için ürününüzün görülmesi gerekmektedir.
                  </p>
                </div>
              )}

              <div className={styles.helpCard}>
                <div className={styles.helpHeader}>
                  <h3>🤔 Halı Türünüzü Bilmiyor musunuz?</h3>
                  <p>Halı türünü belirlemekte zorlanıyorsanız bize WhatsApp'tan fotoğraf gönderin!</p>
                </div>
                <div className={styles.helpActions}>
                  <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                    <span>📷</span>
                    <span>WhatsApp'tan Fotoğraf Gönder</span>
                  </a>
                  <p className={styles.helpNote}>
                    <small>💡 Uzmanlarımız halı türünüzü belirleyip size en uygun fiyatı verecek</small>
                  </p>
                </div>
              </div>
              </div>
            </div>
            
            <div className={styles.calculatorRight}>
              <div className={styles.contactCard}>
                <div className={styles.contactHeader}>
                  <h3>💬 Destek Hattı</h3>
                  <p>Uzmanlarımızla konuşun</p>
                </div>
                <div className={styles.contactActions}>
                  <Link to="/contact" className={styles.primaryContactBtn}>
                    <span>📋</span>
                    <span>İletişim Formu</span>
                    <span className={styles.btnArrow}>→</span>
                  </Link>
                  <a href="tel:+905551234567" className={styles.phoneBtn}>
                    <span>📞</span>
                    <span>0555 123 45 67</span>
                  </a>
                </div>
                <div className={styles.contactNote}>
                  <small>🕒 7/24 müşteri hizmetleri</small>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.cardHeader}>
                  <h3>🌟 Hizmet Garantilerimiz</h3>
                  <p>Tüm hizmetlerimizde dahil olan avantajlar</p>
                </div>
                
                <div className={styles.guaranteesList}>
                  {[
                    { icon: '🦠', title: 'Antibakteriyel İşlem', desc: 'Hijyenik temizlik garantisi' },
                    { icon: '🛡️', title: '%100 Hasar Garantisi', desc: 'Hasar durumunda tazminat' },
                    { icon: '⚡', title: '48-72 Saat Teslimat', desc: 'Hızlı ve güvenilir servis' },
                    { icon: '👨‍💼', title: 'Uzman Ekip', desc: '15+ yıl deneyimli personel' }
                  ].map((guarantee, index) => (
                    <div key={index} className={styles.guaranteeItem} style={{ '--i': index }}>
                      <div className={styles.guaranteeIcon}>{guarantee.icon}</div>
                      <div className={styles.guaranteeContent}>
                        <h4>{guarantee.title}</h4>
                        <p>{guarantee.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
};

export default Prices; 