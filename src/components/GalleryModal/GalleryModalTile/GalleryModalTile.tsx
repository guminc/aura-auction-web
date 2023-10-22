import React from 'react'
import * as O from 'fp-ts/Option'
import { useParallelAuctionState } from '../../../state/autoAuctionStore'
import { EtherscanSvg } from '../../Svgs/EtherscanSvg'
import { OpenseaSvg } from '../../Svgs/OpenseaSvg'
import style from './GalleryModalTile.module.css'
import { useGalleryStore } from '../../../state/galleryStore'
import { pipe } from 'fp-ts/lib/function'

export type GalleryModalTileProps = {
	id: number
}

// FIXME Hardcode for the lulz.
const tokenEtherscanUrl = 'https://etherscan.io/token/0xa2185B3A0d8788E007d0c9ca261F154721c2aCEA?a='
const tokenOpenseaUrl = 'https://opensea.io/assets/ethereum/0xa2185B3A0d8788E007d0c9ca261F154721c2aCEA/'
const ipfsGateway = 'https://ipfs.io/ipfs/'

export const GalleryModalTile: React.FC<GalleryModalTileProps> = ({ id }) => {
	// FIXME Fuck cloudflare!!!!
	//const imageUrl  = useParallelAuctionState(s => s.getImageForId(id))
	const imageUrl = `${ipfsGateway}${process.env.REACT_APP_IMAGES_URI!}/${id}.png`
	const tokenName = useParallelAuctionState((s) => s.getFormattedTokenNameFoId(id))
	const data = useGalleryStore((s) => s.getGalleryCardDataFor(id))

	const winner = pipe(
		data,
		O.map((d) => d.winner),
		O.getOrElse(() => 'Loading')
	)
	const hammerPrice = pipe(
		data,
		O.map((d) => d.price),
		O.getOrElse(() => 'Loading')
	)
	const totalBids = pipe(
		data,
		O.map((d) => d.totalBids),
		O.getOrElse(() => 0)
	)
	const totalVol = pipe(
		data,
		O.map((d) => d.totalBiddedAmount),
		O.getOrElse(() => 'Loading')
	)

	return (
		<div className={style['gallery-modal-tile-container']}>
			<div className={style['thumb']} data-is-ready={O.isSome(data)}>
				<img src={imageUrl} alt={tokenName} />
			</div>

			<div className={style['body']}>
				<h3>{tokenName}</h3>
				<div className={style['row']}>
					<span>WINNER:</span>
					<span>{winner}</span>
				</div>

				<div className={style['row']}>
					<span>HAMMER PRICE:</span>
					<span>{hammerPrice}</span>
				</div>

				<div className={style['row']}>
					<span>TOTAL BIDS:</span>
					<span>{totalBids}</span>
				</div>

				<div className={style['row']}>
					<span>TOTAL BID VOLUME:</span>
					<span>{totalVol}</span>
				</div>

				<div className={style['aux']}>
					<a href={`${tokenEtherscanUrl}${id}`} target="_blank" rel="noopener noreferrer">
						<EtherscanSvg />
					</a>

					<a href={`${tokenOpenseaUrl}${id}`} target="_blank" rel="noopener noreferrer">
						<OpenseaSvg />
					</a>
				</div>
			</div>
		</div>
	)
}
