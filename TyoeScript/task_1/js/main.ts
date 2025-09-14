// واجهة المعلّم Teacher
// - firstName و lastName للقراءة فقط (تتحدد وقت الإنشاء ولا تتغير)
// - yearsOfExperience اختيارية
// - نسمح بخصائص إضافية بأي اسم ونوع عبر Index Signature
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // خصائص إضافية مثل: contract, department, ...
}

// واجهة المدير Directors تورّث من Teacher وتضيف numberOfReports
interface Directors extends Teacher {
  numberOfReports: number;
}

// مثال مطلوب في التمرين
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);