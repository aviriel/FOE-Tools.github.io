import { projectConfig } from "marko-starter";

const isProduction = process.env.NODE_ENV === "production";

export default projectConfig({
  name: "foe-tools",
  lassoConfig: {
    bundlingEnabled: isProduction,
    fingerprintsEnabled: isProduction,
    minify: isProduction,
    noConflict: "foe_tools",
    require: {
      transforms: [
        {
          transform: "lasso-babel-transform",
          config: {
            extensions: [".js", ".es6"]
          }
        }
      ]
    }
  }
});
