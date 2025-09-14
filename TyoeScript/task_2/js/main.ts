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
 * 3) الدالة createEmployee
 * ترجع Director أو Teacher حسب الراتب
 *******************************/
export type Employee = Director | Teacher;

export function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/*******************************
 * 4) أمثلة تشغيل (اختياري)
 *******************************/
// console.log(createEmployee(200));   // Teacher
// console.log(createEmployee(1000));  // Director
// console.log(createEmployee('$500')); // Director
