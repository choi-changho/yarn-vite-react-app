import {atom, selector, useRecoilState, useRecoilValue} from 'recoil';
import {ChangeEvent} from 'react';

const textState = atom({
	key: 'textState',
	default: '',
});

function TextInput() {
	const [text, setText] = useRecoilState(textState);
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	return (
		<div>
			<input type='text' value={text} onChange={onChange} />
			<br />
			Echo: {text}
		</div>
	);
}

const charCountState = selector({
	key: 'charCountState',
	get: ({get}) => {
		const text = get(textState);
		return text.length;
	},
});

function CharacterCount() {
	const count = useRecoilValue(charCountState);
	return <>Character Count : {count}</>;
}

export default function CharacterCounter() {
	return (
		<div>
			<TextInput />
			<CharacterCount />
		</div>
	);
}
