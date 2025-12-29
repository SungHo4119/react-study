import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      // 자바스크립트 권장 설정
      js.configs.recommended,
      // 리엑트 훅 권장 설정
      reactHooks.configs.flat.recommended,
      // 리엑트 리프레시 권장 설정
      reactRefresh.configs.vite,
    ],
    // 리엑트 환경 설정
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // 대문자 또는 언더스코어로 시작하는 변수는 사용하지 않아도 오류를 발생시키지 않음
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // 실제로 사용하지 않는 변수가 존재할때 오류를 발생시킴
      'no-unsed-vars': 'off',
      // 리엑트를 안전하게 사용하기 위해 prop-types 사용을 강제하지만 강의 임으로 임시로 비활성화
      'react/prop-types': 'off',
    },
  },
]);
