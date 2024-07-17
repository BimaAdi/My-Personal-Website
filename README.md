# Bima Adi Personal Website
This is My personal website

## Requirements
- Node ver 20.10
- npm ver 10.2

## Installation (for development)
1. install depedencies
```bash
npm install
```

2. First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure
- src/
    - app/ (next js app folder see [nextjs routing doc](https://nextjs.org/docs/app/building-your-application/routing))
    - client/ (all file related to frontend (UI))
        - api/ (fetch rest api functions)
        - components/ (react component)
        - layouts/ (group of react component)
        - providers/ (root level provider ex: Tanstack React Query Providers, React-Redux Providers, etc)
    - server/ (all file related to backend (API))
        - db/ (json data)
        - repositories/ (function to access db/)
        - services/ (business logic)
        - types/ (types for backend)
    - shared/ (shared function, variable, constant between client/ and server/)
        - schemas/ (zod api schemas)
        - contants.ts (shared constant)
- \_\_tests\_\_/ (unit test (using vitest))
- e2e/ (end to end test (using playwright))

## Testing
There are two type of testing unit (using vitest) and e2e (using playwright)

### Unit Testing
1. follow installation step first
2. run test
```bash
npm run test
```

### E2E Testing
1. follow installation step first
2. Add Playwright extra depedency
```bash
npx playwright install
sudo npx playwright install-deps
```
3. run server
```bash
npm run dev
# or
npm run build
npm run start
```
4. run test
```bash
npm run test:e2e
```

## Deployment
1. Build project
```bash
npm run build
```

2. Serve project
```bash
npm run start
```
