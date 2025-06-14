function getStudentDetails() {
    const studentID = document.getElementById("studentID").value;
    const student = students.find(s => s.studentID === studentID);
    if (!student) return alert("Student not found");
    
    const details = `
      <p><strong>Student ID:</strong> ${student.studentID}</p>
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Class:</strong> ${student.studentClass}</p>
      <p><strong>Grade:</strong> ${student.grade || "N/A"}</p>
    `;
    
    document.getElementById("studentDetails").innerHTML = details;
    document.getElementById("studentID").value = "";
  }
  