<p align="center">
  <a href="https://www.vendure.io">
    <img alt="Vendure logo" src="https://res.cloudinary.com/hczpmiapo/image/upload/v1731251520/Static%20assets/Logos/Vendure_rk01uc.png" width=100>
  </a>
  <a href="https://railway.app?referralCode=-Yg50p">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://railway.app/brand/logo-light.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://railway.app/brand/logo-dark.svg">
      <img alt="Railway logo" src="https://railway.app/brand/logo-light.svg" width=100>
    </picture>
  </a>
</p>

<h2 align="center">
  Prebaked Vendure 3.5.0 monorepo
</h2>
<h4 align="center">
  Backend + Admin Dashboard + Remix Storefront + PostgreSQL
</h4>
<p align="center">
Combine Vendure's headless commerce backend with a modern Remix storefront for a complete, production-ready e-commerce solution.</p>

<h2 align="center">
  Need help?<br>
  <a href="https://funkyton.com/vendure-tutorial/">Step by step tutorial, with screenshots</a>
</h2>

<p align="center">
  <a href="https://github.com/vendure-ecommerce/vendure/blob/0b1dcb7b03ca127ac8e63540d61d13fbcc02ff9f/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://www.vendure.io/community">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
</p>

## About this boilerplate

This boilerplate is a complete, production-ready e-commerce solution built with **Vendure 3.5.0** - a modern, headless commerce platform. It includes:

- **Backend**: Full-featured commerce API with admin dashboard
- **Storefront**: Modern Remix-based customer-facing store
- **Database**: PostgreSQL with automatic seeding
- **Payments**: Stripe integration ready
- **Deployment**: Optimized for Railway with Railpack

Updated to **Vendure v3.5.0** 🥳

## Deploy with no manual setup in minutes

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/6DeBLr?referralCode=-Yg50p)

## Preconfigured integrations

- **Stripe Payment Processing**: Complete payment integration with webhook handling
- **Email System**: SendGrid integration for order confirmations and notifications
- **Asset Management**: Built-in file upload and management
- **Admin Dashboard**: Full-featured admin interface at `/admin`
- **Customer Authentication**: Complete user management system

# Local setup

## Backend

- `cd vendure-backend/`
- `pnpm install`
- Rename `.env.template` → `.env`
- To connect to your online database from local, copy the Railway-generated `DB_*` environment variables to your `.env`
- `pnpm dev` - starts backend with admin dashboard at `localhost:3000/admin`

### Requirements
- **PostgreSQL database** (automatic setup with Railway template)

### Commands
`cd vendure-backend/`
`pnpm install` - install dependencies
`pnpm build` - compile for production
`pnpm dev` - development server with hot reload
`pnpm start` - production server
`pnpm seed:once` - seed database with initial data (auto-rebuilds native modules)

## Storefront

- `cd vendure-storefront/`
- `pnpm install`
- Rename `.env.template` → `.env`
- `pnpm dev` - starts storefront at `localhost:8002`

### Requirements
- Running backend on port 3000 (starts automatically with Railway template)

### Commands
`cd vendure-storefront/`
`pnpm install` - install dependencies
`pnpm build` - compile for production
`pnpm dev` - development server with hot reload
`pnpm start` - production server

## Useful resources

- **Tutorial blog post**: [Vendure Tutorial on FunkyTon](https://funkyton.com/vendure-tutorial/)
- **Vendure Documentation**: [docs.vendure.io](https://docs.vendure.io)
- **Community Discord**: [discord.gg/vendure](https://www.vendure.io/community)

<p align="center">
  <a href="https://funkyton.com/">
    <div style="text-align: center;">
      A template by,
      <br>
      <picture>
        <img alt="FUNKYTON logo" src="https://res-5.cloudinary.com/hczpmiapo/image/upload/q_auto/v1/ghost-blog-images/funkyton-logo.png" width=200>
      </picture>
    </div>
  </a>
</p>

## License

This project is licensed under the GPLv3 License. See the [LICENSE](LICENSE.md) file for details.
