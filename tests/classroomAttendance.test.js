const { beforeEach, default: test, describe } = require('node:test');
const Classroom = require('../challenges/classroomAttendance');
let classroomWithAssistant;
let classroomWithoutAssistant;
let people;

beforeEach(() => {
  people = ['Jorge', 'Frank', 'Steve', 'Elon', 'Jeff', 'Tim'];
  classroomWithAssistant = new Classroom(people, true);
  classroomWithoutAssistant = new Classroom(people, false);
})

describe("Exists", () => {
  test("Properties", () => {
    expect(
      ['people', 'hasTeachingAssistant'].every(prop => prop in classroomWithAssistant)
    ).toBe(true);
  })

  test("Methods", () => {
    [students].every(method => method in classroomWithAssistant)
  })
})

describe("Works as expected", () => {
  test("Classroom with assistant returns correct students", () => {
    expect(
      classroomWithAssistant.students
    ).toEqual(people.slice(2))
  })

  test("Classroom without assistant returns correct students", () => {
    expect(
      classroomWithoutAssistant.students
    ).toEqual(people.slice(1))
  })
})