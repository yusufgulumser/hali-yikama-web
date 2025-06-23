import emailjs from '@emailjs/browser';

// EmailJS konfigürasyonu - GitHub Secrets'lardan okunur (production) veya .env.local'dan (development)
const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

// Konfigürasyon kontrolü
const validateConfig = () => {
  console.log('🔍 Validating EmailJS Config:', {
    serviceId: EMAILJS_CONFIG.serviceId,
    templateId: EMAILJS_CONFIG.templateId,
    publicKey: EMAILJS_CONFIG.publicKey,
    serviceIdLength: EMAILJS_CONFIG.serviceId?.length,
    templateIdLength: EMAILJS_CONFIG.templateId?.length,
    publicKeyLength: EMAILJS_CONFIG.publicKey?.length
  });

  const missing = [];
  if (!EMAILJS_CONFIG.serviceId) missing.push('REACT_APP_EMAILJS_SERVICE_ID');
  if (!EMAILJS_CONFIG.templateId) missing.push('REACT_APP_EMAILJS_TEMPLATE_ID');
  if (!EMAILJS_CONFIG.publicKey) missing.push('REACT_APP_EMAILJS_PUBLIC_KEY');
  
  if (missing.length > 0) {
    console.error('❌ EmailJS konfigürasyonu eksik! .env.local dosyasına şu değerleri ekleyin:');
    missing.forEach(key => console.error(`- ${key}`));
    return false;
  }
  return true;
};

// EmailJS'i başlat
export const initEmailJS = () => {
  if (!validateConfig()) {
    return false;
  }
  emailjs.init(EMAILJS_CONFIG.publicKey);
  console.log('✅ EmailJS başarıyla başlatıldı');
  return true;
};

// E-posta gönderme fonksiyonu
export const sendContactEmail = async (formData) => {
  // Konfigürasyon kontrolü
  if (!validateConfig()) {
    return { 
      success: false, 
      message: 'E-posta sistemi yapılandırılmamış. Lütfen sistem yöneticisiyle iletişime geçin.' 
    };
  }

  try {
    // Debug: Konfigürasyon bilgilerini logla
    console.log('🔧 EmailJS Config Debug:', {
      serviceId: EMAILJS_CONFIG.serviceId,
      templateId: EMAILJS_CONFIG.templateId,
      publicKey: EMAILJS_CONFIG.publicKey ? 'Mevcut' : 'Eksik'
    });

    // Template için parametreleri hazırla
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email || 'Belirtilmemiş',
      from_phone: formData.phone || 'Belirtilmemiş',
      service_type: formData.service === 'soru' ? 'Soru Sorma' : 'Halı Siparişi',
      message: formData.message || 'Mesaj belirtilmemiş',
      address: formData.address || 'Belirtilmemiş',
      to_email: 'gulumserhaliyikama@gmail.com',
      subject: formData.service === 'soru' 
        ? `Soru - ${formData.name}` 
        : `Halı Siparişi - ${formData.name}`
    };

    console.log('📧 E-posta gönderiliyor...', templateParams);

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('E-posta başarıyla gönderildi:', response);
    return { success: true, message: 'E-posta başarıyla gönderildi!' };

  } catch (error) {
    console.error('🚨 E-posta gönderim hatası:', error);
    console.error('🔍 Hata detayları:', {
      status: error.status,
      text: error.text,
      message: error.message,
      fullError: error
    });
    
    let userMessage = 'E-posta gönderilirken bir hata oluştu. ';
    
    if (error.status === 404) {
      userMessage += 'Service veya Template bulunamadı. Konfigürasyonu kontrol edin.';
    } else if (error.status === 401) {
      userMessage += 'Yetkilendirme hatası. Public Key\'i kontrol edin.';
    } else if (error.status === 400) {
      userMessage += 'Geçersiz parametreler. Template formatını kontrol edin.';
    } else {
      userMessage += 'Lütfen tekrar deneyin.';
    }
    
    return { 
      success: false, 
      message: userMessage 
    };
  }
};

// Test e-postası gönderme
export const sendTestEmail = async () => {
  try {
    const testParams = {
      from_name: 'Test Kullanıcı',
      from_email: 'test@example.com',
      from_phone: '05313842496',
      service_type: 'Test',
      message: 'Bu bir test mesajıdır.',
      address: 'Test Adresi',
      to_email: 'gulumserhaliyikama@gmail.com',
      subject: 'Test E-postası'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      testParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Test e-postası gönderildi:', response);
    return true;
  } catch (error) {
    console.error('Test e-postası hatası:', error);
    return false;
  }
}; 