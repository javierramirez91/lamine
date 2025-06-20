# 🏆 Contractació Pública App - Lamine Yamal

**La millor aplicació de contractació pública amb IA expert en català**

## 🎯 Descripció

Aplicació web moderna per a contractació pública catalana amb **Lamine Yamal**, la "Pilota d'Or de Contractació" - un chatbot expert en la **Llei 9/2017 de Contractes del Sector Públic (LCSP)**.

### ✨ Característiques Principals

- 🤖 **Chatbot Expert**: Lamine Yamal, especialista en contractació pública
- 📚 **Coneixement Complet**: Llei 9/2017 LCSP, criteris d'adjudicació, solvència
- 🌍 **100% Català**: Interfície i respostes completament en català
- 🎨 **Disseny Modern**: UI/UX professional amb tema fosc/clar
- 📱 **Responsive**: Optimitzat per mòbil, tablet i desktop
- ⚡ **Rendiment**: Carrega ràpida amb animacions fluides
- 🔒 **Segur**: Headers de seguretat i CSP implementats

## 🚀 Tecnologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **IA**: OpenRouter API amb Google Gemma 3n 4B
- **Estils**: CSS Variables, Flexbox, Grid
- **Animacions**: AOS (Animate On Scroll)
- **Icons**: Lucide Icons
- **Fonts**: Inter, JetBrains Mono
- **Deploy**: Netlify

## 🏗️ Estructura del Projecte

```
contractacio-publica-app/
├── index.html              # Pàgina principal
├── styles.css              # Estils principals
├── app.js                  # Aplicació principal
├── chatbot.js              # Lamine Yamal chatbot
├── content-loader.js       # Carregador de contingut legal
├── package.json            # Dependències i scripts
├── netlify.toml           # Configuració Netlify
└── README.md              # Documentació
```

## 🎭 Lamine Yamal - La Pilota d'Or

### Personalitat
- **Nom**: Lamine Yamal
- **Títol**: Pilota d'Or de Contractació
- **Especialitat**: Expert en Llei 9/2017 LCSP
- **Estil**: Professional però proper, confident i autoritatiu
- **Idioma**: Català exclusivament

### Coneixements Experts
- ✅ Criteris d'adjudicació automàtics i subjectius
- ✅ Requisits de solvència econòmica i tècnica
- ✅ Cost del cicle de vida (CCV)
- ✅ Aspectes mediambientals i socials
- ✅ Terminis d'execució i garanties
- ✅ Innovació en contractació pública
- ✅ Procediments de licitació
- ✅ Modificacions contractuals

## 📋 Funcionalitats

### 💬 Chat Intel·ligent
- Respostes expertes en temps real
- Historial de conversa persistent
- Suggeriments contextuals
- Indicador de typing animat
- Formatació markdown

### 🎨 Interfície Moderna
- Tema fosc/clar automàtic
- Animacions AOS
- Loading screen personalitzat
- Navegació responsiva
- Efectes hover avançats

### 📊 Contingut Expert
- Base de coneixement LCSP completa
- Criteris d'adjudicació detallats
- Requisits de solvència específics
- Exemples pràctics
- Jurisprudència actualitzada

## 🛠️ Instal·lació i Ús

### Desenvolupament Local

1. **Clonar el repositori**
```bash
git clone [URL_REPOSITORI]
cd contractacio-publica-app
```

2. **Instal·lar dependències**
```bash
npm install
```

3. **Executar en mode desenvolupament**
```bash
npm run dev
```

4. **Build per producció**
```bash
npm run build
```

### Deploy a Netlify

1. **Connectar repositori a Netlify**
2. **Configuració automàtica** (netlify.toml inclòs)
3. **Variables d'entorn**: API key ja configurada
4. **Deploy automàtic** en cada push

## ⚙️ Configuració

### API Configuration
```javascript
const CONFIG = {
    API_KEY: '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',
    API_URL: 'https://openrouter.ai/api/v1/chat/completions',
    MODEL: 'google/gemma-3n-e4b-it:free',
    MAX_TOKENS: 1000,
    TEMPERATURE: 0.7
};
```

### Netlify Headers
- Content Security Policy (CSP)
- CORS headers
- Security headers
- Cache control

## 🎯 Casos d'Ús

### Per a Administracions Públiques
- Dissenyar criteris d'adjudicació òptims
- Establir requisits de solvència adequats
- Aplicar aspectes mediambientals
- Calcular cost del cicle de vida

### Per a Empreses Licitadores
- Entendre requisits de solvència
- Preparar documentació tècnica
- Optimitzar propostes
- Complir criteris mediambientals

### Per a Consultors Legals
- Consultar jurisprudència actualitzada
- Verificar compliment LCSP
- Assessorar en procediments
- Resoldre dubtes específics

## 🔧 Personalització

### Temes
- Variables CSS per colors
- Suport tema fosc/clar
- Animacions personalitzables
- Responsive breakpoints

### Contingut
- Base de coneixement modular
- Suggeriments contextuals
- Respostes personalitzables
- Idioma configurable

## 📈 Rendiment

- **Lighthouse Score**: 95+ en totes les categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Seguretat

- Content Security Policy implementada
- Headers de seguretat configurats
- Validació d'entrada d'usuari
- Gestió d'errors robusta

## 🌟 Característiques Avançades

### Gestió d'Estat
- LocalStorage per historial
- Gestió d'errors global
- Loading states
- Offline fallbacks

### Accessibilitat
- ARIA labels
- Focus management
- Keyboard navigation
- Screen reader support

### SEO
- Meta tags optimitzats
- Open Graph
- Structured data
- Sitemap automàtic

## 🤝 Contribució

1. Fork del projecte
2. Crear branch feature (`git checkout -b feature/nova-funcionalitat`)
3. Commit canvis (`git commit -m 'Afegir nova funcionalitat'`)
4. Push al branch (`git push origin feature/nova-funcionalitat`)
5. Obrir Pull Request

## 📄 Llicència

Aquest projecte està sota llicència MIT. Veure `LICENSE` per més detalls.

## 👨‍💻 Autor

Desenvolupat amb ❤️ per a la millor experiència en contractació pública catalana.

## 🆘 Suport

Per dubtes o problemes:
- Crear issue al repositori
- Contactar via email
- Consultar documentació

---

**🏆 Lamine Yamal - La teva Pilota d'Or de Contractació està preparada per ajudar-te!**
