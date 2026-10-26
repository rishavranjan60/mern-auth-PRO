# MERN Auth Project

An authentication-focused project with an Express/Mongoose API and a React + TypeScript frontend built with Vite.

## Structure

- `api/`: Express entry point, routes, controllers and user model.
- `client/`: React application and Vite configuration.
- Root `package.json`: backend scripts and dependencies.

## Backend setup

Install Node.js, npm and provide access to MongoDB. From the repository root:

```bash
npm ci
```

Create a local `.env` file in the repository root and set `MONGO` to your MongoDB connection string. Keep credentials out of version control.

```bash
npm run dev
```

The API listens on port 3000 and mounts routes under `/api/user` and `/api/auth`.

## Frontend setup

In a second terminal:

```bash
cd client
npm ci
npm run dev
```

Use the URL printed by Vite. Check `client/vite.config.ts` and frontend request URLs when connecting the UI to the API; running both processes does not by itself configure a proxy or cross-origin access.

## Frontend checks

Run from `client/`:

```bash
npm run lint
npm run build
```
