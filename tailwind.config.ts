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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        drawerOpen: {
          "0%": { width: "0px" },
          "100%": { width: "66.66%" },
        },
        drawerClose: {
          "0%": { width: "66.66%" },
          "100%": { width: "0px" },
        },
      },
      animation: {
        // "rotate-arrow": "rotateArrow",

        //  drawer
        "open-drawer": "drawerOpen 0.3s ease",
        "close-drawer": "drawerClose 0.3s ease",

        // submenus
        // "open-submenu": "setHeightAuto 0.5s linear",
        // "close-submenu": "setHeight0 0.5s linear",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave"],
  },
};
export default config;
