import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import _import from 'eslint-plugin-import';
import preferArrow from 'eslint-plugin-prefer-arrow';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/node_modules', '**/dist'],
  },
  ...fixupConfigRules(
    compat.extends(
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'eslint:recommended',
      'universe/native',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:jsdoc/recommended',
      'plugin:jsdoc/recommended-error',
      'plugin:jsdoc/recommended-typescript',
      'plugin:jsdoc/recommended-typescript-error',
      'universe/node',
      'universe/web',
      'prettier'
    )
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      'prefer-arrow': preferArrow,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'dot-notation': 'off',
      'import/export': 'off',
      'jsdoc/check-tag-names': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',

      'prefer-arrow/prefer-arrow-functions': [
        'warn',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],

      '@typescript-eslint/adjacent-overload-signatures': 'error',

      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],

      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            Object: {
              message: 'Avoid using the `Object` type. Did you mean `object`?',
            },

            Function: {
              message:
                'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
            },

            Boolean: {
              message:
                'Avoid using the `Boolean` type. Did you mean `boolean`?',
            },

            Number: {
              message: 'Avoid using the `Number` type. Did you mean `number`?',
            },

            String: {
              message: 'Avoid using the `String` type. Did you mean `string`?',
            },

            Symbol: {
              message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
            },
          },
        },
      ],

      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/member-ordering': 'off',

      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['constructors'],
        },
      ],

      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',

      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          path: 'always',
          types: 'prefer-import',
          lib: 'always',
        },
      ],

      '@typescript-eslint/unified-signatures': 'error',

      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],

      'comma-dangle': 'off',
      complexity: 'off',
      'constructor-super': 'error',
      curly: 'error',
      'eol-last': 'off',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'id-denylist': [
        'error',
        'any',
        'number',
        'string',
        'boolean',
        'Undefined',
        'undefined',
      ],
      'id-match': 'error',
      'import/order': 'off',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'max-classes-per-file': ['error', 13],
      'max-len': 'off',
      'new-parens': 'error',
      'no-bitwise': 'off',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-debugger': 'error',
      'no-empty': 'error',

      'no-empty-function': [
        'error',
        {
          allow: ['constructors'],
        },
      ],

      'no-eval': 'error',
      'no-fallthrough': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      'no-invalid-this': 'off',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-member-access': 'off',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'error',
      'no-use-before-define': 'off',
      'no-var': 'error',
      'object-curly-newline': 'error',
      'object-shorthand': 'off',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      quotes: ['warn', 'single'],
      radix: 'error',
      semi: 'error',

      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],

      'use-isnan': 'error',
      'valid-typeof': 'off',
      'jsdoc/no-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'import/no-unresolved': 'off',
      'no-constant-condition': 'off',
      'import/namespace': 0,
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
];
