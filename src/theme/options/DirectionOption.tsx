import {useRecoilValue} from 'recoil';
import {prefixer} from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import {useEffect, useMemo} from 'react';
import {AppDirection} from '@/atom/global/AppDirection';
import createCache from '@emotion/cache';

export default function DirectionOption() {
	const direction = useRecoilValue(AppDirection);

	const cacheRtl = createCache({
		key: 'mui-style-rtl',
		stylisPlugins: [prefixer, stylisRTLPlugin],
	});

	const cacheLtr = createCache({
		key: 'mui-style-ltr',
	});

	const dirCache = direction === 'rtl' ? cacheRtl : cacheLtr;

	useEffect(() => {
		document.dir = direction;
	}, [direction]);

	const dirTheme = useMemo(() => ({direction}), [direction]);

	return {dirTheme, dirCache};
}
