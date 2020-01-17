const {
  injectGoogleFontLink,
  VuetifyPresetGenerator
} = require("@vuetify/cli-plugin-utils");

module.exports = api => {
  VuetifyPresetGenerator(api, "max-sterling", () => {
    injectGoogleFontLink(api, "Exo+2:400,500,700");
  });
};
