/*******************************
 * 1) الواجهات (Interfaces)
 *******************************/
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/*******************************
 * 2) الكلاسات (Classes)
 *******************************/
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/*******************************
 * 3) createEmployee
 *******************************/
export type Employee = Director | Teacher;

export function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/*******************************
 * 4) isDirector (type guard)
 *    executeWork
 *******************************/
// type predicate: يثبت للمصرّف أن employee هو Director داخل الفرع الشرطي
export function isDirector(employee: Employee): employee is Director {
  return employee instanceof Director;
}

// ينفّذ المهمة المناسبة حسب نوع الموظف
export function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

/*******************************
 * 5) أمثلة تشغيل (اختياري)
 *******************************/
// console.log(executeWork(createEmployee(200)));   // Getting to work
// console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
