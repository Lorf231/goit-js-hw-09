import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', // директорія з вихідними файлами
  build: {
    outDir: '../dist', // куди збирати проект
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        gallery: resolve(__dirname, 'src/1-gallery.html'),
        form: resolve(__dirname, 'src/2-form.html'),
      },
    },
  },
  base: '/goit-js-hw-09/', // для GitHub Pages
});
