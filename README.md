# Igualdad Consultora — Landing Page Institucional

Landing page institucional B2B y gubernamental para **Igualdad Consultora**, liderada por **Belén Scalesa** (Especialista en prevención y abordaje integral de la violencia y el acoso en el mundo del trabajo bajo el marco del Convenio 190 OIT).

Diseño editorial de alto nivel (*trust-first*), sin estéticas genéricas ni elementos de IA, con respeto estricto a la identidad corporativa y paleta extraída del dossier oficial.

---

## 🎨 Identidad de Marca y Tokens de Diseño

La interfaz utiliza variables CSS nativas alineadas con la normativa WCAG AA/AAA:

* `--color-brand-primary: #5f4a9a` (Botón primario, acentos)
* `--color-brand-deep: #544f82` (Encabezados H1/H2, contraste elevado)
* `--color-brand-accent: #b9b1d0` (Badges de fases A/B/C/D)
* `--color-surface-soft: #f1eff7` (Superficies de tarjetas y citas)
* `--color-surface-card: #dedbea` (Bordes y divisores)
* `--color-text-title: #212121` (Títulos)
* `--color-text-body: #404040` (Cuerpo general)
* Tipografías: `Outfit` (titulares) y `Plus Jakarta Sans` (cuerpo).

---

## 🚀 Stack Tecnológico

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) + React 19
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animaciones:** [Motion (`motion/react`)](https://motion.dev/)
* **Iconografía:** [@phosphor-icons/react](https://phosphoricons.com/)
* **Validación:** [Zod](https://zod.dev/)

---

## 📂 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx         # Metadatos SEO, OpenGraph y tipografías
│   ├── page.tsx           # Composición secuencial de secciones
│   └── globals.css        # Tokens de diseño @theme Tailwind v4
└── components/
    ├── Navbar.tsx             # Navegación fija con isotipo vectorial
    ├── Hero.tsx               # Apertura asimétrica y marco C190 OIT
    ├── AudiencesSection.tsx   # Segmentación Empresas / Sindicatos / Sector Público
    ├── ChallengeSection.tsx   # Cita OIT y comparativa de abordajes
    ├── EcosystemPhases.tsx    # Bento Grid de las 4 etapas metodológicas
    ├── TrajectoryProfile.tsx  # Perfil de Belén Scalesa (Retrato / Vector)
    ├── TrustWall.tsx          # Emblemas SVG institucionales (Balseiro, CAB, UNRN, etc.)
    ├── PricingSection.tsx     # Transparencia de inversión ($2.800 USD)
    ├── BookingContactForm.tsx # Formulario de agendamiento y ticket institucional
    └── Footer.tsx             # Enlaces legales, canales y copyright
```

---

## 💻 Desarrollo Local

```bash
# 1. Clonar e instalar dependencias
git clone https://github.com/TritSoftwareFactory/ConsultoraIgualdad.git
cd ConsultoraIgualdad
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
npm run start
```

---

## 🔒 Confidencialidad y Contacto

* **Teléfono / WhatsApp:** +54 9 2920 411152
* **Email:** igualdadconsultora@gmail.com
* **Instagram:** [@igualdadconsultora](https://instagram.com/igualdadconsultora)
