const {
  injectGoogleFontLink,
  VuetifyPresetGenerator
} = require("@vuetify/cli-plugin-utils");

module.exports = api => {
  VuetifyPresetGenerator(api, "maxSterling", () => {
    injectGoogleFontLink(api, "Exo+2:500,700");
  });
};
