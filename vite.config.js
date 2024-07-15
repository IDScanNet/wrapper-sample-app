import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
    plugins: [
        copy({
            targets: [
                { src: 'node_modules/@idscan/onboarding/dist/networks/*', dest: 'public/networks' },
            ],
            hook: 'writeBundle',
        }),
    ],
});
