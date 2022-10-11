function simpleArraySum(ar: number[]): number {
	let sum: number = 0
	ar.forEach((a) => (sum += a))

	return sum
}
