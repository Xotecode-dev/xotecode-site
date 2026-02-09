# 🚀 DEPLOYMENT GUIDE - XOTECODE

## 📋 Pré-requisitos

- ✅ Node.js 18+ instalado
- ✅ Git configurado
- ✅ Repositório GitHub
- ✅ Build testado localmente (`npm run build`)

---

## 1️⃣ DEPLOYMENT VIA GITHUB PAGES (Recomendado)

### Setup Inicial (Uma única vez)

```bash
# 1. Instalar dependência gh-pages
npm install --save-dev gh-pages

# 2. Configurar package.json (já feito!)
# {
#   "scripts": {
#     "predeploy": "npm run build",
#     "deploy": "gh-pages -d dist"
#   }
# }

# 3. Criar repositório GitHub e fazer push
git init
git add .
git commit -m "Initial commit: XoteCode redesign"
git branch -M main
git remote add origin https://github.com/seu-usuario/site_xotecode.git
git push -u origin main
```

### Deploy Automático

```bash
# 1. Fazer mudanças no código
# 2. Testar localmente: npm run dev
# 3. Fazer build: npm run build
# 4. Deploy:

npm run deploy

# Isso faz:
# 1. npm run build (gera dist/)
# 2. gh-pages -d dist (publica na branch gh-pages)
# 3. Site fica disponível em: https://seu-usuario.github.io/site_xotecode/
```

### Configurar Domínio Customizado

```bash
# 1. Criar arquivo: public/CNAME
# 2. Adicionar conteúdo:
# xotecode.com

# 3. Configurar no GitHub:
#    Settings → Pages → Custom domain
```

---

## 2️⃣ DEPLOYMENT VIA VERCEL (Alternativa Premium)

### Setup

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Deploy
vercel

# 4. Responder prompts:
# ? Set up and deploy "~/site_xotecode"? [Y/n] y
# ? Which scope do you want to deploy to? [seu-user]
# ? Link to existing project? [y/N] n
# ? What's your project's name? xotecode
# ? In which directory is your code? [./] ./xotecode
# ? Want to override the settings? [Y/n] n
```

### Deploy Contínuo (CI/CD)

```bash
# Vercel detecta pushes no GitHub automaticamente!
# Basta fazer: git push origin main
# E o deploy acontece sozinho em production
```

---

## 3️⃣ DEPLOYMENT VIA NETLIFY (Alternativa)

### Setup

```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Fazer login
netlify login

# 3. Deploy
netlify deploy --prod

# 4. Ou vincular ao GitHub para CI/CD automático:
# - Ir para netlify.com
# - Connect repo
# - Configure build settings:
#   Build command: npm run build
#   Publish directory: dist
```

---

## 4️⃣ DEPLOYMENT VIA AWS AMPLIFY

### Setup

```bash
# 1. Instalar AWS Amplify CLI
npm i -g @aws-amplify/cli

# 2. Configurar
amplify configure

# 3. Inicializar projeto
amplify init

# 4. Deploy
amplify publish
```

---

## ✅ CHECKLIST PRÉ-DEPLOYMENT

### Código
- [ ] Build local sem erros: `npm run build`
- [ ] Sem console errors: `npm run dev` (F12)
- [ ] Rotas funcionam: `/` e `/projetos`
- [ ] Filtros de projetos funcionam
- [ ] Modal abre e fecha corretamente
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Links de navegação corretos

### Conteúdo
- [ ] Todas as imagens carregam
- [ ] Textos sem erros ortográficos
- [ ] Links externos abrem em nova aba
- [ ] Meta tags preenchidas
- [ ] Favicon configurado

### Performance
- [ ] Lighthouse score > 80
- [ ] Imagens otimizadas
- [ ] CSS minificado
- [ ] JS minificado
- [ ] Gzip compression ativo

### SEO
- [ ] Title tags corretos
- [ ] Meta descriptions preenchidas
- [ ] Alt text em todas as imagens
- [ ] Estrutura de headings correta
- [ ] robots.txt configurado (se necessário)
- [ ] sitemap.xml criado (se necessário)

---

## 🔄 PROCESSO DE DEPLOYMENT

### Passo a Passo (GitHub Pages)

```bash
# 1. Navegar para o projeto
cd ~/Projetos\ xotecode/site_xotecode/xotecode

# 2. Criar branch para mudanças
git checkout -b feature/novo-projeto

# 3. Fazer mudanças
# Editar src/data/projects.ts
# Editar componentes conforme necessário

# 4. Testar localmente
npm run dev
# Abrir http://localhost:5173

# 5. Fazer build de teste
npm run build

# 6. Adicionar ao git
git add .

# 7. Fazer commit
git commit -m "feat: adicionar novo projeto [nome]"

# 8. Push para GitHub
git push origin feature/novo-projeto

# 9. Criar Pull Request (opcional)
# Ir para GitHub e criar PR

# 10. Merge na main
git checkout main
git merge feature/novo-projeto

# 11. Deploy!
npm run deploy

# 12. Verificar em:
# https://seu-usuario.github.io/site_xotecode/
```

---

## 🔐 VARIÁVEIS DE AMBIENTE

### Arquivo: `.env` (criar se necessário)

```env
# EmailJS (já configurado no código)
VITE_EMAILJS_SERVICE_ID=service_34crrw6
VITE_EMAILJS_TEMPLATE_ID=template_3x5napf
VITE_EMAILJS_PUBLIC_KEY=mtmZ4amUrv_PzGCcs

# Analytics (opcional)
VITE_GA_TRACKING_ID=

# API endpoints (se usar)
VITE_API_BASE_URL=https://api.example.com
```

### Usar variáveis no código

```typescript
const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

---

## 🐛 TROUBLESHOOTING

### Problema: Build falha
```bash
# Solução:
rm -rf node_modules dist
npm install
npm run build
```

### Problema: Imagens não carregam
```bash
# Verificar:
# 1. Caminho da imagem está correto
# 2. Imagem existe em public/
# 3. Usar: /images/seu-projeto.jpg (com barra inicial)
```

### Problema: Rotas não funcionam (GitHub Pages)
```bash
# Adicionar ao vite.config.ts:
export default {
  base: '/site_xotecode/', // Se em subdirectório
  // ou
  base: '/', // Se em domínio raiz
}
```

### Problema: Estilos não carregam
```bash
# Verificar:
npm run build
# Verificar dist/assets/ tem CSS
```

---

## 📊 MONITORAMENTO PÓS-DEPLOY

### Google Analytics (Recomendado)

```html
<!-- Adicionar ao public/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Verificar Performance

```bash
# Google PageSpeed Insights
# https://pagespeed.web.dev/

# WebPageTest
# https://www.webpagetest.org/

# Lighthouse (no Chrome DevTools)
# F12 → Lighthouse → Generate report
```

---

## 🔄 ATUALIZAÇÕES FUTURAS

### Adicionar novo projeto

```bash
# 1. Editar src/data/projects.ts
# 2. Adicionar objeto novo
# 3. npm run dev (testar)
# 4. npm run build
# 5. git push origin main
# 6. npm run deploy
```

### Editar componente existente

```bash
# 1. Editar arquivo (ex: src/components/HeroSection.tsx)
# 2. npm run dev (verificar mudanças)
# 3. npm run build (testar build)
# 4. git push
# 5. npm run deploy
```

---

## 💡 DICAS

1. **Always test locally first**
   ```bash
   npm run dev
   ```

2. **Check build output before deploying**
   ```bash
   npm run build
   # Verificar se dist/ foi gerado corretamente
   ```

3. **Use meaningful commit messages**
   ```bash
   git commit -m "feat: novo projeto Unifoco"
   # Em vez de: "update"
   ```

4. **Keep dependencies updated**
   ```bash
   npm outdated  # Verificar atualizações
   npm update    # Atualizar
   ```

5. **Monitor console for errors**
   ```bash
   # npm run dev
   # F12 → Console → Verificar erros
   ```

---

## ✨ RESULTADO ESPERADO

Após deploy com sucesso:

- ✅ Site online em: `https://seu-dominio.com/`
- ✅ Rotas funcionando: `/` e `/projetos`
- ✅ Filtros operacionais
- ✅ Modal interativo
- ✅ SEO otimizado
- ✅ Performance > 80 Lighthouse score
- ✅ Responsivo em todos os dispositivos

---

## 📞 SUPORTE

Para problemas com deploy:

1. Verificar documentação oficial:
   - GitHub Pages: https://docs.github.com/en/pages
   - Vercel: https://vercel.com/docs
   - Netlify: https://docs.netlify.com/

2. Verificar Node.js version:
   ```bash
   node --version  # Deve ser 18+
   npm --version
   ```

3. Clear cache e reinstalar:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

---

**🎉 Seu site XoteCode está pronto para o mundo!**

**Happy deploying! 🚀**
