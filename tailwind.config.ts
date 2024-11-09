import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/components/(card|input|ripple).js"],
  theme: {
    extend: {
      colors: {
        "background-color": "#F8F7F5",
        "primary-color": "#FFCC00",
        "secondary-color": "#00D9A5",
        "accent-color": "#FFC84A",
        "text-color": "#333333",
        "secondary-text-color": "#555555",
        "background-dark-color": "#181A1B",
      },
      lineHeight: {
        "120": "1.2",
        "130": "1.3",
        "140": "1.4",
        "160": "1.6",
      },
      boxShadow: {
        "shadow-custom": "0px 5px 20px rgba(0, 67, 101, 0.08)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
