module.exports = {
    content: ['./src/**/*.{html,js}'],
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#e53e3e',
            },
            height: {
                '400px': '400px',
                '600px': '600px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
