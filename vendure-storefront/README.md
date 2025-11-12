# Vendure Remix Storefront Starter

An e-commerce storefront for [Vendure](https://www.vendure.io) built with [Remix](https://remix.run).

👉 [remix-storefront.vendure.io](https://remix-storefront.vendure.io/)


## To do

Most Vendure features are already part of this starter. Notable missing Vendure features:
- Default billing/shipping addresses
   - This is part of the account page (https://funkyton.com/vendure-tutorial//pull/39) but not yet used in checkout
- Separate billing address in checkout
- Promotions
- Localization
- Multi channel support

General things missing:
- Global input validation
- Sitemap generation
- Metadata

**Contributions welcome!**

## Development

1. Clone this repo
2. `pnpm install`
3. Create a `.env` file in the root dir with the following command and update it with your variables:

   ```bash
   cp .env.template .env
   ```

4. `pnpm dev` - run the storefront with a local Remix server

### Vendure Server

This storefront requires a Vendure server. You can either run a local instance, or use vendures public demo server.

#### Local

Use the vendure-backend in this repo:

1. Follow the setup instructions in the main README
2. Start the backend: `cd ../vendure-backend && pnpm dev`
3. The storefront will connect to `http://localhost:3000/shop-api`

For the public demo server, use: `https://readonlydemo.vendure.io/shop-api`

#### Code Generation

Whenever the Graphql documents (the constants using the `gql` tag) in the [./app/providers](./app/providers) dir changes,
you should run `pnpm generate` to generate new sdk definitions.

For a more detailed guide on how to work with code generation, check the wiki about [querying custom fields](https://funkyton.com/vendure-tutorial//wiki/Querying-custom-fields).

## Payment Gateways

Currently, both Stripe and Braintree are supported out of the box, but only one of them can be used at the same time

### Stripe integration

This repo has a built-in Stripe payment integration. To enable it, ensure that your Vendure server is set up with
the [StripePlugin](https://docs.vendure.io/reference/core-plugins/payments-plugin/stripe-plugin/).

Ensure your new PaymentMethod uses the word `stripe` somewhere in its code, as that's how this integration will know
to load the Stripe payment element.

Then add your Stripe publishable key to the env file:

```
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**Important note**: There's a race condition between Stripe redirecting a customer to the confirmation page and the webhook receiving the confirmation in the Vendure backend. As this condition is not very distinguishable from other potential issues, it is currently addressed by implementing a very simple retry system of 5 retries every 2.5s You can tweak these settings in the [CheckoutConfirmation route](./app/routes/checkout/confirmation.%24orderCode.tsx).

### Braintree integration

This repo has built-in Braintree integration. To enable it, ensure that your Vendure server is set up with
the [BraintreePlugin](https://docs.vendure.io/reference/core-plugins/payments-plugin/braintree-plugin/).

Currently, `storeCustomersInBraintree` has to be set to `true` in plugin options.

## Public demo

There is a publicly-available demo instance at https://readonlydemo.vendure.io/shop-api

## Deployment

This repo is configured to deploy to Railway (recommended).

### Railway (Recommended)

Railway automatically detects Node.js apps and uses Railpack for fast deployments:

1. Connect your GitHub repo to Railway
2. Railway will automatically build using `pnpm install` and `pnpm build`
3. The app will start with `pnpm start`


No special setup should be needed, as the [remix.config.js](./remix.config.js) file contains a check for the `process.env.CF_PAGES` / `process.env.NETLIFY` environment variable to determine whether to use the Cloudflare Pages or Netlify server configuration.

Follow the usual procedure for setting up a project in Netlify/CF Pages and point it to your clone of this repo on GitHub/Gitlab.

**Be sure to change the cookie secret in [app/sessions.ts](./app/sessions.ts) for production use!**

## License

MIT
