import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://kjotalam.github.io/react-tasks-app-deploy'
  
})
