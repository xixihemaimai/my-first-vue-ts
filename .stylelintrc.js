// .stylelintrc.js
module.exports = {
  // 继承的配置
  extends: [
    // Stylelint 标准规则集，包含了许多最佳实践规则
    // 'stylelint-config-standard', // stylelint-config-standard-vue 已经包含了它
    // 适用于 Vue 的 Stylelint 配置，处理 <style> 标签和 .vue 文件
    'stylelint-config-standard-vue', // 需要 npm install --save-dev stylelint-config-standard-vue
    // 关键：放在最后，用于关闭与 Prettier 冲突的 Stylelint 规则
    'stylelint-config-prettier', // 需要 npm install --save-dev stylelint-config-prettier
  ],
  // 使用的插件 (如果有需要)
  // plugins: [
  //   'stylelint-order', // 例如，强制属性排序
  // ],
  // 解析 .vue 文件中的 <style> 标签
  // `stylelint-config-standard-vue` 通常会自动处理这个，但显式指定有时更清晰
  // 注意: postcss-html 是必须的，我们已经安装了
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html', // 指定解析 .vue 文件的语法
    },
    // 如果你还用 SCSS 或 Less
    // {
    //   files: ["**/*.scss"],
    //   customSyntax: "postcss-scss" // 需要 npm install --save-dev postcss-scss
    // },
    // {
    //   files: ["**/*.less"],
    //   customSyntax: "postcss-less" // 需要 npm install --save-dev postcss-less
    // }
  ],
  // 自定义规则
  rules: {
    // === Stylelint 核心规则自定义 ===
    'selector-class-pattern': null, // 不强制类名选择器的模式 (例如 BEM)，根据需要设置，例如：'^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$'
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }], // 忽略 Vue 的 :deep 和 :global
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'] }], // 忽略 Vue 的 ::v-deep 等
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'] }], // 忽略 Tailwind CSS 的 @ 指令
    'rule-empty-line-before': [
      'always',
      {
        // 在规则之前总是需要空行（除了第一个规则和在@规则块内的规则）
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'unit-no-unknown': true, // 禁止未知的单位
    'block-no-empty': true, // 禁止空块
    'no-descending-specificity': null, // 允许特异性较低的选择器出现在较高的选择器之后 (有时难以避免)
    'font-family-no-missing-generic-family-keyword': null, // 不强制要求字体族必须有通用族关键字 (如 sans-serif)

    // === Vue (<style scoped>) 相关规则 (通常由 stylelint-config-standard-vue 处理) ===
    // 确保 scoped 样式中的选择器是有效的

    // === 自定义规则示例 ===
    // 颜色值必须使用小写十六进制或 rgb/rgba
    'color-hex-case': 'lower',
    'color-function-notation': 'legacy', // 使用旧版逗号分隔的 rgb()/rgba() 而不是现代空格分隔的语法，根据兼容性需求选择 'modern'
    // 禁止使用 ID 选择器
    'selector-max-id': 0,
    // 限制选择器的嵌套深度
    'max-nesting-depth': [3, { ignore: ['pseudo-classes'] }], // 嵌套深度最多 3 层，忽略伪类
    // 禁止使用 !important
    'declaration-no-important': true,

    // === 如果使用 stylelint-order 插件 ===
    // 'order/properties-order': [ // 定义 CSS 属性的书写顺序
    //   'position',
    //   'top',
    //   'right',
    //   'bottom',
    //   'left',
    //   'z-index',
    //   'display',
    //   // ... 更多属性
    // ],
  },
  // 忽略文件配置 (也可以使用 .stylelintignore 文件)
  ignoreFiles: [
    'node_modules/**/*',
    'dist/**/*',
    'public/**/*',
    '*.min.css',
    '*.md',
    // 其他需要忽略的文件
  ],
  // 默认严重性级别 ("warning" 或 "error")
  defaultSeverity: 'error',
};
