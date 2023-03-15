# yarn-vite-react-app

## 설치
```shell script
- 빌드툴 : Vite v4.1.0
- 패키지 관리 도구 : yarn
- 주요 라이브러리 : React, StoryBook, Emotion(Css)
```
```shell script
1. 프로젝트 설치(command)
yarn create vite [프로젝트 명] --template react-ts
```
```shell script
2. 스토리북 설치(command)
npx sb init --builder @storybook/builder-vite
* storybook init - the simplest way to add a Storybook to your project. 
위의 문장이 나왔을때 init (command)
>> .storybook 폴더 생성 및 package.json dependency 및 스크립트 추가
```
```shell script
3. Emotion 설치(command)
yarn add @emotion/styled @emotion/react emotion-reset
```
```shell script
4. Eslint / Prettier 설치
yarn add -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
* Typescript eslint 설치
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
* 설정 및 인텔리제이 세팅 참고 자료
- https://minjung-jeon.github.io/eslint-prettier-intellij/
- https://min33sky.github.io/posts/paths-tsconfig-setting/
```
