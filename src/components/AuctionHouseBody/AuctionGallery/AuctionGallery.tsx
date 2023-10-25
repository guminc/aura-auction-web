import style from './AuctionGallery.module.css'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import { AuctionCard } from './AuctionCard'
import { auctionsAtTheSameTime } from '../../../state/autoAuctionStore'
import { useState } from 'react'

// const launchDate = new Date(Date.UTC(2023, 9, 22, 16, 50, 0, 0))

export const AuctionGallery = () => {
	const [showCounter, setShowCounter] = useState<boolean>(true)
	const showPage = () => setShowCounter(false)

	return (
		<div id={style['auction-container']}>
			{RNEA.range(0, auctionsAtTheSameTime - 1).map((_, i) => {
				return <AuctionCard lineIndex={i} key={i} />
			})}

			<div id={style['placeholder-overlay']} data-prelaunch={false}>
				<div className={style['body']}></div>
				<div id={style['placeholder-counter-container']}>
					{/*<Countdown
                        date={launchDate}
                        onComplete={showPage}
                        daysInHours
                    />*/}
				</div>
			</div>
		</div>
	)
}
