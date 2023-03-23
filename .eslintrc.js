module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
	],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		// 0 false, 1 warn, 2 error
		'prettier/prettier': [2],
		// indent: [2, 'tab'], // indent는 tab으로 통일
		'linebreak-style': [2, 'unix'], // LF
		'import/no-extraneous-dependencies': ['error', {devDependencies: true}], // Dev Dependency lint 에러 끄기
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				json: 'never',
			},
		], // import 시 extensions 체크 에러 끄기
		'import/prefer-default-export': 0, // 하나의 파일에서 단일로 export 하는 경우에 대한 경고 끄기
		'for-direction': 2, // for 루프가 무한대로 실행되는 것을 방지
		'no-undef': 2,
		'no-console': 2,
		'no-empty': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-unreachable': 2,
		'no-unused-vars': 'warn', // 정의 후 사용하지 않은 변수는 경고만 하기
		'no-use-before-define': 1, // 정의 전에 사용 금지
		'no-param-reassign': 0, // 파라미터는 지역변수로 받아서 쓰라는 rule
		'react/jsx-indent': [2, 'tab'], // jsx에서도 indent tab으로 통일
		'react/jsx-key': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-undef': 2,
		'react/jsx-uses-vars': 2,
		'react/no-children-prop': 2,
		'react/no-deprecated': 2, // react version 감지하여 deprecated 된 함수 경고
		'react/no-direct-mutation-state': 2, // state 를 직접 바꾸지 않게하기 위한 옵션
		'react/no-is-mounted': 2,
		'react/no-render-return-value': 2,
		'react/no-unknown-property': 2,
		'react/require-render-return': 2, // render method를 작성할때 return 이 없으면 경고
		'react/jsx-filename-extension': [1, {extensions: ['.tsx']}], // jsx에서 tsx 파일 쓸려고 할때 에러
		'react/react-in-jsx-scope': 0, // vite react plugin에서 자동으로 주입하기 때문에 제거
		'react/require-default-props': 0, // component default prop 지정에 대한 경고 제거
		'react/jsx-props-no-spreading': 1, // props로 받은 것 바로 props로 넘기기 허용
		'react/function-component-definition': 0, // react 함수형 컴포넌트 정의 방식 선언
		'react/no-unescaped-entities': 0, // react jsx 내 따옴표 escape 여부
		// 'react/prop-types': 1,
	},
};
