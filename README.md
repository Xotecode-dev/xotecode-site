# XOTECODE — Site (Landing Page)

Este repositório contém a landing page da XOTECODE — uma software house que oferece desenvolvimento de software sob medida, landing pages, e-commerce e serviços de branding.

O objetivo do projeto é apresentar informações institucionais, portfólio de serviços e meios de contato para clientes e potenciais parceiros.

## Visão geral

- Tipo: Landing page estática construída com React + TypeScript e Vite.
- Uso: apresentação institucional e geração de leads (formulário de contato integrado).
- Público-alvo: empreendedores, empresas e organizações que buscam desenvolvimento de soluções digitais.

## Principais funcionalidades

- Seções informativas: quem somos, serviços, metodologia, diferenciais e estatísticas.
- Formulário de contato (integração com EmailJS).
- Componentes reutilizáveis e estilização com Tailwind CSS.

## Tecnologias

- Vite
- React
- TypeScript
- Tailwind CSS

## Estrutura do projeto (resumo)

- `public/` — arquivos estáticos públicos.
- `src/` — código-fonte da aplicação.
- `src/components/` — componentes de UI e seções (Header, Hero, Services, Contact, Footer, etc.).
- `src/assets/` — imagens e logos.
- `src/lib/` — utilitários e helpers.
- `index.html`, `vite.config.ts`, `package.json` — configuração do projeto.

## Executando localmente

Usar Node.js LTS (18.x ou superior) e npm ou pnpm.

No Windows PowerShell:

```powershell
# instalar dependências
npm install

# rodar em modo de desenvolvimento (HMR)
npm run dev

# compilar para produção
npm run build

# pré-visualizar o build (opcional)
npm run preview
```

## Variáveis de ambiente / integração de e-mail

O formulário de contato no `src/components/ContactSection.tsx` usa uma integração de terceiros (por exemplo, EmailJS). Para não expor chaves no código, configure variáveis de ambiente em um arquivo local (ex.: `.env`) ou no painel da plataforma de hospedagem:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Observação: em Vite, variáveis que começam com `VITE_` são expostas ao cliente.

## Edição de conteúdo

- Textos e seções principais estão em `src/components/` — edite os componentes correspondentes para atualizar conteúdo ou a ordem das seções.
- Imagens estão em `src/assets/img/`.

## Contato

- Email: xotecode@gmail.com
- Site (quando em produção): coloque aqui a URL final de produção.

## Licença

Este repositório não tem uma licença especificada.

---