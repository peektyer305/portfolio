import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "magic":"url('/magic.webp')",
        "galaxy": "url('/galaxy.jpg')",
        "contactBack":"url('/contactback.jpg')"
          },
          screens: {
            '3xl': { max: '1920px' },
            // => @media (max-width: 1920px) { ... }
      
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }
      
            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }
      
            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }
      
            sh: { max: '870px' },
            // => @media (max-width: 870px) { ... }
      
            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }
      
            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
      
            xs: { max: '479px' },
            // => @media (max-width: 479px) { ... }
          },
        }
      },
  plugins: [],
};
export default config;
