import React from 'react'
import style from './Footer.module.css'

export const Footer = () => {
	return (
		<footer id={style['footer']}>
			{/* <div id={style['gallery-button-container']}>
				<button id={style['gallery-button']}>Gallery</button>
			</div> */}

			<div id={style['music-button-container']}>
				<button id={style['music-button']}>
					<audio controls autoPlay>
						<source src={require('./bgm.ogg')} type="audio/ogg"></source>
					</audio>
				</button>
			</div>

			<div>
                Powered by Scatter
			</div>

			<div id={style['social-button-container']}>
				<a href="/" target="_blank" rel="noopener noreferrer">
					<svg width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_7_346)">
							<path
								d="M5.1572 11.898C5.15722 11.7655 5.18342 11.6343 5.23429 11.5119C5.28516 11.3895 5.3597 11.2784 5.45363 11.1849C5.54758 11.0915 5.65903 11.0174 5.78165 10.9672C5.90426 10.9169 6.0356 10.8913 6.16813 10.8919L7.84422 10.8974C8.11144 10.8974 8.36774 11.0036 8.55669 11.1925C8.74567 11.3815 8.85183 11.6378 8.85183 11.905V18.2426C9.04052 18.1866 9.28286 18.1269 9.54803 18.0644C9.73222 18.0212 9.89638 17.9169 10.0139 17.7686C10.1314 17.6203 10.1953 17.4367 10.1952 17.2474V9.38599C10.1952 9.11873 10.3014 8.86242 10.4903 8.67342C10.6793 8.48443 10.9356 8.37824 11.2029 8.37818H12.8823C13.1495 8.37824 13.4058 8.48443 13.5948 8.67342C13.7837 8.86242 13.8899 9.11873 13.8899 9.38599V16.6822C13.8899 16.6822 14.3104 16.512 14.7199 16.3392C14.8721 16.2748 15.0019 16.1671 15.0932 16.0294C15.1846 15.8918 15.2333 15.7303 15.2335 15.5651V6.86696C15.2335 6.59976 15.3396 6.34349 15.5285 6.15453C15.7175 5.96558 15.9737 5.85941 16.2409 5.85935H17.9203C18.1876 5.85935 18.4438 5.9655 18.6328 6.15448C18.8218 6.34343 18.9279 6.59972 18.9279 6.86696V14.0297C20.3839 12.9745 21.8594 11.7054 23.0304 10.1794C23.2003 9.95785 23.3127 9.69773 23.3576 9.42224C23.4025 9.14675 23.3785 8.86441 23.2877 8.60043C22.7457 7.04097 21.8842 5.61182 20.7582 4.40445C19.6321 3.19709 18.2664 2.23808 16.7485 1.5888C15.2306 0.939529 13.5938 0.614288 11.943 0.633893C10.2921 0.653498 8.66356 1.01752 7.16149 1.70266C5.6594 2.3878 4.31689 3.37896 3.21985 4.61274C2.12282 5.84649 1.29543 7.2957 0.790625 8.86761C0.285825 10.4395 0.114731 12.0995 0.288292 13.7413C0.461853 15.3831 0.976249 16.9706 1.79856 18.4022C1.94181 18.6491 2.15255 18.8501 2.40604 18.9814C2.65952 19.1128 2.94522 19.169 3.22959 19.1436C3.54725 19.1157 3.94276 19.0761 4.413 19.0209C4.61771 18.9977 4.8067 18.8999 4.94397 18.7463C5.08126 18.5927 5.15722 18.3939 5.15739 18.1879L5.1572 11.898Z"
								fill="#688292"
							/>
							<path
								d="M5.12054 22.0629C6.89075 23.3507 8.98275 24.1238 11.1651 24.2965C13.3474 24.469 15.5349 24.0346 17.4856 23.0411C19.4363 22.0475 21.0741 20.5337 22.2179 18.6672C23.3615 16.8006 23.9666 14.6539 23.966 12.4648C23.966 12.1916 23.9533 11.9214 23.9352 11.6527C19.5997 18.1187 11.5949 21.1415 5.12092 22.0619"
								fill="#688292"
							/>
						</g>
						<defs>
							<clipPath id="clip0_7_346">
								<rect width="24" height="24" fill="white" transform="translate(0.125 0.5)" />
							</clipPath>
						</defs>
					</svg>
				</a>

				<a href="https://t.co/ApjAsw6xOV" target="_blank" rel="noopener noreferrer">
					<svg width="18" height="22" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14.6375 12.375C14.6375 13.1375 14.075 13.7625 13.3625 13.7625C12.6625 13.7625 12.0875 13.1375 12.0875 12.375C12.0875 11.6125 12.65 10.9875 13.3625 10.9875C14.075 10.9875 14.6375 11.6125 14.6375 12.375ZM8.8 10.9875C8.0875 10.9875 7.525 11.6125 7.525 12.375C7.525 13.1375 8.1 13.7625 8.8 13.7625C9.5125 13.7625 10.075 13.1375 10.075 12.375C10.0875 11.6125 9.5125 10.9875 8.8 10.9875ZM22 3.075V25.5C18.8509 22.7171 19.858 23.6383 16.2 20.2375L16.8625 22.55H2.6875C1.275 22.55 0.125 21.4 0.125 19.975V3.075C0.125 1.65 1.275 0.5 2.6875 0.5H19.4375C20.85 0.5 22 1.65 22 3.075ZM18.4375 14.925C18.4375 10.9 16.6375 7.6375 16.6375 7.6375C14.8375 6.2875 13.125 6.325 13.125 6.325L12.95 6.525C15.075 7.175 16.0625 8.1125 16.0625 8.1125C13.0932 6.48511 9.60527 6.48481 6.725 7.75C6.2625 7.9625 5.9875 8.1125 5.9875 8.1125C5.9875 8.1125 7.025 7.125 9.275 6.475L9.15 6.325C9.15 6.325 7.4375 6.2875 5.6375 7.6375C5.6375 7.6375 3.8375 10.9 3.8375 14.925C3.8375 14.925 4.8875 16.7375 7.65 16.825C7.65 16.825 8.1125 16.2625 8.4875 15.7875C6.9 15.3125 6.3 14.3125 6.3 14.3125C6.48389 14.4412 6.78711 14.6081 6.8125 14.625C8.92236 15.8065 11.9193 16.1937 14.6125 15.0625C15.05 14.9 15.5375 14.6625 16.05 14.325C16.05 14.325 15.425 15.35 13.7875 15.8125C14.1625 16.2875 14.6125 16.825 14.6125 16.825C17.375 16.7375 18.4375 14.925 18.4375 14.925Z"
							fill="#688292"
						/>
					</svg>
				</a>

				<a href="https://twitter.com/PixeladyFigmata" target="_blank" rel="noopener noreferrer">
					<svg width="22" height="18" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22.5552 5.90803C22.571 6.1301 22.571 6.35222 22.571 6.57429C22.571 13.3477 17.4156 21.1523 7.99302 21.1523C5.09009 21.1523 2.39341 20.3115 0.125 18.8522C0.537451 18.8998 0.933984 18.9156 1.3623 18.9156C3.75757 18.9156 5.96255 18.1067 7.72334 16.7266C5.4708 16.679 3.58311 15.2037 2.93271 13.1733C3.25 13.2208 3.56724 13.2526 3.90039 13.2526C4.3604 13.2526 4.82046 13.1891 5.24873 13.0781C2.90103 12.6022 1.14019 10.54 1.14019 8.04954V7.98611C1.82227 8.36682 2.61548 8.60476 3.45615 8.63645C2.07607 7.71638 1.17192 6.14597 1.17192 4.36931C1.17192 3.41755 1.42568 2.54509 1.86987 1.78367C4.39209 4.8928 8.18335 6.92322 12.4346 7.14534C12.3553 6.76462 12.3077 6.36809 12.3077 5.97151C12.3077 3.14788 14.5919 0.847778 17.4314 0.847778C18.9066 0.847778 20.2391 1.46643 21.175 2.4658C22.333 2.24373 23.4434 1.81541 24.427 1.22849C24.0462 2.41824 23.2372 3.4176 22.1744 4.05208C23.2055 3.94109 24.2049 3.65549 25.1249 3.25896C24.427 4.27415 23.5545 5.1783 22.5552 5.90803Z"
							fill="#688292"
						/>
					</svg>
				</a>
			</div>
		</footer>
	)
}
