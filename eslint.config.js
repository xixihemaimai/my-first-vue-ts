import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
    // 忽略文件配置
    {
        ignores: [
            'node_modules/',
            'dist/',
            'build/',
            'coverage/',
            '*.config.js',
            '.eslintignore', // 明确忽略旧的ignore文件
        ],
    },
    // JavaScript配置
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            js: pluginJs,
        },
        rules: {
            'no-console': 'warn',
            indent: ['error', 2],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-unused-vars': 'warn',
        },
    },
    // Vue文件配置
    ...pluginVue.configs['flat/essential'], // Vue基础规则
    {
        files: ['**/*.vue'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            // 移除已废弃的 "vue/script-setup-uses-vars" 规则
            'vue/multi-word-component-names': 'warn', // 组件名建议多单词
            'vue/no-unused-vars': 'warn',
            // 新增一些常用的Vue规则
            'vue/attribute-hyphenation': 'warn', // 属性使用连字符
            'vue/html-self-closing': 'warn', // 自闭合标签
        },
    },
];
