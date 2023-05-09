// https://github.com/dilanx/craco/blob/master/packages/craco/README.md#configuration-file
// https://www.npmjs.com/package/craco-babel-loader
const path = require("path");
const CracoLessPlugin = require("craco-less");

const pathResolve = (pathUrl: string) => path.join(__dirname, pathUrl);

export default async function () {
  return {
    webpack: {
      alias: {
        "@": pathResolve("./src"),
      },
    },
    // 代理接口
    devServer: {
      // https: true,
      proxy: {
        "/api": {
          target: `https://uatapp02.easyhro.com`,
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      },
    },
    babel: {
      plugins: [
        {
          plugin: CracoLessPlugin,
        },
        [
          "formatjs",
          {
            idInterpolationPattern: "[sha512:contenthash:base64:6]",
            ast: true,
          },
        ],
      ],
    },
  };
}
