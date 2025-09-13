interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // خصائص إضافية باسم نصي ونوع أي شيء
  [propName: string]: any;
}

// 2) مثال من نص السؤال
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // خاصية إضافية (ما كانت مذكورة في الواجهة بشكل صريح)
};

// 3) أمثلة إضافية (اختياري) للتوضيح
const seniorTeacher: Teacher = {
  firstName: 'Layla',
  lastName: 'AlHarbi',
  fullTimeEmployee: true,
  location: 'Riyadh',
  yearsOfExperience: 8,
  department: 'Mathematics', // خاصية إضافية
};

// 4) الطباعة للتأكد
console.log(teacher3);
console.log(seniorTeacher);
