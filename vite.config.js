import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: true,
        allowedHosts: true,
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                admin: 'admin.html',
                login: 'login.html',
            },
        },
    },
});
