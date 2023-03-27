# yarn-vite-react-app

> Vite 를 통해 개발한 React App 모듈
>
![Yarn Version][yarn-image]

- 빌드툴 : Vite v4.1.0
- 패키지 관리 도구 : yarn
- 언어 : JavaScript, TypeScript
- 주요 라이브러리 : React, StoryBook, Emotion(Css), React-Query, Recoil

[//]: # (![]&#40;../header.png&#41;)

## 설치 방법

1. 프로젝트 설치

```sh
yarn create vite [프로젝트 명] --template react-ts
```

2. 스토리북 설치:

```sh
npx sb init --builder @storybook/builder-vite
yarn add --dev @storybook/builder-vite
```

> storybook init - the simplest way to add a Storybook to your project.
>
> 위의 문장이 나왔을때 init (command)
>
> .storybook 폴더 생성 및 package.json dependency 및 스크립트 추가
>
>* ^6.5.16 버전 현재 React 18 지원 X => peer dependency 에러

3. Eslint / Prettier 설치

```sh
yarn add -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

4. Typescript eslint 설치

```sh
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

> 설정 및 인텔리제이 세팅 참고 자료
> - https://minjung-jeon.github.io/eslint-prettier-intellij/
> - https://min33sky.github.io/posts/paths-tsconfig-setting/

5. Lint Staged

```sh
yarn add -D lint-staged
```

> 설정 관련 참고 URL
> - https://luniverse.io/2021/05/12/simple-git-hooks/?lang=ko

6. axios 설치

```sh
yarn add axios
```

7. React Query 설치

```sh
yarn add react-query
```

8. Recoil 설치

```sh
yarn add recoil
```

9. React Router 설치

```sh
yarn add react-router-dom
```

10. MUI 설치

```sh
yarn add @mui/material @emotion/react @emotion/styled
# MUI Default Font
yarn add @fontsource/roboto 
yarn add @mui/icons-material
```

11. Lodash 설치

```sh
yarn add lodash
yarn add -D @types/lodash
```

12. Emotion 관련 라이브러리 설치

```sh
yarn add stylis stylis-plugin-rtl @emotion/cache
yarn add -D @types/stylis
```

## 사용 예제

1. 개발계 실행

```sh
yarn dev
```

2. Story Book 실행

```sh
yarn storybook
```

3. Node Module 제거 (StoryBook 설치로 인한 python 파일 Read lock 걸려있는 상태)

```sh
cd ~/IdeaProjects/yarn-vite-react-app/
rm -rf node_modules
```

<!-- Markdown link & img dfn's -->

[yarn-image]: https://img.shields.io/badge/yarn-1.22.19-orange