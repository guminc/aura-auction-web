import React, { useEffect, useRef } from 'react'
import { maxSupply, PROVIDER_DOWN_MESSAGE, useParallelAuctionState, vipIds } from '../../state/autoAuctionStore'
import { DappConnector } from './DappConnector/DappConnector'
import * as O from 'fp-ts/Option'
import style from './SidePanel.module.css'

import { PlaceBidButton } from './PlaceBidButton/PlaceBidButton'
import { ReactComponent as NotchCornerL } from '../../images/structural/notch-corner-l.svg'
import { ReactComponent as NotchCornerR } from '../../images/structural/notch-corner-r.svg'
import { hideSidePanelObserver, reRenderSidePanelObserver, showSidePanelObserver } from '../../state/observerStore'
import { sleep } from '../../utils/pure'
import Countdown from 'react-countdown'
import { pipe } from 'fp-ts/lib/function'

export const SidePanel: React.FC = () => {
	const line = useParallelAuctionState((state) => state.getCurrentSelectedLine)()
	const lineIndex = useParallelAuctionState((s) => s.currentLineIndex)
	const lineFinished = O.isSome(line) && line.value.head > maxSupply
	reRenderSidePanelObserver((s) => s.observer) // Subscription

	const isVip = pipe(
		line,
		O.map((l) => l.head),
		O.exists((i) => vipIds.includes(Number(i)))
	)

	const tokenName = useParallelAuctionState((s) => s.getFormattedTokenName)(lineIndex)
	const currentBid = useParallelAuctionState((s) => s.getFormattedCurrentBid)(lineIndex)
	const endTime = useParallelAuctionState((s) => s.getEndTime)(lineIndex)
	const imageUrl = useParallelAuctionState((s) => s.getImage)(lineIndex)
	const currentWinner = useParallelAuctionState((s) => s.getFormattedCurrentWinner)(lineIndex)

	// NOTE That the side panel animation depends on other component
	// interactions, thats why we use those following hooks and observers.
	const sidePanelRef = useRef<HTMLDivElement>(null)
	const onChangeHidePanel = hideSidePanelObserver((s) => s.observer)
	const onChangeShowPanel = showSidePanelObserver((s) => s.observer)

	useEffect(() => {
		if (!sidePanelRef.current) return
		sidePanelRef.current!.style.transform = 'translateX(100%)'
	}, [onChangeHidePanel])

	useEffect(() => {
		if (!sidePanelRef.current) return
		sidePanelRef.current!.style.transform = 'translateX(0px)'
	}, [onChangeShowPanel])

	const hideSidePanel = hideSidePanelObserver((s) => s.notifyObservers)

	const handleHide = async () => {
		hideSidePanel()
		await sleep(0.25)
	}

	return (
		<div id={style['side-panel']} ref={sidePanelRef}>
			<button id={style['hide-button']} onClick={handleHide}>
				{' '}
				<span>HIDE PANEL</span>
				<span> -&gt; </span>
			</button>

			<DappConnector />

			{/* SELECTED TOKEN */}
			<div id={style['focus-token-container']}>
				{/* Image */}
				<div
					id={style['focus-token-image-container']}
					style={
						{
							'--bg-url': `url(${lineFinished ? '/soldOut.png' : imageUrl})`
						} as React.CSSProperties
					}
				>
					{/* Title */}
					<div id={style['focus-token-title-container']} style={{ display: lineFinished ? 'none' : 'flex' }}>
						<NotchCornerR />
						<div className={style['title']}>
							<span>{tokenName}</span>
						</div>
						<NotchCornerL />
					</div>
				</div>

				{/* Details */}
				<div
					id={style['focus-token-auction-details-container']}
					style={{ display: lineFinished ? 'none' : 'flex' }}
				>
					<div className={style['item']}>
						<span>Current bid:</span>
						<span>{currentBid}</span>
					</div>

					<div className={style['item']}>
						<span>Ends in:</span>
						<span>
							{O.isSome(endTime) ? (
								<Countdown date={endTime.value * 1000} daysInHours />
							) : (
								PROVIDER_DOWN_MESSAGE()
							)}
						</span>
					</div>

					<div className={style['item']}>
						<span>Last bid by:</span>
						<span>{currentWinner}</span>
					</div>
				</div>
			</div>

			<PlaceBidButton enabled={!lineFinished} />
		</div>
	)
}
