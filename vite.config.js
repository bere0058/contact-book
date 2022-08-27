import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const BASE_URL = '/contact-book/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: import.meta.env.BASE_URL
})
