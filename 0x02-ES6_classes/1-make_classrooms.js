import Classroom from "./0-classroom";

export default function initializeRooms() {
  const classrooms = [];
  classrooms.push(new Classroom(19));
  classrooms.push(new Classroom(20));
  classrooms.push(new Classroom(34));
  return classrooms;
}
