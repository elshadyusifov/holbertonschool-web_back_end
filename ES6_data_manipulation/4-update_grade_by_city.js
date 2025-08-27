export default function updateStudentGradeByCity(students, city, newGrade = 'N/A') {
  if (!Array.isArray(students)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => ({ ...student, grade: newGrade }));
}
