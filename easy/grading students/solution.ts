function gradingStudents(grades: number[]): number[] {
	return grades.map((grade) => {
		if (grade < 38) {
			return grade
		} else if (Math.ceil(grade / 5) * 5 - grade < 3) {
			return Math.ceil(grade / 5) * 5
		} else return grade
	})
}
