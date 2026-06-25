CREATE TABLE `admission_applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`application_number` varchar(50) NOT NULL,
	`student_name` varchar(255) NOT NULL,
	`date_of_birth` date NOT NULL,
	`parent_name` varchar(255) NOT NULL,
	`parent_email` varchar(255) NOT NULL,
	`parent_phone` varchar(20) NOT NULL,
	`address` text NOT NULL,
	`class_applying_for` int NOT NULL,
	`previous_school` varchar(255),
	`status` enum('Pending','Approved','Rejected') DEFAULT 'Pending',
	`documents_url` text,
	`applied_at` timestamp NOT NULL DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `admission_applications_id` PRIMARY KEY(`id`),
	CONSTRAINT `admission_applications_application_number_unique` UNIQUE(`application_number`)
);
--> statement-breakpoint
CREATE TABLE `announcements` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` text NOT NULL,
	`priority` enum('Low','Medium','High') DEFAULT 'Medium',
	`target_audience` enum('All','Students','Teachers','Parents') NOT NULL,
	`created_by` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `announcements_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `attendance` (
	`id` int AUTO_INCREMENT NOT NULL,
	`student_id` int NOT NULL,
	`date` date NOT NULL,
	`status` enum('Present','Absent','Leave') NOT NULL,
	`remarks` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `attendance_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `classes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`class_level` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `classes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `exams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`class_id` int NOT NULL,
	`start_date` date NOT NULL,
	`end_date` date NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `exams_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `fees` (
	`id` int AUTO_INCREMENT NOT NULL,
	`student_id` int NOT NULL,
	`month` varchar(50) NOT NULL,
	`amount` decimal(10,2) NOT NULL,
	`due_date` date NOT NULL,
	`status` enum('Pending','Paid','Overdue') DEFAULT 'Pending',
	`paid_date` date,
	`payment_method` varchar(50),
	`transaction_id` varchar(100),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fees_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `homework` (
	`id` int AUTO_INCREMENT NOT NULL,
	`class_id` int NOT NULL,
	`section_id` int NOT NULL,
	`subject_id` int NOT NULL,
	`teacher_id` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`due_date` date NOT NULL,
	`attachment_url` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `homework_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `marks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`student_id` int NOT NULL,
	`exam_id` int NOT NULL,
	`subject_id` int NOT NULL,
	`marks_obtained` decimal(5,2) NOT NULL,
	`total_marks` decimal(5,2) NOT NULL,
	`grade` varchar(5),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `marks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `school_info` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`address` text,
	`phone` varchar(20),
	`email` varchar(255),
	`principal_name` varchar(255),
	`founded_year` int,
	`logo` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `school_info_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sections` (
	`id` int AUTO_INCREMENT NOT NULL,
	`class_id` int NOT NULL,
	`name` varchar(50) NOT NULL,
	`class_teacher_id` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `sections_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `students` (
	`id` int AUTO_INCREMENT NOT NULL,
	`admission_number` varchar(50) NOT NULL,
	`first_name` varchar(100) NOT NULL,
	`last_name` varchar(100) NOT NULL,
	`date_of_birth` date NOT NULL,
	`gender` enum('Male','Female','Other') NOT NULL,
	`parent_name` varchar(255) NOT NULL,
	`parent_email` varchar(255),
	`parent_phone` varchar(20) NOT NULL,
	`address` text,
	`previous_school` varchar(255),
	`class_id` int,
	`section_id` int,
	`user_id` int,
	`admission_date` date NOT NULL,
	`status` enum('Active','Inactive','Transferred') DEFAULT 'Active',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `students_id` PRIMARY KEY(`id`),
	CONSTRAINT `students_admission_number_unique` UNIQUE(`admission_number`)
);
--> statement-breakpoint
CREATE TABLE `subjects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`code` varchar(20) NOT NULL,
	`class_id` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `subjects_id` PRIMARY KEY(`id`),
	CONSTRAINT `subjects_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `teacher_subjects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`teacher_id` int NOT NULL,
	`subject_id` int NOT NULL,
	`class_id` int NOT NULL,
	`section_id` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `teacher_subjects_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `teachers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`employee_id` varchar(50) NOT NULL,
	`first_name` varchar(100) NOT NULL,
	`last_name` varchar(100) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`qualifications` text,
	`experience` int,
	`date_of_joining` date NOT NULL,
	`user_id` int,
	`status` enum('Active','Inactive') DEFAULT 'Active',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `teachers_id` PRIMARY KEY(`id`),
	CONSTRAINT `teachers_employee_id_unique` UNIQUE(`employee_id`),
	CONSTRAINT `teachers_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `timetable` (
	`id` int AUTO_INCREMENT NOT NULL,
	`class_id` int NOT NULL,
	`section_id` int NOT NULL,
	`day_of_week` varchar(20) NOT NULL,
	`period` int NOT NULL,
	`subject_id` int NOT NULL,
	`teacher_id` int NOT NULL,
	`start_time` varchar(10) NOT NULL,
	`end_time` varchar(10) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `timetable_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
