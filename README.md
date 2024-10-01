<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# Elegant Context

This modified version of one of Maximilian Schwarzmüller's projects from ["React - The Complete Guide 2024 (incl. Next.js, Redux)"](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) on Udemy.

Project incorporated the following technologies:
- Tailwindcss
- React Query
- React Context Api
- Axios
- JavaScript
- Typescript

This is two part project with independent backend(elegant-context-api) and frontend (elegant-context).
elegant-context is dependant on elegant-context-api.

## Run
elegant-context-api must be started before you start elegant-context. This is because elegant-context use 
elegant-context-api to access/modified/delete data in data source.

See elegant-context-api for instruction on how setup and run the backend.

To run elegant-context use command:
```npm run dev```
