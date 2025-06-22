# EmailJS Kurulum Talimatları

## 1. EmailJS Hesabı Oluşturma

1. [EmailJS](https://www.emailjs.com/) sitesine gidin
2. "Sign Up" butonuna tıklayın
3. Google hesabınızla veya e-posta ile kayıt olun

## 2. Email Service Ekleme

1. Dashboard'da "Email Services" sekmesine gidin
2. "Add New Service" butonuna tıklayın
3. **Gmail** seçeneğini seçin
4. Gmail hesabınızla bağlantı kurun (gulumserhaliyikama@gmail.com)
5. Service ID'yi kopyalayın (örnek: service_abc1234)

## 3. Email Template Oluşturma

1. Dashboard'da "Email Templates" sekmesine gidin
2. "Create New Template" butonuna tıklayın
3. Aşağıdaki template'i kullanın:

### Template Subject:
```
{{subject}}
```

### Template Body:
```
Yeni İletişim Formu Mesajı

Ad Soyad: {{from_name}}
E-posta: {{from_email}}
Telefon: {{from_phone}}
Hizmet Türü: {{service_type}}

{{#address}}
Adres: {{address}}
{{/address}}

{{#message}}
Mesaj:
{{message}}
{{/message}}

---
Bu mesaj Gülümser Halı Yıkama web sitesinden gönderilmiştir.
```

4. Template ID'yi kopyalayın (örnek: template_xyz5678)

## 4. Public Key Alma

1. Dashboard'da "API Keys" sekmesine gidin
2. Public Key'i kopyalayın (örnek: gBPnr-tttQS5hXIZQ)

## 5. Environment Dosyası Oluşturma

Projenin ana dizininde `.env.local` dosyası oluşturun ve aşağıdaki içeriği ekleyin:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=service_abc1234
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz5678  
REACT_APP_EMAILJS_PUBLIC_KEY=gBPnr-tttQS5hXIZQ
REACT_APP_CONTACT_EMAIL=gulumserhaliyikama@gmail.com
```

**ÖNEMLİ:** 
- `.env.local` dosyası otomatik olarak Git'e eklenmez (güvenlik için)
- Gerçek değerlerinizi yukarıdaki örnek değerlerle değiştirin

## 6. Test Etme

1. Web sitenizde contact formunu doldurun
2. Submit butonuna basın
3. EmailJS dashboard'da "Logs" bölümünden gönderim durumunu kontrol edin
4. E-posta gelip gelmediğini kontrol edin

## 7. Ücretsiz Limit

- EmailJS ücretsiz planında **ayda 200 e-posta** gönderebilirsiniz
- Bu limit aşıldığında ücretli plana geçmeniz gerekir
- Günlük maksimum: 10 e-posta

## 8. GitHub'da Güvenlik

### Seçenek 1: GitHub Secrets (Önerilen - Vercel/Netlify için)
1. GitHub repository'nize gidin
2. Settings > Secrets and Variables > Actions
3. "New repository secret" butonuna tıklayın
4. Şu secret'ları ekleyin:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`  
   - `REACT_APP_EMAILJS_PUBLIC_KEY`

### Seçenek 2: Lokal .env.local Dosyası
- `.env.local` dosyası Git'e eklenmez (.gitignore'da mevcut)
- Her developer kendi `.env.local` dosyasını oluşturur
- Production'da environment variables manuel set edilir

### Güvenlik Notları
- Public key güvenlidir, frontend'de kullanılabilir
- Private key asla frontend'de kullanmayın
- EmailJS spam koruması vardır
- Rate limiting ve domain restrictions önerilir

## Sorun Giderme

### Hata: "Service is not available"
- Service ID'nin doğru olduğundan emin olun
- Email service'inizin aktif olduğunu kontrol edin

### Hata: "Template not found"
- Template ID'nin doğru olduğundan emin olun
- Template'in kaydedildiğinden emin olun

### Hata: "Invalid public key"
- Public key'in doğru kopyalandığından emin olun
- Boşluk veya özel karakter olmadığından emin olun

### E-posta gelmiyor
- Spam klasörünü kontrol edin
- EmailJS dashboard'da logs bölümünü kontrol edin
- Gmail ayarlarınızı kontrol edin

## Test Komutu

Sistemi test etmek için browser console'da:

```javascript
// EmailJS servisini import edin ve test fonksiyonunu çalıştırın
import { sendTestEmail } from './src/services/emailService';
sendTestEmail();
``` 