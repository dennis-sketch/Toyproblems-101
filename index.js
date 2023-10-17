function calculateGrade() {
    const studentGrade = parseFloat(prompt("Enter student grade (between 0 and 100):"));

    if (studentGrade >= 90) {
        console.log("A");
    }
    else if (studentGrade >= 80) {
        console.log("B");
    }
    else if (studentGrade >= 70) {
        console.log("C");
    }
    else if (studentGrade >= 60) {
        console.log("D");
    }
    else {
        console.log("F");
    }
}