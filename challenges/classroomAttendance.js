/*
  1. Create a method called getStudents that will receive a Classroom class
  2. Class will have a boolean called hasTeachingAssistant and an array of people
  3. The first value in the array of people will be the teacher, and
   if the classRoom has a teaching assistant, the second value will be the
   teaching assistant
  4. The rest will be the students
  5. getStudents should return only the students
  6. Use destructuring to break apart teacher, assistant and students
*/

module.exports = class Classroom {
  constructor(people, hasTeachingAssistant) {
    this._people = people;
    this._hasTeachingAssistant = hasTeachingAssistant;
  }

  get people() {
    return this._people;
  }

  set people(newPeople) {
    this._people = newPeople;
  }

  get hasTeachingAssistant() {
    return this._hasTeachingAssistant;
  }

  set hasTeachingAssistant(value) {
    this._hasTeachingAssistant = value;
  }

  get students() {
    if(this.hasTeachingAssistant){
      const [teacher, assistant, ...students] = this.people;
      return students;
    } else {
      const [teacher, ...students] = this.people;
      return students
    } 
  }
}