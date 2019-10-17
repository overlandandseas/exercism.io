export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster() {
    const rosterCopy = {};
    for (let grade in this._roster) {
      rosterCopy[grade] = this.grade(grade);
    }
    return rosterCopy;
  }

  add(name, grade) {
    if (!Array.isArray(this._roster[grade])) {
      this._roster[grade] = [];
    }
    this._roster[grade].push(name);
  }

  grade(grade) {
    return Array.isArray(this._roster[grade])
      ? [...this._roster[grade]].sort()
      : [];
  }
}
