import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Si estamos en giHub Actions, esta variable existirá automáticamente
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

  return {
    plugins: [react()],
    // Si es GitHub, usa el subdirectorio. Si es Netlify (o local), usa la raíz.
    base: isGitHubActions ? '/tessy/' : '/',
  }

})
