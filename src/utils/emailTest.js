// EmailJS test fonksiyonları
import { sendContactEmail, initEmailJS } from '../services/emailService';

export const testEmailConfiguration = () => {
  console.log('🧪 EmailJS Konfigürasyon Testi Başlatılıyor...');
  
  // Environment variables kontrolü
  const config = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    contactEmail: process.env.REACT_APP_CONTACT_EMAIL
  };
  
  console.log('📋 Konfigürasyon Durumu:');
  console.log('Service ID:', config.serviceId ? '✅ Tanımlı' : '❌ Eksik');
  console.log('Template ID:', config.templateId ? '✅ Tanımlı' : '❌ Eksik');
  console.log('Public Key:', config.publicKey ? '✅ Tanımlı' : '❌ Eksik');
  console.log('Contact Email:', config.contactEmail ? '✅ Tanımlı' : '❌ Eksik');
  
  // EmailJS başlatma testi
  const initResult = initEmailJS();
  console.log('EmailJS Init:', initResult ? '✅ Başarılı' : '❌ Başarısız');
  
  return {
    config,
    initResult,
    allConfigured: !!(config.serviceId && config.templateId && config.publicKey)
  };
};

export const sendTestEmail = async () => {
  console.log('📧 Test E-postası Gönderiliyor...');
  
  const testData = {
    name: 'Test Kullanıcı',
    email: 'test@example.com',
    phone: '05313842496',
    service: 'soru',
    message: 'Bu bir test mesajıdır. EmailJS entegrasyonu çalışıyor mu?',
    address: ''
  };
  
  try {
    const result = await sendContactEmail(testData);
    console.log('Test e-posta sonucu:', result);
    return result;
  } catch (error) {
    console.error('Test e-posta hatası:', error);
    return { success: false, message: error.message };
  }
};

// Browser console'dan çalıştırma için window'a ekle
if (typeof window !== 'undefined') {
  window.testEmailJS = {
    testConfig: testEmailConfiguration,
    sendTest: sendTestEmail
  };
  console.log('🔧 EmailJS Test Fonksiyonları Hazır!');
  console.log('Konsola şu komutları yazabilirsiniz:');
  console.log('- window.testEmailJS.testConfig() : Konfigürasyonu test et');
  console.log('- window.testEmailJS.sendTest() : Test e-postası gönder');
} 