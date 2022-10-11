function miniMaxSum(arr: number[]): void {
	// Write your code here
	arr.sort()
	let minArr = arr.shift()
	let maxArr = arr.pop()

	let defaultSum = arr.reduce((a, b) => a + b, 0)

	let min: number = defaultSum + minArr
	let max: number = defaultSum + maxArr

	console.log(min + ' ' + max)
}
