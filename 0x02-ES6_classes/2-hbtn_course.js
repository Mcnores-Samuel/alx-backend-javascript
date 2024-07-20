class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students
    }

    set name(newName) {
        this._name = String(newName);
    }

    set length(newLength) {
        this._length = Number(newLength);
    }

    set students(newStudents) {
        this._students = Array(newStudents);
    }
}