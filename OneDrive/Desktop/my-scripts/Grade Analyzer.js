const students = [
	{ name: "Alice", grades: [85,92, 78, 90] },
	{ name: "Bob", grades: [70,65,80, 75] },
	{name: "Charlie", grades: [95,98,92,99] }
	{ name: "David", grades: [80,85,88,90] },
];

function analyzerStudentGrades(studentArray) {

	let honorStudents = []:
	
	for(let student of studentArray){
		let total = 0;
		for(let grade of student.grades){
			total += grade;
			
		}
		
		student.averageGrade = total / student.grades.length;
		
		if(student.averageGrade >= 90){
			honorStudents.push(student);
		}
	}
	return honorStudents;
}