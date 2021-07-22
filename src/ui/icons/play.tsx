import { IconProps } from './icon_props'

export const IconPlay = ({ className, color = '#CECECE' }: IconProps) => {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7 5V19L18 12L7 5Z" fill={color}/>
		</svg>

	);
}
