import type { Config } from "tailwindcss";

import { colors } from "./src/tokens/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors.palette,
    },
    backgroundColor: {
      ...colors.backgroundColor,
    },
    textColor: {
      ...colors.textColor,
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
} satisfies Config;
