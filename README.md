# `Extreme Week 2`

Projeto final para a Extreme Week 2!

## Usando o boilerplate

👉🏻 [Boilerplate nessa branch](https://github.com/luckyhackersacademy/extreme-week2/tree/boilerplate)

```
# clone o repo
git clone https://github.com/luckyhackersacademy/extreme-week2.git

# entre na pasta
cd extreme-week2

# troque para a branch do boilerplate
git checkout boilerplate
```

## Tech Stack

- Nuxt 3
- Clerk
- Pinata
- Turso
- ElevenLabs
- Tailwind
- PrimeVue

## Variavéis de ambiente

```
TURSO_DB_URL=<turso-db-url>
TURSO_DB_TOKEN=<turso-db-token>

PINATA_JWT=<pinata-jwt>
PINATA_GATEWAY_URL=<pinata-gateway-url>

ELEVENLABS_API_KEY=<elevenlabs-api-key>

NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>
NUXT_CLERK_SECRET_KEY=<clerk-secret-key>

CLERK_SIGN_IN_FORCE_REDIRECT_URL=http://localhost:3000/generations
CLERK_SIGN_UP_FORCE_REDIRECT_URL=http://localhost:3000/generations
```

## Rodando localmente

Para rodar o projeto localmente, execute os seguintes comandos:

```bash
pnpm install
pnpm dev
```
