import clsx from 'clsx';

import { ButtonProps } from './button_props'
import style from './button_animation.module.scss';

export const ButtonAnimationCountry = ({ onClick }: ButtonProps) => {
	return (
		<div className={clsx(style.button, style.button_country)} onClick={onClick}>
			<div className={style.wrapper}>
				<div className={style.video}>
					<video playsInline autoPlay muted loop>
						<source src='./button-bg.webm' type='video/webm'/>
					</video>
				</div>
				<svg className={style.svg} width="166" height="42" viewBox="0 0 166 42" fill="none" xmlns="http://www.w3.org/2000/svg">
					<clipPath id='mask-country'>
						<path d="M10.296 20.43C11.064 20.658 11.652 21.03 12.06 21.546C12.468 22.062 12.672 22.698 12.672 23.454C12.672 24.57 12.246 25.44 11.394 26.064C10.554 26.688 9.348 27 7.776 27H1.566V14.4H7.434C8.898 14.4 10.038 14.682 10.854 15.246C11.67 15.81 12.078 16.614 12.078 17.658C12.078 18.282 11.922 18.834 11.61 19.314C11.298 19.782 10.86 20.154 10.296 20.43ZM4.464 19.62H7.182C7.818 19.62 8.298 19.494 8.622 19.242C8.946 18.978 9.108 18.594 9.108 18.09C9.108 17.598 8.94 17.22 8.604 16.956C8.28 16.692 7.806 16.56 7.182 16.56H4.464V19.62ZM7.668 24.84C9.036 24.84 9.72 24.3 9.72 23.22C9.72 22.176 9.036 21.654 7.668 21.654H4.464V24.84H7.668ZM19.5501 27.144C18.5181 27.144 17.5881 26.934 16.7601 26.514C15.9441 26.082 15.3021 25.488 14.8341 24.732C14.3781 23.976 14.1501 23.118 14.1501 22.158C14.1501 21.198 14.3781 20.34 14.8341 19.584C15.3021 18.828 15.9441 18.24 16.7601 17.82C17.5881 17.388 18.5181 17.172 19.5501 17.172C20.5701 17.172 21.4581 17.388 22.2141 17.82C22.9821 18.24 23.5401 18.846 23.8881 19.638L21.7101 20.808C21.2061 19.92 20.4801 19.476 19.5321 19.476C18.8001 19.476 18.1941 19.716 17.7141 20.196C17.2341 20.676 16.9941 21.33 16.9941 22.158C16.9941 22.986 17.2341 23.64 17.7141 24.12C18.1941 24.6 18.8001 24.84 19.5321 24.84C20.4921 24.84 21.2181 24.396 21.7101 23.508L23.8881 24.696C23.5401 25.464 22.9821 26.064 22.2141 26.496C21.4581 26.928 20.5701 27.144 19.5501 27.144ZM35.0654 22.194C35.0654 22.23 35.0474 22.482 35.0114 22.95H27.6854C27.8174 23.55 28.1294 24.024 28.6214 24.372C29.1134 24.72 29.7254 24.894 30.4574 24.894C30.9614 24.894 31.4054 24.822 31.7894 24.678C32.1854 24.522 32.5514 24.282 32.8874 23.958L34.3814 25.578C33.4694 26.622 32.1374 27.144 30.3854 27.144C29.2934 27.144 28.3274 26.934 27.4874 26.514C26.6474 26.082 25.9994 25.488 25.5434 24.732C25.0874 23.976 24.8594 23.118 24.8594 22.158C24.8594 21.21 25.0814 20.358 25.5254 19.602C25.9814 18.834 26.5994 18.24 27.3794 17.82C28.1714 17.388 29.0534 17.172 30.0254 17.172C30.9734 17.172 31.8314 17.376 32.5994 17.784C33.3674 18.192 33.9674 18.78 34.3994 19.548C34.8434 20.304 35.0654 21.186 35.0654 22.194ZM30.0434 19.296C29.4074 19.296 28.8734 19.476 28.4414 19.836C28.0094 20.196 27.7454 20.688 27.6494 21.312H32.4194C32.3234 20.7 32.0594 20.214 31.6274 19.854C31.1954 19.482 30.6674 19.296 30.0434 19.296ZM47.2835 27.144C46.2515 27.144 45.3215 26.934 44.4935 26.514C43.6775 26.082 43.0355 25.488 42.5675 24.732C42.1115 23.976 41.8835 23.118 41.8835 22.158C41.8835 21.198 42.1115 20.34 42.5675 19.584C43.0355 18.828 43.6775 18.24 44.4935 17.82C45.3215 17.388 46.2515 17.172 47.2835 17.172C48.3035 17.172 49.1915 17.388 49.9475 17.82C50.7155 18.24 51.2735 18.846 51.6215 19.638L49.4435 20.808C48.9395 19.92 48.2135 19.476 47.2655 19.476C46.5335 19.476 45.9275 19.716 45.4475 20.196C44.9675 20.676 44.7275 21.33 44.7275 22.158C44.7275 22.986 44.9675 23.64 45.4475 24.12C45.9275 24.6 46.5335 24.84 47.2655 24.84C48.2255 24.84 48.9515 24.396 49.4435 23.508L51.6215 24.696C51.2735 25.464 50.7155 26.064 49.9475 26.496C49.1915 26.928 48.3035 27.144 47.2835 27.144ZM61.6087 19.62H58.3327V27H55.5427V19.62H52.2667V17.316H61.6087V19.62ZM68.9915 17.172C69.8915 17.172 70.7075 17.382 71.4395 17.802C72.1835 18.21 72.7655 18.792 73.1855 19.548C73.6055 20.292 73.8155 21.162 73.8155 22.158C73.8155 23.154 73.6055 24.03 73.1855 24.786C72.7655 25.53 72.1835 26.112 71.4395 26.532C70.7075 26.94 69.8915 27.144 68.9915 27.144C67.7555 27.144 66.7835 26.754 66.0755 25.974V30.492H63.2675V17.316H65.9495V18.432C66.6455 17.592 67.6595 17.172 68.9915 17.172ZM68.5055 24.84C69.2255 24.84 69.8135 24.6 70.2695 24.12C70.7375 23.628 70.9715 22.974 70.9715 22.158C70.9715 21.342 70.7375 20.694 70.2695 20.214C69.8135 19.722 69.2255 19.476 68.5055 19.476C67.7855 19.476 67.1915 19.722 66.7235 20.214C66.2675 20.694 66.0395 21.342 66.0395 22.158C66.0395 22.974 66.2675 23.628 66.7235 24.12C67.1915 24.6 67.7855 24.84 68.5055 24.84ZM79.5673 17.172C81.0673 17.172 82.2193 17.532 83.0233 18.252C83.8273 18.96 84.2293 20.034 84.2293 21.474V27H81.6013V25.794C81.0733 26.694 80.0893 27.144 78.6493 27.144C77.9053 27.144 77.2573 27.018 76.7053 26.766C76.1653 26.514 75.7513 26.166 75.4633 25.722C75.1753 25.278 75.0313 24.774 75.0313 24.21C75.0313 23.31 75.3673 22.602 76.0393 22.086C76.7233 21.57 77.7733 21.312 79.1893 21.312H81.4213C81.4213 20.7 81.2353 20.232 80.8633 19.908C80.4913 19.572 79.9333 19.404 79.1893 19.404C78.6733 19.404 78.1633 19.488 77.6593 19.656C77.1673 19.812 76.7473 20.028 76.3993 20.304L75.3913 18.342C75.9193 17.97 76.5493 17.682 77.2813 17.478C78.0253 17.274 78.7873 17.172 79.5673 17.172ZM79.3513 25.254C79.8313 25.254 80.2573 25.146 80.6293 24.93C81.0013 24.702 81.2653 24.372 81.4213 23.94V22.95H79.4953C78.3433 22.95 77.7673 23.328 77.7673 24.084C77.7673 24.444 77.9053 24.732 78.1813 24.948C78.4693 25.152 78.8593 25.254 79.3513 25.254ZM86.8486 17.316H89.6386V21.096H93.8506V17.316H96.6586V27H93.8506V23.382H89.6386V27H86.8486V17.316ZM104.621 20.412C105.881 20.424 106.835 20.706 107.483 21.258C108.131 21.81 108.455 22.602 108.455 23.634C108.455 24.714 108.089 25.548 107.357 26.136C106.625 26.724 105.587 27.018 104.243 27.018L99.5266 27V17.316H102.317V20.412H104.621ZM109.499 17.316H112.289V27H109.499V17.316ZM103.991 25.02C104.531 25.032 104.945 24.918 105.233 24.678C105.521 24.438 105.665 24.078 105.665 23.598C105.665 23.13 105.521 22.788 105.233 22.572C104.957 22.356 104.543 22.242 103.991 22.23L102.317 22.212V25.02H103.991Z" fill="white"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M136.149 22.1493L136.149 20.0517L150.861 20.0517L144.011 13.2012L145.494 11.7179L153.404 19.6285L153.405 19.6284L153.828 20.0517H153.851V20.0746L154.888 21.1116L153.851 22.1487L153.851 22.1493L153.85 22.1493L145.494 30.5054L144.011 29.0222L150.884 22.1493L136.149 22.1493Z" fill="white"/>
					</clipPath>
				</svg>
			</div>
		</div>
	);
};
