# eslint-config

## 安装

```
yarn add @yiyuana/eslint-config -D
```

## 基础版

支持 .js、.ts

### 使用

```
// .eslintrc.js
module.exports = {
  extends: ["@yiyuana/eslint-config"]
};
```

## React

支持.js、.ts、.jsx、.tsx

### 先添加依赖

```
yarn add eslint-plugin-import \
eslint-plugin-react \
eslint-plugin-react-hooks \
eslint-plugin-jsx-a11y -D
```

### 使用

```
// .eslintrc.js
module.exports = {
  extends: ["@yiyuana/eslint-config/react"]
};
```

## React Native

支持.js、.ts、.jsx、.tsx

### 先添加依赖

```
yarn add eslint-plugin-import \
eslint-plugin-react \
eslint-plugin-react-hooks \
eslint-plugin-jsx-a11y \
eslint-plugin-react-native -D
```

### 使用

```
// .eslintrc.js
module.exports = {
  extends: ["@yiyuana/eslint-config/react"]
};
```
