# Gelisiyor - Frontend

Modern girişim ekosistemi için geliştirilmiş, geliştiricileri ve yatırımcıları bir araya getiren yenilikçi bir platform.

## 🚀 Özellikler

### Kullanıcı Yönetimi

- Çoklu kullanıcı tipleri (Normal Kullanıcı, Geliştirici, Yatırımcı)
- Profil yönetimi ve özelleştirme
- Detaylı kullanıcı profillerinde beceriler, deneyimler ve portfolio gösterimi

### Proje Yönetimi

- Proje oluşturma ve detaylı proje sayfaları
- Proje takımı yönetimi
- Proje ilerleme takibi ve zaman çizelgesi
- Görev yönetimi ve dağıtımı
- Teknoloji stack'i yönetimi

### Yatırım Sistemi

- Projelere yatırım yapma
- Yatırım portföyü takibi
- Detaylı yatırım analizleri

### İletişim & Etkileşim

- Bildirim sistemi
- Mesajlaşma altyapısı
- Proje başvuru sistemi
- Beğeni ve katılım sistemi

### AI Destekli Özellikler

- Proje SWOT analizi
- Takım yapısı önerileri
- Proje değerlendirme ve puanlama sistemi

## 🛠️ Teknolojiler

### Frontend

- **Framework:** Next.js 15.4.4
- **Dil:** TypeScript 5
- **UI Kütüphaneleri:**
  - TailwindCSS 4
  - Framer Motion
  - Iconify
- **Form Yönetimi:** Formik + Yup

### Development Tools

- **Package Manager:** pnpm
- **Linting & Formatting:** ESLint, Prettier

## 📁 Proje Yapısı

```
├── components/
│   ├── home/           # Ana sayfa komponentleri
│   ├── ideas/         # Fikir yönetimi komponentleri
│   ├── layout/        # Layout ve navigasyon
│   ├── projects/      # Proje yönetimi komponentleri
│   ├── register/      # Kayıt sistemi komponentleri
│   ├── shared/        # Paylaşılan komponentler
│   └── ui/            # Temel UI komponentleri
│
├── pages/
│   ├── auth/          # Kimlik doğrulama sayfaları
│   ├── panel/         # Kullanıcı paneli sayfaları
│   ├── projects/      # Proje sayfaları
│   └── profile/       # Profil sayfaları
│
└── public/            # Statik dosyalar
```

## 🚦 Başlangıç

### Gereksinimler

- Node.js 18 veya üzeri
- pnpm paket yöneticisi

### Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/poyrazavsever/gelisiyor-Frontend.git

# Proje dizinine gidin
cd gelisiyor-Frontend

# Bağımlılıkları yükleyin
pnpm install

# Geliştirme sunucusunu başlatın
pnpm dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

## 📦 Scripts

- `pnpm dev` - Geliştirme sunucusunu başlatır
- `pnpm build` - Üretim için build oluşturur
- `pnpm start` - Üretim sunucusunu başlatır
- `pnpm lint` - Kod kalitesi kontrolü yapar

## 🎨 UI Özelleştirme

Proje, TailwindCSS ile tasarlanmıştır. Ana renkler ve temalar `tailwind.config.js` dosyasında özelleştirilebilir.

## 🔒 Environment Variables

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 📱 Responsive Tasarım

- Mobile First yaklaşımı
- Tablet ve Desktop için optimize edilmiş görünüm
- Framer Motion ile akıcı animasyonlar

## 👥 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

