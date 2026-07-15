module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'standard',      /* JavaScriptの標準的な高クオリティなルールを適用 */
    'prettier'       /* Prettierと衝突するルールを無効化 */
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    // ここに個別のカスタムルール（警告を無視するなど）を書くことができます
  }
}