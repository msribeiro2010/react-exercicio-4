import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-exercicio-4/", // Substitua 'repo-name' pelo nome do seu repositório
  plugins: [react()],
});
