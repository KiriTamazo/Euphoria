import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [
        svgr(),
        eslintPlugin(),
        react(),
        laravel({
            input: ['resources/js/app.jsx','resources/css/app.css'],
            refresh: true,
        }),
    ],
});
