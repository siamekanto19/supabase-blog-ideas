# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```
## How to test Authentication

When the application is running, go to the `/login` route. Use the credentials provided below to login as an Admin.
```
Email    : admin@example.com
Password : abc1234
```
After successfully logging in, you can access the `/post/create` route. If you try to access the `/post/create` route without logging in, you will be redirected back to `/login` route.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
