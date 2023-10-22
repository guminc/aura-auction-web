import style from './Header.module.css'
import brand from '../../images/brand.svg'
import { ReactComponent as IconBrandScatter } from '../../images/icons/icon-brand-scatter.svg'
import { ReactComponent as IconBrandX } from '../../images/icons/icon-brand-x.svg'
import { ReactComponent as IconBrandOpenSea } from '../../images/icons/icon-brand-opensea.svg'
import { GalleryModal } from '../GalleryModal/GalleryModal'

export const Header = () => {
	return (
		<header id={style['header']} className={style['host']}>
			{/* TODO: Gallery implementation */}
			{/* <GalleryModal /> */}

			<div id={style['brand-container']}>
				<img src={brand} alt="Aura Auction brand wordmark" />
			</div>

			<nav id={style['nav']}>
				<a href="/">
					<span>CURRENT AUCTIONS</span>
				</a>
				<div>
					<GalleryModal />
				</div>
			</nav>

			<div id={style['links-container']}>
				<a id={style['link-scatter']} href="https://www.scatter.art/" target="_blank" rel="noopener noreferrer">
					<IconBrandScatter />
				</a>

				<a
					id={style['link-x']}
					href="https://twitter.com/miladyauras"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconBrandX />
				</a>

				<a 
					id={style['link-opensea']} 
					href="https://opensea.io/collection/0xa2185B3A0d8788E007d0c9ca261F154721c2aCEA" 
					target="_blank" 
					rel="noopener noreferrer"
                >
					<IconBrandOpenSea />
				</a>
			</div>
		</header>
	)
}
