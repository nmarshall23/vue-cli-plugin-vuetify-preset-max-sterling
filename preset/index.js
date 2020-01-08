require("./overrides.sass");

const preset = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#7986CB", //indigo lighten-2
        secondary: "#78909C", //blue-grey lighten-1
      },
      dark: {
        primary: '#3F51B5', // indigo 
        secondary: '#607D8B', // blue-grey 
      }
    }
  }
};

module.exports = { preset };
