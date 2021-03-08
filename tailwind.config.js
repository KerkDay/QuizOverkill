module.exports = {
  purge: [
    "*.css",
    "*.html",
    "*.scss"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '32': '8rem',
      },
      maxHeight: {
        '32': '8rem',
      },
      maxWidth: {
        '32': '8rem',
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
   translate: true,
  }
}
