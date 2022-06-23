import { Configuration } from "webpack";
import { join } from "path";

const config: Configuration = {
  entry: "./src/index.ts",
  output: { path: join(process.cwd(), "dist"), filename: "index.js" },
  target: "node",
  optimization: { usedExports: false },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".mjs", ".wasm", ".json"],
    alias: {
      "~rest": join(process.cwd(), "src", "rest"),
      "~discord": join(process.cwd(), "src", "discord"),
      "~webSocket": join(process.cwd(), "src", "webSocket"),
      "~tello": join(process.cwd(), "src", "tello"),
      "~wifi": join(process.cwd(), "src", "wifi"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        include: join(process.cwd(), "src"),
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-typescript"] },
          },
        ],
      },
    ],
  },
};
export default config;
