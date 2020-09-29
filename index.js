const fs = require('fs')

const students = [
  'Emilie',
  'Florian',
  'Jordan',
  'Yoann',
  'Chloé',
  'Gabrielle',
  'Antoine',
]

const initialiseStudentsAlreadyPassed = () => {
  try {
    return JSON.parse(fs.readFileSync('students-passed.json', 'utf8'))
  } catch (e) {
    return []
  }
}

const studentsAlreadyPassed = initialiseStudentsAlreadyPassed()

const emptyStudentsAlreadyPassedIfEverybodyPassed = () => {
  if (studentsAlreadyPassed.length === students.length) {
    studentsAlreadyPassed.splice(0, students.length)
  }
}

const getRandomStudentInAvailable = () => {
  const availableStudents = students.filter(student => !studentsAlreadyPassed.includes(student))

  const randomKey = Math.round(Math.random() * (availableStudents.length - 1))

  return availableStudents[randomKey]
}

const saveStudentsAlreadyPassed = () => {
  fs.writeFileSync('students-passed.json', JSON.stringify(studentsAlreadyPassed))
}

emptyStudentsAlreadyPassedIfEverybodyPassed()

const randomStudent = getRandomStudentInAvailable()

studentsAlreadyPassed.push(randomStudent)

saveStudentsAlreadyPassed()

console.log(randomStudent)
