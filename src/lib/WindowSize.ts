import { useEffect, useState } from 'react';

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0
	});

	const onResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight
		});
	};

	useEffect(() => {
		window.addEventListener("resize", onResize);

		onResize();

		return () => window.removeEventListener("resize", onResize);
	}, []);

	return windowSize;
}