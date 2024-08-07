/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                    950: "#172554",
                },
                custom: {
                    cyanLight: "#00CCC0",
                    cyanLighter: "#72F2EB",
                    cyanDark: "#1B7F79",
                    redLight: "#FF3344",
                    gray: "#747F7F",
                },
            },
            screens: {
                xs: "400px",
            },
        },
        fontFamily: {
            body: [
                "Roboto",
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "system-ui",
                "Segoe UI",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
            sans: [
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "system-ui",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
        },
    },
    plugins: [require("flowbite/plugin")],
};
