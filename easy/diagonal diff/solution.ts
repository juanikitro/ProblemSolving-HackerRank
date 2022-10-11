function diagonalDifference(arr: number[][]): number {
	// Write your code here
	let leftToRightDiag: number = 0
	let rightToLeft: number = 0

	let i: number = 0
	arr.forEach((elements) => {
		leftToRightDiag += elements[i]

		i++
	})

	i = 0
	arr.forEach((elements) => {
		let reversedElements = elements.reverse()

		rightToLeft += reversedElements[i]

		i++
	})

	return Math.abs(leftToRightDiag - rightToLeft)
}
