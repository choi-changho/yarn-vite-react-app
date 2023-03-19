# yarn-vite-react-app
> Vite 를 통해 개발한 React App 모듈
>
![Yarn Version][yarn-image]

- 빌드툴 : Vite v4.1.0
- 패키지 관리 도구 : yarn
- 언어 : JavaScript, TypeScript
- 주요 라이브러리 : React, StoryBook, Emotion(Css)

![](../header.png)

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
3. Emotion 설치(command)
```sh
yarn add @emotion/styled @emotion/react emotion-reset
```

4. Eslint / Prettier 설치
```sh
yarn add -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```
5. Typescript eslint 설치
```sh
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
> 설정 및 인텔리제이 세팅 참고 자료
> - https://minjung-jeon.github.io/eslint-prettier-intellij/
> - https://min33sky.github.io/posts/paths-tsconfig-setting/
6. axios 설치
```sh
yarn add axios
```
7. React Query 설치
```sh
yarn add react-query
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
4. 

## 개발 환경 설정

모든 개발 의존성 설치 방법과 자동 테스트 슈트 실행 방법을 운영체제 별로 작성합니다.

```sh
make install
npm test
```

## 업데이트 내역

* 0.2.1
    * 수정: 문서 업데이트 (모듈 코드 동일)
* 0.2.0
    * 수정: `setDefaultXYZ()` 메서드 제거
    * 추가: `init()` 메서드 추가
* 0.1.1
    * 버그 수정: `baz()` 메서드 호출 시 부팅되지 않는 현상 (@컨트리뷰터 감사합니다!)
* 0.1.0
    * 첫 출시
    * 수정: `foo()` 메서드 네이밍을 `bar()`로 수정
* 0.0.1
    * 작업 진행 중

## 정보

이름 – [@트위터 주소](https://twitter.com/dbader_org) – 이메일주소@example.com

XYZ 라이센스를 준수하며 ``LICENSE``에서 자세한 정보를 확인할 수 있습니다.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## 기여 방법

1. (<https://github.com/yourname/yourproject/fork>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요.
5. 풀리퀘스트를 보내주세요.

<!-- Markdown link & img dfn's -->
[yarn-image]: https://img.shields.io/badge/yarn-1.22.19-orange