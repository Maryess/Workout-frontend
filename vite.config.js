import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		'@': path.resolve(__dirname, './src/'),
		components: `${path.resolve(__dirname, './src/components/')}`
	}
})
