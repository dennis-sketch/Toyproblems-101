function calculateGrade() {
    const studentGrade = parseFloat(prompt("Enter student grade (between 0 and 100):"));

    let grade;

    if (studentGrade > 79) {
        grade = "A";
    } else if (studentGrade >= 60) {
        grade = "B";
    } else if (studentGrade >= 50) {
        grade = "C";
    } else if (studentGrade >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    alert(`Grade: ${grade}`);
}

calculateGrade();
