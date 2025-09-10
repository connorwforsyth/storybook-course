import type { Config } from "tailwindcss";

import { colors } from "./src/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {},
    backgroundColor: {
      ...colors.palette,
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
