import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Update role enum to include school roles
// Role options: user, admin, principal, teacher, student, parent

import { decimal, date, boolean, tinyint } from "drizzle-orm/mysql-core";

// ============ SCHOOL INFORMATION ============
export const schoolInfo = mysqlTable("school_info", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  address: text("address"),
  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 255 }),
  principalName: varchar("principal_name", { length: 255 }),
  foundedYear: int("founded_year"),
  logo: text("logo"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// ============ STUDENTS ============
export const students = mysqlTable("students", {
  id: int("id").autoincrement().primaryKey(),
  admissionNumber: varchar("admission_number", { length: 50 }).notNull().unique(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  gender: mysqlEnum("gender", ["Male", "Female", "Other"]).notNull(),
  parentName: varchar("parent_name", { length: 255 }).notNull(),
  parentEmail: varchar("parent_email", { length: 255 }),
  parentPhone: varchar("parent_phone", { length: 20 }).notNull(),
  address: text("address"),
  previousSchool: varchar("previous_school", { length: 255 }),
  classId: int("class_id"),
  sectionId: int("section_id"),
  userId: int("user_id"),
  admissionDate: date("admission_date").notNull(),
  status: mysqlEnum("status", ["Active", "Inactive", "Transferred"]).default("Active"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Student = typeof students.$inferSelect;
export type InsertStudent = typeof students.$inferInsert;

// ============ TEACHERS ============
export const teachers = mysqlTable("teachers", {
  id: int("id").autoincrement().primaryKey(),
  employeeId: varchar("employee_id", { length: 50 }).notNull().unique(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  phone: varchar("phone", { length: 20 }).notNull(),
  qualifications: text("qualifications"),
  experience: int("experience"),
  dateOfJoining: date("date_of_joining").notNull(),
  userId: int("user_id"),
  status: mysqlEnum("status", ["Active", "Inactive"]).default("Active"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Teacher = typeof teachers.$inferSelect;
export type InsertTeacher = typeof teachers.$inferInsert;

// ============ CLASSES ============
export const classes = mysqlTable("classes", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  classLevel: int("class_level").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Class = typeof classes.$inferSelect;
export type InsertClass = typeof classes.$inferInsert;

// ============ SECTIONS ============
export const sections = mysqlTable("sections", {
  id: int("id").autoincrement().primaryKey(),
  classId: int("class_id").notNull(),
  name: varchar("name", { length: 50 }).notNull(),
  classTeacherId: int("class_teacher_id"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Section = typeof sections.$inferSelect;
export type InsertSection = typeof sections.$inferInsert;

// ============ SUBJECTS ============
export const subjects = mysqlTable("subjects", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  code: varchar("code", { length: 20 }).notNull().unique(),
  classId: int("class_id").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Subject = typeof subjects.$inferSelect;
export type InsertSubject = typeof subjects.$inferInsert;

// ============ TEACHER SUBJECT ASSIGNMENT ============
export const teacherSubjects = mysqlTable("teacher_subjects", {
  id: int("id").autoincrement().primaryKey(),
  teacherId: int("teacher_id").notNull(),
  subjectId: int("subject_id").notNull(),
  classId: int("class_id").notNull(),
  sectionId: int("section_id").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// ============ ATTENDANCE ============
export const attendance = mysqlTable("attendance", {
  id: int("id").autoincrement().primaryKey(),
  studentId: int("student_id").notNull(),
  date: date("date").notNull(),
  status: mysqlEnum("status", ["Present", "Absent", "Leave"]).notNull(),
  remarks: text("remarks"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Attendance = typeof attendance.$inferSelect;
export type InsertAttendance = typeof attendance.$inferInsert;

// ============ FEES ============
export const fees = mysqlTable("fees", {
  id: int("id").autoincrement().primaryKey(),
  studentId: int("student_id").notNull(),
  month: varchar("month", { length: 50 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  dueDate: date("due_date").notNull(),
  status: mysqlEnum("status", ["Pending", "Paid", "Overdue"]).default("Pending"),
  paidDate: date("paid_date"),
  paymentMethod: varchar("payment_method", { length: 50 }),
  transactionId: varchar("transaction_id", { length: 100 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Fee = typeof fees.$inferSelect;
export type InsertFee = typeof fees.$inferInsert;

// ============ EXAMS ============
export const exams = mysqlTable("exams", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  classId: int("class_id").notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Exam = typeof exams.$inferSelect;
export type InsertExam = typeof exams.$inferInsert;

// ============ MARKS ============
export const marks = mysqlTable("marks", {
  id: int("id").autoincrement().primaryKey(),
  studentId: int("student_id").notNull(),
  examId: int("exam_id").notNull(),
  subjectId: int("subject_id").notNull(),
  marksObtained: decimal("marks_obtained", { precision: 5, scale: 2 }).notNull(),
  totalMarks: decimal("total_marks", { precision: 5, scale: 2 }).notNull(),
  grade: varchar("grade", { length: 5 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Mark = typeof marks.$inferSelect;
export type InsertMark = typeof marks.$inferInsert;

// ============ HOMEWORK ============
export const homework = mysqlTable("homework", {
  id: int("id").autoincrement().primaryKey(),
  classId: int("class_id").notNull(),
  sectionId: int("section_id").notNull(),
  subjectId: int("subject_id").notNull(),
  teacherId: int("teacher_id").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  dueDate: date("due_date").notNull(),
  attachmentUrl: text("attachment_url"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Homework = typeof homework.$inferSelect;
export type InsertHomework = typeof homework.$inferInsert;

// ============ ANNOUNCEMENTS ============
export const announcements = mysqlTable("announcements", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  priority: mysqlEnum("priority", ["Low", "Medium", "High"]).default("Medium"),
  targetAudience: mysqlEnum("target_audience", ["All", "Students", "Teachers", "Parents"]).notNull(),
  createdBy: int("created_by").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Announcement = typeof announcements.$inferSelect;
export type InsertAnnouncement = typeof announcements.$inferInsert;

// ============ TIMETABLE ============
export const timetable = mysqlTable("timetable", {
  id: int("id").autoincrement().primaryKey(),
  classId: int("class_id").notNull(),
  sectionId: int("section_id").notNull(),
  dayOfWeek: varchar("day_of_week", { length: 20 }).notNull(),
  period: int("period").notNull(),
  subjectId: int("subject_id").notNull(),
  teacherId: int("teacher_id").notNull(),
  startTime: varchar("start_time", { length: 10 }).notNull(),
  endTime: varchar("end_time", { length: 10 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Timetable = typeof timetable.$inferSelect;
export type InsertTimetable = typeof timetable.$inferInsert;

// ============ ADMISSION APPLICATIONS ============
export const admissionApplications = mysqlTable("admission_applications", {
  id: int("id").autoincrement().primaryKey(),
  applicationNumber: varchar("application_number", { length: 50 }).notNull().unique(),
  studentName: varchar("student_name", { length: 255 }).notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  parentName: varchar("parent_name", { length: 255 }).notNull(),
  parentEmail: varchar("parent_email", { length: 255 }).notNull(),
  parentPhone: varchar("parent_phone", { length: 20 }).notNull(),
  address: text("address").notNull(),
  classApplyingFor: int("class_applying_for").notNull(),
  previousSchool: varchar("previous_school", { length: 255 }),
  status: mysqlEnum("status", ["Pending", "Approved", "Rejected"]).default("Pending"),
  documentsUrl: text("documents_url"),
  appliedAt: timestamp("applied_at").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AdmissionApplication = typeof admissionApplications.$inferSelect;
export type InsertAdmissionApplication = typeof admissionApplications.$inferInsert;