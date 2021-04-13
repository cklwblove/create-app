# @winner-fed/create-app

## Scaffolding Your Project

> **Compatibility Note:**
> Vite requires [Node.js](https://nodejs.org/en/) version >=12.0.0.

With NPM:

```bash
$ npm init @winner-fed/app
```

With Yarn:

```bash
$ yarn create @winner-fed/app
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vue project, run:

```bash
# npm 6.x
npm init @winner-fed/app my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm init @winner-fed/app my-vue-app -- --template vue

# yarn
yarn create @winner-fed/app my-vue-app --template vue
```

Currently supported template presets include:

- `vue`
- `vue-ts`
- `vue-vite`
- `taro-mp`

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```     

## inspire
- [vitejs/create-app](https://github.com/vitejs/vite) 
