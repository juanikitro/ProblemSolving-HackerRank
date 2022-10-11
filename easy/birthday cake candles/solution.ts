function birthdayCakeCandles(candles: number[]): number {
	const higher = Math.max(...candles)
	let highCandles: number = 0

	return candles.filter((x) => x === higher).length
}
