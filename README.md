# Gumnut hackathon 🚀🌙

[![CI
](https://github.com/friendlyantz/gumnut/actions/workflows/ci.yml/badge.svg)
](https://github.com/friendlyantz/gumnut/actions/workflows/ci.yml)

## TL;DR

```sh
make
make build
mise run build
```

---

## Setup

### 1. create a Next.js app

create a Next.js project

```sh
mise use node@latest

npx gitignore node

npx create-next-app@latest . \
  --app \
  --empty \
  --eslint \
  --src-dir \
  --tailwind \
  --turbopack \
  --typescript \
  --use-npm
```

can now

```sh
npm run dev

open http://localhost:3000/

curl "http://localhost:3000/api/some-slug-here-$(date +'%Y%m%d')"
{"message":"Hello some-slug-here-20250710!"}
```

---

## Readme from Next.js project creation

This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/route.ts`. The page
auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub
repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel
Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment
documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.

## API Routes

This directory contains example API routes for the headless API app.

For more details, see [route.js file
convention](https://nextjs.org/docs/app/api-reference/file-conventions/route).
