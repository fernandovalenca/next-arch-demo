import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  /**
   * Base oficial de Conventional Commits
   *
   * Fornece parsing + regras padrão como:
   * type(scope): subject
   *
   * Exemplos válidos:
   * feat(auth): add oauth login
   * fix(cart): correct price rounding
   */
  extends: ['@commitlint/config-conventional'],

  /**
   * Esses commits não passam pelo lint.
   * Usado para bots, merges automáticos e commits técnicos.
   */
  ignores: [
    /**
     * Dependabot / Renovate commits automáticos
     *
     * Exemplo ignorado:
     * chore(deps): bump next from 14 to 15
     * Signed-off-by: dependabot[bot]
     */
    (commit) => commit.includes('Signed-off-by: dependabot[bot]'),
    (commit) => commit.includes('Signed-off-by: renovate[bot]'),

    /**
     * Work in progress local
     *
     * Exemplo ignorado:
     * wip: tentando corrigir bug de login
     */
    (commit) => commit.startsWith('wip:'),

    /**
     * Flags de CI
     *
     * Exemplo ignorado:
     * feat: add feature toggle [skip ci]
     */
    (commit) => commit.includes('[skip ci]'),
    (commit) => commit.includes('[skip lint]'),

    /**
     * Commits automáticos do git
     *
     * Exemplo ignorado:
     * Merge branch 'main'
     * Revert "feat(auth): add oauth"
     */
    (commit) => commit.startsWith('Merge'),
    (commit) => commit.startsWith('Revert'),
  ],

  rules: {
    /**
     * Tipos permitidos de commit
     *
     * Estrutura:
     * type(scope): subject
     *
     * Exemplos válidos:
     * feat(ui): add button component
     * fix(api): handle 500 error
     * docs(readme): update setup guide
     *
     * Exemplos inválidos:
     * feature: add login
     * bugfix: crash
     */
    'type-enum': [
      2,
      'always',
      [
        'feat', // nova funcionalidade
        'fix', // correção de bug
        'docs', // documentação
        'style', // formatação (sem mudança lógica)
        'refactor', // refatoração
        'test', // testes
        'chore', // manutenção
        'perf', // performance
        'ci', // pipeline
        'revert', // revert
        'build', // build tooling
      ],
    ],

    /**
     * Não permite commit sem tipo
     *
     * Inválido:
     * (auth): add login
     */
    'type-empty': [2, 'never'],

    /**
     * Scope deve estar em kebab-case
     *
     * Exemplos válidos:
     * feat(auth-api): add token refresh
     * fix(user-profile): avatar upload
     *
     * Exemplos inválidos:
     * feat(AuthApi): add login
     * feat(userProfile): edit
     */
    'scope-case': [2, 'always', 'kebab-case'],

    // /**
    //  * Escopos permitidos no projeto
    //  * — padroniza domínio e facilita changelog
    //  *
    //  * Exemplos válidos:
    //  * feat(auth): add login
    //  * chore(deps): update react
    //  * fix(ui): button overflow
    //  *
    //  * Exemplos inválidos:
    //  * feat(random): change stuff
    //  */
    // 'scope-enum': [2, 'always', ['config', 'deps', 'auth', 'ui', 'api', 'db', 'lint', 'test', 'docs', 'ci', 'release']],

    /**
     * Subject não pode estar vazio
     *
     * Inválido:
     * feat:
     * feat(auth):
     */
    'subject-empty': [2, 'never'],

    /**
     * Limite de tamanho da descrição
     *
     * Ajuda legibilidade em git log / PRs
     *
     * Válido:
     * feat(auth): add oauth login flow
     *
     * Inválido:
     * feat(auth): add a very very very very very very very very very very long description
     */
    'subject-max-length': [2, 'always', 100],

    /**
     * Formato de capitalização do subject
     * Times grandes frequentemente desativam para reduzir fricção:
     * 'subject-case': [0]
     */
    'subject-case': [0],

    /**
     * Limite total do header
     *
     * Estrutura:
     * type(scope): subject
     *
     * Ajuda em:
     * - git log
     * - squash merges
     * - changelog automático
     */
    'header-max-length': [2, 'always', 100],
  },
};

export default config;
