function plusMinus(arr: number[]): void {
	// Write your code here
	let positives: number = 0
	let negatives: number = 0
	let zeros: number = 0

	for (let i in arr) {
		if (arr[i] > 0) {
			positives++
		} else if (arr[i] < 0) {
			negatives++
		} else {
			zeros++
		}
	}

	console.log(positives / arr.length)
	console.log(negatives / arr.length)
	console.log(zeros / arr.length)
}
