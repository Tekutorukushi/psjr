import { IconProps } from './icon_props'

export const IconPhoto = ({ className, color = '#CECECE' }: IconProps) => {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M6 4C5.44772 4 5 4.44772 5 5V18C5 18.5523 5.44772 19 6 19H19C19.5523 19 20 18.5523 20 18V5C20 4.44772 19.5523 4 19 4H6ZM12.5 15C14.433 15 16 13.433 16 11.5C16 9.567 14.433 8 12.5 8C10.567 8 9 9.567 9 11.5C9 13.433 10.567 15 12.5 15Z" fill={color}/>
		</svg>
	);
}
