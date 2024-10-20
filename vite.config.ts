import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/click-game/', // เปลี่ยนเป็นชื่อ repository ของคุณ
})
