function aVeryBigSum(ar: number[]): number {
	// Write your code here
	let longNumber: number = 0

	ar.forEach((i) => (longNumber += i))

	return longNumber
}
