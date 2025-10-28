# AdSynergie — Déploiement ultra simple sur Netlify

## Étapes Netlify
1) Va sur Netlify → **Add new site → Import from Git**.
2) Connecte ton GitHub et sélectionne le dépôt **adsynergie-site** (crée-le sur github.com si tu ne l'as pas).
3) **Build command** : `npm run build`
4) **Publish directory** : `dist`
5) Clique **Deploy site** → ton site est en ligne 🎉

### Alternative sans GitHub (via CLI)
- Installe Node puis: `npm install` → `npm run build`
- Installe la CLI: `npm i -g netlify-cli`
- Déploie: `ntl deploy --prod`

## Logo
- Mets ton logo dans `public/adsynergie-logo.png` (un placeholder est déjà fourni).
