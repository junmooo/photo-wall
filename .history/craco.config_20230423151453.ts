/* eslint-disable import/no-anonymous-default-export */
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
          target: `http://127.0.0.1:8088/`,
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      },
    },
    plugins: [
      {
        plugin: CracoLessPlugin,
      },
    ],
    babel: {
      plugins: [
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
