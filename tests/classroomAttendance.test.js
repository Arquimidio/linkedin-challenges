const { beforeEach } = require('node:test');
const Classroom = require('../challenges/classroomAttendance');
let classroomWithAssistant;
let classroomWithoutAssistant;

beforeEach(() => {
  classroomWithAssistant = new Classroom();
})