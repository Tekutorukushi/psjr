import { IconProps } from './icon_props'

export const IconSpeaker = ({ className, color = '#CECECE' }: IconProps) => {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M16 19L16 5L8.97727 9.46901C7.12477 10.6479 7.12476 13.3521 8.97726 14.531L16 19Z" fill="#FFB700"/>
			<rect x="18" y="8" width="2" height="8" fill={color} />
		</svg>

	);
}
