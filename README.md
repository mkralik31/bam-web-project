# BAM! atelier - Moderný web s admin rozhraním

Moderný web pre BAM! atelier postavený na Next.js 15 s TypeScript, MongoDB, NextAuth a Cloudinary.

## 🚀 Funkcie

### Frontend
- **Next.js 15** s TypeScript a App Router
- **Tailwind CSS** pre moderný dizajn
- **Responzívny dizajn** pre všetky zariadenia
- **SEO optimalizácia** s meta tagmi

### Backend
- **MongoDB Atlas** databáza
- **NextAuth.js** pre autentifikáciu
- **API Routes** pre backend funkcionalitu
- **Email funkcionalita** s Nodemailer

### Admin rozhranie
- **Vlastné admin rozhranie** (nie CMS)
- **Správa projektov** (CRUD operácie)
- **Správa členov tímu**
- **Upload obrázkov** cez Cloudinary
- **Bezpečné prihlásenie** s email/heslo

### Stránky
- **Domovská stránka** s hero sekciou a carousel
- **Projekty** s filtrováním a detailmi
- **O nás** s informáciami o tíme
- **Kontakt** s funkčným formulárom
- **Admin rozhranie** pre správu obsahu

## 🛠️ Technológie

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB, Mongoose
- **Autentifikácia**: NextAuth.js
- **Obrázky**: Cloudinary
- **Email**: Nodemailer
- **Formuláre**: React Hook Form, Zod
- **Hosting**: Vercel (odporúčané)

## 📦 Inštalácia

### 1. Klonovanie repozitára
```bash
git clone <repository-url>
cd bam-web-project-1
```

### 2. Inštalácia závislostí
```bash
npm install
```

### 3. Konfigurácia prostredia
Vytvorte súbor `.env.local` v koreňovom adresári:

```env
# MongoDB
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/bam-atelier?retryWrites=true&w=majority

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@bam-atelier.sk
CONTACT_EMAIL=info@bam-atelier.sk
```

### 4. Spustenie vývojového servera
```bash
npm run dev
```

Otvorte [http://localhost:3000](http://localhost:3000) pre zobrazenie webu.

## 🗄️ Databázová štruktúra

### Projekty (Project)
```typescript
{
  _id: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  images: string[];
  featuredImage: string;
  category: 'web' | 'mobile' | 'design' | 'branding' | 'other';
  technologies: string[];
  client?: string;
  date: Date;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Členovia tímu (TeamMember)
```typescript
{
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  github?: string;
  order: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Používatelia (User)
```typescript
{
  _id: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'editor';
  active: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔐 Admin rozhranie

### Prístup
- URL: `/admin`
- Prihlásenie: `/admin/login`

### Vytvorenie admin účtu
Vytvorte admin používateľa priamo v databáze alebo cez MongoDB Compass:

```javascript
// Hash hesla pomocou bcrypt
const bcrypt = require('bcryptjs');
const hashedPassword = await bcrypt.hash('your-password', 12);

// Vložte do kolekcie users
{
  email: "admin@bam-atelier.sk",
  password: hashedPassword,
  name: "Admin",
  role: "admin",
  active: true
}
```

## 📁 Štruktúra projektu

```
src/
├── app/
│   ├── admin/           # Admin rozhranie
│   ├── api/            # API routes
│   ├── about/          # O nás stránka
│   ├── contact/        # Kontakt stránka
│   ├── projects/       # Projekty stránky
│   ├── layout.tsx      # Hlavný layout
│   └── page.tsx        # Domovská stránka
├── components/         # React komponenty
├── lib/               # Utility funkcie
├── models/            # Mongoose modely
└── styles/            # CSS štýly
```

## 🚀 Deployment

### Vercel (odporúčané)
1. Push kód do GitHub
2. Pripojte repozitár k Vercel
3. Nastavte environment variables
4. Deploy

### Iné platformy
- **Netlify**: Podporuje Next.js
- **Railway**: Jednoduché nasadenie
- **Render**: Free tier dostupný

## 🔧 Vývoj

### Príkazy
```bash
npm run dev      # Vývojový server
npm run build    # Build pre produkciu
npm run start    # Spustenie produkčného servera
npm run lint     # ESLint kontrola
```

### Pridanie nového projektu
1. Prihláste sa do admin rozhrania
2. Prejdite na `/admin/projects/new`
3. Vyplňte formulár
4. Upload obrázky cez Cloudinary
5. Uložte projekt

## 📧 Email konfigurácia

Pre Gmail:
1. Zapnite 2FA
2. Vytvorte App Password
3. Použite App Password v SMTP_PASS

## 🖼️ Cloudinary konfigurácia

1. Vytvorte účet na [Cloudinary](https://cloudinary.com)
2. Získajte Cloud Name, API Key a API Secret
3. Nastavte environment variables

## 🤝 Príspevky

1. Fork repozitára
2. Vytvorte feature branch
3. Commit zmeny
4. Push do branch
5. Vytvorte Pull Request

## 📄 Licencia

Tento projekt je pod MIT licenciou.

## 📞 Podpora

Pre otázky a podporu kontaktujte:
- Email: info@bam-atelier.sk
- Web: https://bam-atelier.sk

---

**BAM! atelier** - Vytvárame digitálne riešenia, ktoré menia svet! 🚀
