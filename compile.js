const { build } = require("esbuild");
const glob = require("glob");
const { dependencies,devDependencies } = require("./package.json");

(() => {
  const entryPoints = glob.sync("./src/**/*.{ts,tsx}");

  Promise.all([
    build({
      format: "cjs",
      entryPoints,
      outdir: "./dist/node",
      minify: true,
      sourcemap: true,
      target: "es2015",
      platform: "node",
    }),
    build({
      entryPoints,
      format: "esm",
      outdir: "./dist",
      minify: true,
      sourcemap: true,
      target: "es2015",
      platform: "browser",
    }),
  ]);
})();
