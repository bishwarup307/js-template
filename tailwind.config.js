/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        container: {
            center: true,
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
            dxl: "1980px",
        },
        extend: {
            keyframes: {
                spin: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                "slow-spin": "spin 3s linear infinite", // Custom spin duration of 3 seconds
            },
            backgroundImage: {
                hero: "url('/src/assets/hero.png')",
            },
            fontFamily: {
                // Add your fonts
                sans: ["Inter", "sans-serif"],
                fa: "Font Awesome 5 Free",
            },
            colors: {
                // Add your custom colors
                textPrimary: "hsl(197, 94%, 10%)", // 	#022431
                bgPrimary: "hsl(211, 70%, 20%)",
                accent: "hsl(196, 24%, 46%)",
                "accent-600": "hsl(196, 24%, 76%)",
                ashGray: "hsl(126, 15%, 72%)",
                beige: "hsl(79, 55%, 92%)",
            },
            boxShadow: {
                // Add custom shadow configs
                custom: "inset 6px 0px var(--shadow-color), 2px 2px 10px var(--shadow-color-alpha), 0px 6px 10px var(--shadow-color-alpha)",
            },
        },
    },
    // Add your custom plugins
    // plugins: ["flowbite/plugin"],
};
