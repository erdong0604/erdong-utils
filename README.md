  

  ### 安装

  Using npm :
  ```bash
  npm install erdong-utils
  ```
  Using yarn :
  ```bash
  yarn add erdong-utils
  ```
  ## 配置

  推荐按需引入，后编译，需先安装 eslint-plugin-import 

  ```bash
  npm install eslint-plugin-import -D
  ```

  `babel.config.js`

  ```javascript
  module.exports = {
    plugins: [
      [
        "import",
        {
          libraryName: "erdong-utils",
          libraryDirectory: process.env.NODE_ENV === "production" ? "lib" : "src", //生产环境使用lib下文件，本地环境使用src下文件
          camel2DashComponentName: false, // default: true，将引入的组件名转化为"-"连接的文件名
          style: false, // 不需要css
        },
        "erdong-utils",
      ],
    ],
  };
  ```


  ## 使用

  1. 按需使用(需先按照上述配置成功)
  ```javascript
  import { guid } from 'erdong-utils';
  ```
  2. 全量使用(不需配置)
  ```javascript
  import utils from 'erdong-utils';
  ```
  ## 已有工具方法说明

  - guid 生成uuid
  - randomNumber 生成任意位数随机数(数字)