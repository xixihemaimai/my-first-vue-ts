// eslint.config.js
import globals from 'globals';
import pluginJs from '@eslint/js'; // 修正导入路径

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx,vue}'], // 包含项目中需要检查的文件类型
        ignores: [
            // 替代原来的.eslintignore
            'node_modules/',
            'dist/',
            'build/',
            'coverage/',
            '*.config.js', // 可忽略配置文件
        ],
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
];
