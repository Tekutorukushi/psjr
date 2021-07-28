import clsx from 'clsx';

import style from './input_search.module.scss';

interface InputSearchProps {
	placeholder?: string;
	className?: string;
}

export const InputSearch = ({placeholder, className}: InputSearchProps) => {
	return (
		<div className={clsx(style.root, className)}>
			<button />
			<input placeholder={placeholder} />
		</div>
	)
}