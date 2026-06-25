// Mock data for the school management system demo

export const mockUsers = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    email: "principal@srinri.edu",
    role: "principal",
    avatar: "RK",
  },
  {
    id: 2,
    name: "Admin User",
    email: "admin@srinri.edu",
    role: "admin",
    avatar: "AU",
  },
  {
    id: 3,
    name: "Mrs. Priya Sharma",
    email: "priya.sharma@srinri.edu",
    role: "teacher",
    avatar: "PS",
  },
  {
    id: 4,
    name: "Arjun Singh",
    email: "arjun.singh@srinri.edu",
    role: "student",
    avatar: "AS",
  },
  {
    id: 5,
    name: "Mr. Vikram Patel",
    email: "vikram.patel@parent.com",
    role: "parent",
    avatar: "VP",
  },
];

export const mockStudents = [
  {
    id: 1,
    admissionNumber: "SRI/2024/001",
    firstName: "Arjun",
    lastName: "Singh",
    dateOfBirth: "2009-05-15",
    gender: "Male",
    parentName: "Mr. Vikram Patel",
    parentPhone: "+91 9876543210",
    class: "10-A",
    section: "A",
    status: "Active",
    attendance: 92,
  },
  {
    id: 2,
    admissionNumber: "SRI/2024/002",
    firstName: "Ananya",
    lastName: "Gupta",
    dateOfBirth: "2009-08-22",
    gender: "Female",
    parentName: "Mrs. Neha Gupta",
    parentPhone: "+91 9876543211",
    class: "10-A",
    section: "A",
    status: "Active",
    attendance: 95,
  },
  {
    id: 3,
    admissionNumber: "SRI/2024/003",
    firstName: "Rohan",
    lastName: "Verma",
    dateOfBirth: "2009-03-10",
    gender: "Male",
    parentName: "Mr. Rajesh Verma",
    parentPhone: "+91 9876543212",
    class: "10-B",
    section: "B",
    status: "Active",
    attendance: 88,
  },
];

export const mockTeachers = [
  {
    id: 1,
    employeeId: "EMP/2020/001",
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@srinri.edu",
    phone: "+91 9876543220",
    qualifications: "B.Sc, M.Sc, B.Ed",
    experience: 8,
    subjects: ["Mathematics", "Science"],
    classes: ["10-A", "10-B"],
    status: "Active",
  },
  {
    id: 2,
    employeeId: "EMP/2021/002",
    firstName: "Amit",
    lastName: "Patel",
    email: "amit.patel@srinri.edu",
    phone: "+91 9876543221",
    qualifications: "B.A, M.A, B.Ed",
    experience: 6,
    subjects: ["English", "Social Studies"],
    classes: ["10-A", "9-A"],
    status: "Active",
  },
  {
    id: 3,
    employeeId: "EMP/2022/003",
    firstName: "Kavya",
    lastName: "Nair",
    email: "kavya.nair@srinri.edu",
    phone: "+91 9876543222",
    qualifications: "B.Com, M.Com, B.Ed",
    experience: 4,
    subjects: ["Commerce", "Accounts"],
    classes: ["12-A"],
    status: "Active",
  },
];

export const mockClasses = [
  { id: 1, name: "Class 9", level: 9, sections: 2, students: 45 },
  { id: 2, name: "Class 10", level: 10, sections: 2, students: 52 },
  { id: 3, name: "Class 11", level: 11, sections: 2, students: 48 },
  { id: 4, name: "Class 12", level: 12, sections: 2, students: 50 },
];

export const mockFees = [
  {
    id: 1,
    studentId: 1,
    studentName: "Arjun Singh",
    month: "June 2025",
    amount: 5000,
    dueDate: "2025-06-30",
    status: "Paid",
    paidDate: "2025-06-25",
  },
  {
    id: 2,
    studentId: 1,
    studentName: "Arjun Singh",
    month: "July 2025",
    amount: 5000,
    dueDate: "2025-07-31",
    status: "Pending",
    paidDate: null,
  },
  {
    id: 3,
    studentId: 2,
    studentName: "Ananya Gupta",
    month: "June 2025",
    amount: 5000,
    dueDate: "2025-06-30",
    status: "Paid",
    paidDate: "2025-06-20",
  },
];

export const mockAttendance = [
  { date: "2025-06-20", present: 48, absent: 2, leave: 2 },
  { date: "2025-06-21", present: 50, absent: 1, leave: 1 },
  { date: "2025-06-22", present: 51, absent: 0, leave: 1 },
  { date: "2025-06-23", present: 49, absent: 2, leave: 1 },
  { date: "2025-06-24", present: 50, absent: 1, leave: 1 },
];

export const mockExams = [
  {
    id: 1,
    name: "Mid Term Exam",
    class: "10-A",
    startDate: "2025-07-15",
    endDate: "2025-07-25",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
  },
  {
    id: 2,
    name: "Final Exam",
    class: "10-A",
    startDate: "2025-09-01",
    endDate: "2025-09-15",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
  },
];

export const mockMarks = [
  {
    studentId: 1,
    studentName: "Arjun Singh",
    subject: "Mathematics",
    marks: 92,
    totalMarks: 100,
    grade: "A+",
  },
  {
    studentId: 1,
    studentName: "Arjun Singh",
    subject: "English",
    marks: 88,
    totalMarks: 100,
    grade: "A",
  },
  {
    studentId: 1,
    studentName: "Arjun Singh",
    subject: "Science",
    marks: 95,
    totalMarks: 100,
    grade: "A+",
  },
  {
    studentId: 2,
    studentName: "Ananya Gupta",
    subject: "Mathematics",
    marks: 98,
    totalMarks: 100,
    grade: "A+",
  },
];

export const mockHomework = [
  {
    id: 1,
    subject: "Mathematics",
    title: "Algebra Exercise - Chapter 5",
    description: "Complete all problems from page 45-50",
    dueDate: "2025-06-27",
    teacher: "Mrs. Priya Sharma",
  },
  {
    id: 2,
    subject: "English",
    title: "Essay Writing - My Future",
    description: "Write a 500-word essay on your future goals",
    dueDate: "2025-06-28",
    teacher: "Mr. Amit Patel",
  },
  {
    id: 3,
    subject: "Science",
    title: "Biology Project - Photosynthesis",
    description: "Create a detailed project on photosynthesis process",
    dueDate: "2025-06-30",
    teacher: "Mrs. Priya Sharma",
  },
];

export const mockAnnouncements = [
  {
    id: 1,
    title: "Summer Vacation Starts",
    content: "Summer vacation will start from July 1st, 2025. School will reopen on August 15th.",
    priority: "High",
    date: "2025-06-25",
    author: "Dr. Rajesh Kumar",
  },
  {
    id: 2,
    title: "Sports Day - July 20th",
    content: "Annual sports day will be held on July 20th. All students are encouraged to participate.",
    priority: "Medium",
    date: "2025-06-24",
    author: "Mr. Vikram Singh",
  },
  {
    id: 3,
    title: "New Computer Lab Inaugurated",
    content: "The new computer lab with 50 workstations has been inaugurated today.",
    priority: "Medium",
    date: "2025-06-23",
    author: "Dr. Rajesh Kumar",
  },
];

export const mockTimetable = [
  { period: 1, day: "Monday", subject: "Mathematics", teacher: "Mrs. Priya Sharma", time: "9:00 - 10:00" },
  { period: 2, day: "Monday", subject: "English", teacher: "Mr. Amit Patel", time: "10:00 - 11:00" },
  { period: 3, day: "Monday", subject: "Science", teacher: "Mrs. Priya Sharma", time: "11:00 - 12:00" },
  { period: 4, day: "Monday", subject: "Social Studies", teacher: "Mr. Amit Patel", time: "12:00 - 1:00" },
];

export const mockAdmissionApplications = [
  {
    id: 1,
    applicationNumber: "APP/2025/001",
    studentName: "Rohan Sharma",
    dateOfBirth: "2010-03-15",
    parentName: "Mr. Rajesh Sharma",
    classApplyingFor: "9",
    status: "Pending",
    appliedDate: "2025-06-20",
  },
  {
    id: 2,
    applicationNumber: "APP/2025/002",
    studentName: "Priya Verma",
    dateOfBirth: "2010-05-22",
    parentName: "Mrs. Neha Verma",
    classApplyingFor: "9",
    status: "Approved",
    appliedDate: "2025-06-18",
  },
];
