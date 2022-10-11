function compareTriplets(a: number[], b: number[]): number[] {
	let alicePoints: number = 0
	let bobPoints: number = 0

	for (var i: number = 0; i <= 3; i++) {
		if (a[i] > b[i]) {
			alicePoints += 1
		}
		if (a[i] < b[i]) {
			bobPoints += 1
		}
	}
	return [alicePoints, bobPoints]
}
