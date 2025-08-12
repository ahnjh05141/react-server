import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/react-server/', // 깃허브 레포 이름
})