import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Comprobamos de forma 100% segura si existe GitHub Actions sin romper el editor
const isGitHubActions = typeof globalThis.process?.env?.GITHUB_ACTIONS !== 'undefined'

export default defineConfig({
  plugins: [react()],
  base: isGitHubActions ? '/tessy/' : '/',

})
