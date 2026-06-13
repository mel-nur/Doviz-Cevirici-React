# 💱 Döviz Çevirici (Currency Converter)

Modern ve kullanıcı dostu bir döviz çevirici uygulaması. React ve Vite ile geliştirilmiş, Bootstrap tasarımı ile güzelleştirilmiş.

## ✨ Özellikler

- 🌍 **8 Para Birimi** - USD, EUR, TRY, GBP, JPY, AUD, CAD, CHF
- 📊 **Gerçek Zamanlı Kur** - En güncel döviz kurları
- ⚡ **Hızlı Dönüştürme** - Anında sonuç
- 🔄 **Swap Butonu** - Para birimlerini hızlıca değiştir
- 🎨 **Modern Tasarım** - Bootstrap + CSS
- 📱 **Responsive** - Tüm cihazlarda çalışır
- ⚙️ **Loading State** - Dönüştürme sırasında görsel feedback
- ❌ **Hata Yönetimi** - Kullanıcı dostu hata mesajları

## 🚀 Hızlı Başlangıç

## Kurulum

1. **Repository'yi klonla**

```bash
git clone <repo-url>
cd dovizCeviri
```

2. **Bağımlılıkları yükle**

```bash
npm install
```

3. **.env dosyası oluştur**

```bash
# .env.local dosyasını oluştur
echo "VITE_API_KEY=your_api_key_here" > .env.local
```

4. **Dev sunucusunu başlat**

```bash
npm run dev
```

Tarayıcını aç ve `http://localhost:5174` adresine git.

## 📦 Proje Yapısı

```
src/
├── components/
│   ├── Header.jsx              # Başlık ve subtitle
│   ├── CurrencySelector.jsx    # Para birimi seçimi
│   ├── ErrorAlert.jsx          # Hata mesajları
│   ├── ConvertButton.jsx       # Dönüştür butonu
│   ├── ResultCard.jsx          # Sonuç gösterme
│   └── index.js                # Component exports
├── App.jsx                     # Ana component
├── App.css                     # Uygulama stili
├── index.css                   # Global stil
└── main.jsx                    # Entry point
```

## 📖 Kullanım

1. **Miktar Gir** - Dönüştürmek istediğin miktarı gir
2. **Para Birimini Seç** - Çıkış ve giriş para birimini seç
3. **Swap Yap (Opsiyonel)** - ⇄ butonuyla para birimlerini değiştir
4. **Çevir Butonuna Tıkla** - Dönüştürmeyi başlat
5. **Sonucu Gör** - Sonuç kartında dönüştürülen miktar ve kur oranı görünür

## 🔌 API Bilgisi

Bu proje **Free Currency API** kullanıyor:

- Endpoint: `https://api.freecurrencyapi.com/v1/latest`
- Gerçek zamanlı kur bilgisi
- Ücretsiz API key gerekli

[Free Currency API&#39;ye kaydol](https://freecurrencyapi.com/) ve API key'ini al.

## 📝 Scripts

```bash
# Dev sunucusu başlat
npm run dev

# Production için build yap
npm run build

# Build'i preview et
npm run preview

# Linting kontrol et
npm run lint
```

## 🎨 Stil ve Tasarım

- **Renk Şeması**: Mor-Mavi gradient
- **Animasyonlar**: Smooth slide-up ve fade-in efektleri
- **Responsive**: Mobile-first tasarım
- **Bootstrap 5**: Modern UI bileşenleri
