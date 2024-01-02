/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s infinite",
        slide: "slide 30s linear infinite",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        transparent: "rgba(0 0 0 / 0)",

        foreground: "rgb(243 2248 252)",

        primary: "rgb(var(--color-primary))",
        "primary--hover": "rgb(var(--color-primary--hover))",
        "primary--pressed": "rgb(var(--color-primary--pressed))",
        "primary--disabled": "rgb(var(--color-primary) / .5)",

        secondary: "rgb(var(--color-secondary))",
        "secondary--hover": "rgb(var(--color-secondary--hover))",
        "secondary--pressed": "rgb(var(--color-secondary--pressed))",
        "secondary--disabled": "rgb(var(--color-secondary) / .5)",

        default: "rgb(var(--color-default))",
        "default--hover": "rgb(var(--color-default--hover))",
        "default--pressed": "rgb(var(--color-default--pressed))",
        "default--disabled": "rgb(var(--color-default) / .5)",

        "light-bg-orange": "rgb(var(--color-light-bg-orange))",
        "light-bg-green": "rgb(var(--color-light-bg-green))",
        "dark-green": "rgb(var(--color-dark-green))",
        "dark-blue": "rgb(var(--color-dark-blue))",

        "soft-light": "rgb(var(--color-soft-light))",
        
        // Text
        op10: "rgb(var(--color-text) / .1)",
        op30: "rgb(var(--color-text) / .3)",
        op50: "rgb(var(--color-text) / .5)",
        op80: "rgb(var(--color-text) / .8)",
        op100: "rgb(var(--color-text))",
      },
      screens: {
        sm: "700px",
        md: "960px",
        lg: "1285px",
        xl: "1600px",
        xxl: "1920px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["NunitoRegular", "Sans serif"],
        nunitoRegular: ["NunitoRegular", "Sans serif"],
        nunitoBold: ["NunitoBold", "Sans serif"],
        robotoRegular: ["RobotoRegular", "Sans serif"],
        robotoBold: ["RobotoBold", "Sans serif"],
      },
      fontSize: {
        12: [
          "0.75rem",
          {
            lineHeight: "1.33",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.28",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "1.25",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "1.22",
          },
        ],
        20: [
          "1.25rem",
          {
            lineHeight: "1.2",
          },
        ],
        22: [
          "1.375rem",
          {
            lineHeight: "1.18",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "1.17",
          },
        ],
        26: [
          "1.625rem",
          {
            lineHeight: "1.15",
          },
        ],
        27: [
          "1.6875rem",
          {
            lineHeight: "1.19",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "1.14",
          },
        ],
        30: [
          "1.875rem",
          {
            lineHeight: "1.2",
          },
        ],
        32: [
          "2rem",
          {
            lineHeight: "1.125",
          },
        ],
        33: [
          "2.06rem",
          {
            lineHeight: "1.15",
          },
        ],
        36: [
          "2.25rem",
          {
            lineHeight: "1.11",
          },
        ],
        42: [
          "2.625rem",
          {
            lineHeight: "1.09s",
          },
        ],
      },
      spacing: {
        0: "0",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        16: "16px",
        18: "18px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        72: "72px",
        80: "80px",
        100: "100px",
        200: "200px",
      },
    },
  },
  plugins: [],
};
