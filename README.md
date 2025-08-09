# Using Fastify + TypeScript with zod, knex and PG.

# NPM install

- `npm i -D @types/node typescript`
- `tsc --init`

## Dependencies

```
"@fastify/cookie": "^11.0.2",
"dotenv": "^17.2.1",
"fastify": "^5.4.0",
"fastify-type-provider-zod": "^5.0.3",
"nanoid": "^5.1.5",
"zod": "^4.0.16"
```

## 📂 Folder Structure

```
├── 📂dist
├── 📂src
│ ├── 📂@types
│ │ └── 📄fastify-zod.d.ts
│ ├── 📂routes
│ │ └── 📄index.ts
│ │ ├── 📂v1
│ │ │ ├── 📄index.ts
│ │ │ └── 📄user-router.ts
│ ├── 📄app.ts
└── 📄index.ts
```
