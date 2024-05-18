import { colorMap, typographyMap } from '@repo/ui/styles';

// GYU-TODO: ui package 의 tailwindcss 스타일 정보를 일치시켜야하는지 궁금
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./stories/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...colorMap,
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ...typographyMap,
      };
      addUtilities(newUtilities);
    },
  ],
};
