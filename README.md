📦 Loja Eletrônica - React.js + Tailwind CSS
Este projeto é uma loja eletrônica responsiva desenvolvida com React.js e Tailwind CSS, com foco em performance, usabilidade e design moderno. Ideal para demonstração de e-commerce, projetos pessoais ou estudos de frontend moderno.

🚀 Tecnologias utilizadas
React.js – Biblioteca JavaScript para construção de interfaces modernas e reativas.

Tailwind CSS – Framework utilitário para estilização rápida e responsiva.

React Router DOM – Navegação entre páginas (SPA).

Context API / useState / useEffect – Gerenciamento de estado e efeitos colaterais.

(Opcional: Axios, JSON Server, Firebase ou outras libs que você esteja usando)

✨ Funcionalidades
🛍️ Listagem de produtos

🔍 Filtro e busca de itens

🛒 Carrinho de compras

💳 Tela de checkout (pode simular ou integrar com gateway)

📱 Layout totalmente responsivo (mobile first)

⚡ Interface rápida e intuitiva
## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
