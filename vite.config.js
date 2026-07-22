import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        target: 'es2020',
        chunkSizeWarningLimit: 900,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router-dom'],
                    mui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
                    motion: ['framer-motion'],
                },
            },
        },
    },
    server: {
        port: 5173,
        open: true,
    },
    preview: {
        port: 4173,
    },
});
