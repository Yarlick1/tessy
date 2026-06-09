import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Actions define automáticamente la variable GITHUB_ACTIONS como 'true'
  // Netlify define la variable NETLIFY como 'true'
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

  return {
    plugins: [react()],
    // Si es GitHub Pages, usa el nombre de tu repositorio. Si es Netlify (o local), usa la raíz.
    base: isGitHubPages ? '/TU_NOMBRE_DE_REPOSITORIO/' : '/',
    build: {
      outDir: 'dist',
    }
  }
})