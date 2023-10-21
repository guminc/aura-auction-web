import React from 'react'
import style from './AuctionCard.module.css'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/lib/function'
import { maxSupply, useParallelAuctionState } from '../../../state/autoAuctionStore'
import { hideSidePanelObserver, showSidePanelObserver } from '../../../state/observerStore'
import { fromWei } from '../../../utils/web3'
import { sleep } from '../../../utils/pure'
import Countdown from 'react-countdown'
import { VipBadgeSvg } from '../../Svgs/VipBadgeSvg'
import { useUserStatusStore } from '../../../state/userStatusStore'
import { ReactComponent as NotchCornerL } from '../../../images/structural/notch-corner-l.svg'
import { ReactComponent as NotchCornerR } from '../../../images/structural/notch-corner-r.svg'

interface AuctionCardProps {
	lineIndex: number
}

export const AuctionCard: React.FC<AuctionCardProps> = ({ lineIndex }) => {
	const updateLine = useParallelAuctionState((s) => s.updateLine)
	const setCurrentSelectedLine = useParallelAuctionState((s) => s.setCurrentSelectedIndex)
	const line = useParallelAuctionState((s) => s.getLine(lineIndex))
	const imageUrl = useParallelAuctionState((s) => s.getImage(lineIndex))
	const isVip = useParallelAuctionState((s) => s.getLineIsVip(line))
	const lineFinished = O.isSome(line) && line.value.head > maxSupply

	/* ---------------- WINNING BADGE HANDLING ---------------- */
	const lineStatus = useUserStatusStore((s) => s.getUserLineStatus)(line)

	const auctionStatusText = O.fold(
		() => '',
		(s) => {
			switch (s) {
				case 'userIsWinning':
					return 'YOU ARE WINNING!'
				case 'userGotOutbidded':
					return 'OUTBIDDED!'
				case 'userHasToClaim':
					return 'BID TO CLAIM!'
			}
		}
	)(lineStatus)

	/* ---------------- AUCTION DATA MANIPULATION ---------------- */
	const hideSidePanel = hideSidePanelObserver((s) => s.notifyObservers)
	const showSidePanel = showSidePanelObserver((s) => s.notifyObservers)

	const formattedCurrentBid = pipe(
		line,
		O.map((l) => l.currentPrice),
		O.map(fromWei),
		O.map(parseFloat),
		O.map((n) => n.toFixed(2)),
		O.map((f) => `BID: ${f}`),
		O.getOrElse(() => '0.00')
	)

	const endTime = pipe(
		line,
		O.map((l) => Number(l.endTime))
	)

	const onCardClick = async () => {
		if (lineFinished) return
		hideSidePanel()
		// NOTE This sleep should be based on how long the side panel
		// hidding animation takes.
		await sleep(0.25)
		await updateLine(lineIndex)
		setCurrentSelectedLine(lineIndex)
		showSidePanel()
	}

	return (
		<div className={style['host']} onClick={onCardClick} data-is-vip={isVip} data-is-winning={O.isSome(lineStatus)}>
			<div className={style['user-winning-string-container']}>
				<span>{auctionStatusText}</span>
			</div>

			<div className={style['thumbnail-container']}>
				<div
					className={style['thumbnail']}
					style={{ backgroundImage: `url(${lineFinished ? '/soldOut.png' : imageUrl})` }}
				>
					<div className={style['ring-generator']} />
					<div className={style['overlay-action']}>
						<span>VIEW -&gt;</span>
					</div>
				</div>

				<div className={style['details-container']} style={{ display: lineFinished ? 'none' : 'flex' }}>
					<NotchCornerL />

					<div className={style['details']}>
						<span className={'txt-s'}>Ξ{formattedCurrentBid}</span>
						<span className={'txt-s'}> / </span>
						<span className={'txt-s'}>
							{' '}
							{O.isSome(endTime) ? <Countdown date={endTime.value * 1000} daysInHours /> : ''}{' '}
						</span>
					</div>

					<NotchCornerR />
				</div>
			</div>

			{/* <button className={style['action']}>
                { lineFinished
                    ? 'SOLD OUT' : O.isSome(endTime) 
                        ? 'PLACE BID' : '404 :('
                }
            </button> */}
		</div>
	)
}
