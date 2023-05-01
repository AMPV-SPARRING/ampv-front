import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { DotenvParseOutput } from 'dotenv';

dotenv.config();

export default defineConfig({
	plugins: [react()],
	env: {
		VITE_API_URL: process.env.VITE_API_URL
	}
} as unknown as {
	plugins: Plugin[];
	env: DotenvParseOutput & { VITE_API_URL: string };
});
