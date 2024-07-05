import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        '--linaria-theme_palette-black': '#000000',
        '--linaria-theme_palette-hof': '#222222',
        '--linaria-theme_palette-foggy': '#6A6A6A',
        '--linaria-theme_palette-bobo': '#B0B0B0',
        '--linaria-theme_palette-deco': '#DDDDDD',
        '--linaria-theme_palette-bebe': '#EBEBEB',
        '--linaria-theme_palette-faint': '#F7F7F7',
        '--linaria-theme_palette-white': '#FFFFFF',
        '--linaria-theme_palette-arches': '#C13515',
        '--linaria-theme_palette-arches2': '#B32505',
        '--linaria-theme_palette-arches12': '#FFF8F6',
        '--linaria-theme_palette-capiz': '#F7F6F2',
        '--linaria-theme_palette-hapuna': '#F5F1EA',
        '--linaria-theme_palette-mykonou5': '#428BFF',
        '--linaria-theme_palette-ondo': '#E07912',
        '--linaria-theme_palette-spruce': '#008A05',
        '--linaria-theme_palette-rausch': '#FF385C',
        '--linaria-theme_palette-product-rausch': '#E00B41',
        '--linaria-theme_palette-plus': '#92174D',
        '--linaria-theme_palette-luxe': '#460479',
        '--linaria-theme_palette-bg-primary-core': '#FF385C',
        '--linaria-theme_palette-bg-primary-luxe': '#460479',
        '--linaria-theme_palette-bg-primary-plus': '#92174D',
        shadow: 'rgba(0,0,0,0.05)',
        smoke: '#222222',
        'button-dark': '#e41d55',
      },
    },
  },
  plugins: [],
};
export default config;
