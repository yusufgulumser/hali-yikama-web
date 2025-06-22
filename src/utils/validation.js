// Form validasyon fonksiyonları

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Türkiye telefon numarası formatları: 
  // 05XX XXX XX XX, +90 5XX XXX XX XX, 0(5XX) XXX XX XX
  // eslint-disable-next-line no-useless-escape
  const phoneRegex = /^(\+90|0)?[\s\-\(\)]?([5][0-9]{2})[\s\-\(\)]?([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})$/;
  // eslint-disable-next-line no-useless-escape
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  return phoneRegex.test(phone) && cleanPhone.length >= 10;
};

export const validateContactForm = (formData) => {
  const errors = {};

  // Hizmet türü kontrolü
  if (!formData.service) {
    errors.service = 'Lütfen hizmet türünü seçiniz.';
    return { isValid: false, errors };
  }

  // Ad soyad kontrolü
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Lütfen geçerli bir ad ve soyad giriniz (en az 2 karakter).';
  }

  // Hizmet türüne göre validasyon
  if (formData.service === 'soru') {
    // Soru sorma modu - telefon VEYA email zorunlu
    const hasValidPhone = formData.phone && validatePhone(formData.phone);
    const hasValidEmail = formData.email && validateEmail(formData.email);

    if (!hasValidPhone && !hasValidEmail) {
      if (formData.phone && !validatePhone(formData.phone)) {
        errors.phone = 'Lütfen geçerli bir telefon numarası giriniz.';
      }
      if (formData.email && !validateEmail(formData.email)) {
        errors.email = 'Lütfen geçerli bir e-posta adresi giriniz.';
      }
      if (!formData.phone && !formData.email) {
        errors.contact = 'Lütfen telefon numaranızı veya e-posta adresinizi giriniz.';
      }
    } else {
      // En az biri geçerliyse, dolu olanları kontrol et
      if (formData.phone && !validatePhone(formData.phone)) {
        errors.phone = 'Geçersiz telefon numarası formatı.';
      }
      if (formData.email && !validateEmail(formData.email)) {
        errors.email = 'Geçersiz e-posta adresi formatı.';
      }
    }

  } else if (formData.service === 'siparis') {
    // Sipariş modu - telefon ve adres zorunlu
    if (!formData.phone) {
      errors.phone = 'Lütfen telefon numaranızı giriniz.';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Lütfen geçerli bir telefon numarası giriniz.';
    }

    if (!formData.address || formData.address.trim().length < 5) {
      errors.address = 'Lütfen geçerli bir adres giriniz (en az 5 karakter).';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const formatPhoneNumber = (phone) => {
  // Telefon numarasını temizle ve formatla
  // eslint-disable-next-line no-useless-escape
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  
  if (cleaned.startsWith('90')) {
    return `+${cleaned}`;
  } else if (cleaned.startsWith('0')) {
    return `+90${cleaned.slice(1)}`;
  } else if (cleaned.length === 10) {
    return `+90${cleaned}`;
  }
  
  return phone;
}; 