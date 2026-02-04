// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import type { Linter } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
/**
 * Presets oficiais do Next.js:
 * - core-web-vitals → performance + acessibilidade + boas práticas React
 * - typescript → regras recomendadas para TS integradas ao ecossistema Next
 */
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
/**
 * Integração com Prettier:
 * Desativa regras de formatação que conflitam com Prettier.
 * ESLint cuida de qualidade, Prettier cuida de estilo.
 * Deve ser aplicado após presets.
 */
import prettier from 'eslint-config-prettier';
/**
 * Plugins de qualidade e arquitetura:
 * - boundaries → regras de dependência entre camadas
 * - import → integridade de imports e resolver TS
 * - simple-import-sort → ordenação automática de imports
 * - unused-imports → remoção automática de código morto
 */
import boundaries from 'eslint-plugin-boundaries';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import unusedImports from 'eslint-plugin-unused-imports';

/**
 * Configuração reutilizável para variáveis não usadas:
 * Permite prefixo "_" para indicar variável intencionalmente não utilizada
 * (útil em handlers, interfaces e destructuring parcial)
 */
const UNUSED_VARS_CONFIG = {
  vars: 'all',
  varsIgnorePattern: '^_',
  args: 'after-used',
  argsIgnorePattern: '^_',
};

/**
 * Arquivos/pastas ignorados globalmente pelo lint
 * Evita custo de análise e falsos positivos em artefatos de build
 */
const DEFAULT_IGNORES = ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'];

export default defineConfig([
  /**
   * Presets base do Next + TypeScript
   */
  nextVitals,
  nextTs /**
   * Configuração principal de plugins, settings e regras customizadas
   */,
  {
    /**
     * Plugins registrados explicitamente no Flat Config
     */
    plugins: {
      boundaries,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },

    /**
     * Settings de plugins
     */

    settings: {
      /**
       * Definição das camadas arquiteturais do projeto.
       * Usado pelo plugin boundaries para restringir dependências entre camadas.
       */
      'boundaries/elements': [
        { type: 'shared', pattern: 'src/shared/*' },
        { type: 'features', pattern: 'src/features/*' },
        { type: 'app', pattern: 'src/app/*' },
      ],

      /**
       * Resolver de imports via TypeScript:
       * Permite que eslint-plugin-import entenda aliases do tsconfig
       */
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },

    /**
     * Regras de organização de imports
     */
    rules: {
      /**
       * Ordena imports automaticamente em grupos estáveis → diffs menores em PR
       */
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      /**
       * Evita importar o mesmo módulo duas vezes no arquivo
       */
      'import/no-duplicates': 'error',

      /**
       * Evita imports relativos profundos (../../../../),
       * incentivando uso de aliases (@/shared, @/features, etc)
       * → melhora legibilidade e refactor safety
       */
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../..*'],
              message: 'Use path aliases (@/shared, @/features, etc) instead of deep relative imports',
            },
          ],
        },
      ],

      /**
       * Regras de limpeza de código morto
       */

      /**
       * Desliga regras padrão para evitar conflito com plugin dedicado
       */
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      /**
       * Remove imports não utilizados automaticamente (auto-fix)
       */
      'unused-imports/no-unused-imports': 'error',

      /**
       * Marca variáveis não usadas (com exceção de "_" prefixado)
       */
      'unused-imports/no-unused-vars': ['warn', UNUSED_VARS_CONFIG],

      /**
       * Regras TypeScript
       */

      /**
       * Força uso de `import type` quando possível:
       * melhora legibilidade e evita incluir tipos no bundle JS
       */
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],

      /**
       * Regras de arquitetura (boundaries)
       *
       * features → só pode usar shared
       * shared → só pode usar shared
       * app → pode usar features e shared
       *
       * Evita acoplamento lateral entre features e mantém isolamento de domínio.
       */
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'shared', allow: ['shared'] },
            { from: 'features', allow: ['shared'] },
            { from: 'app', allow: ['shared', 'features'] },
          ],
        },
      ],

      /**
       * Regras de linguagem e boas práticas JS
       */

      /**
       * Força uso de const quando não há reatribuição
       */
      'prefer-const': 'error',

      /**
       * Proíbe var (escopo confuso / hoisting)
       */
      'no-var': 'error',

      /**
       * Permite console no dev, alerta em produção
       * útil para não poluir logs de runtime
       */
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  } /**
   * Integração com Prettier (deve vir depois dos presets e regras)
   */,
  prettier /**
   * Ignores globais
   */,
  globalIgnores(DEFAULT_IGNORES),

  // Storybook (tipagem incompatível com ESLint 9 — cast intencional)
...(storybook.configs['flat/recommended'] as unknown as Linter[]).map(
  (config) => ({
    ...config,
    files: ['**/*.stories.ts', '**/*.stories.tsx'],
  }),
),
]);
