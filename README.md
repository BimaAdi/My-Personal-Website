# Bima Adi Personal Website
This is My personal website

## Requirements
- Node ver 18.14.0
- npm ver 9.6.6

## Installation (for development)
1. install depedency
```bash
npm install
```

2. First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


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

## Project Structure
- src
    - app (next js app folder see [nextjs routing doc](https://nextjs.org/docs/app/building-your-application/routing))
    - components (to store react component)
    - layouts (to store group of react component)
