require("./overrides.sass");

const preset = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#7986CB', //indigo lighten-2
        secondary: '#0097A7', // cyan darken-2
      },
      dark: {
        primary: '#3F51B5', // indigo 
        secondary: '#0097A7', // cyan darken-2
      }
    }
  }
};

module.exports = { preset };
