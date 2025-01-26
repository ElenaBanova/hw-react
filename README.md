# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

// все берем из документации АРI;
// 1.create models;
// 2.copy refresh with API/doc -> set in models/ITokenPair.ts;
//3.+модель данных масива которы будем использовать;
//4.1.формирует routes;
//4.2.layouts;
//4.3.create page;
//5. Create components
//6. создаем логику на логин странице в соотвестствуюшем компоненте
//7. создвем сервич с axios
//7.1. post запит
//7.2. save запит (сохранять моєно тремя способами: Localstorege, Куки, SeshionStorege(кратковременная, пока работает браузер,потом читится));
//8. создаем процeс в Auth.... имея полученый токен данные выводить продуктов но с аутентификаваной точки;
//8.1 в сервисе создаем load(), save ...;
//8.2. возвращаемся в Аuth... и добавляем проверки