import { IconProps } from './icon_props'

export const IconPencil = ({ className, color = '#CECECE' }: IconProps) => {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16 4L20.2426 8.24264L10.0603 18.425L5.3934 18.8492L5.81766 14.1823L16 4Z" fill={color}/>
        </svg>
    );
}
