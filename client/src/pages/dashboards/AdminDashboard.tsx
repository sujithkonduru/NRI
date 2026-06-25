import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  mockStudents,
  mockTeachers,
  mockClasses,
  mockFees,
  mockAnnouncements,
  mockAdmissionApplications,
} from "@/lib/mockData";
import {
  Users,
  GraduationCap,
  DollarSign,
  School,
  TrendingUp,
  Bell,
  ClipboardList,
} from "lucide-react";

export default function AdminDashboard() {
  const totalStudents = mockStudents.length;
  const totalTeachers = mockTeachers.length;
  const totalClasses = mockClasses.length;

  const totalFeesCollected = mockFees
    .filter((f) => f.status === "Paid")
    .reduce((sum, f) => sum + f.amount, 0);
  const totalFeesPending = mockFees
    .filter((f) => f.status === "Pending")
    .reduce((sum, f) => sum + f.amount, 0);

  const pendingAdmissions = mockAdmissionApplications.filter(
    (a) => a.status === "Pending" || a.status === "Under Review"
  ).length;

  const formatCurrency = (amount: number) =>
    `₹${amount.toLocaleString("en-IN")}`;

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {[
          { label: "Total Students", value: totalStudents, icon: Users, color: "bg-blue-500" },
          { label: "Total Teachers", value: totalTeachers, icon: GraduationCap, color: "bg-green-500" },
          { label: "Active Classes", value: totalClasses, icon: School, color: "bg-purple-500" },
          { label: "Pending Admissions", value: pendingAdmissions, icon: ClipboardList, color: "bg-orange-500" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg shrink-0`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Fees Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card className="p-5 sm:p-6 lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold">Fee Collection Overview</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
              <p className="text-sm text-green-700 font-medium">Collected</p>
              <p className="text-2xl font-bold text-green-800 mt-1">
                {formatCurrency(totalFeesCollected)}
              </p>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
              <p className="text-sm text-orange-700 font-medium">Pending</p>
              <p className="text-2xl font-bold text-orange-800 mt-1">
                {formatCurrency(totalFeesPending)}
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto -mx-5 sm:-mx-6">
            <table className="w-full min-w-[480px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-5 sm:px-6 py-3 text-left text-sm font-semibold text-gray-900">Student</th>
                  <th className="px-5 sm:px-6 py-3 text-left text-sm font-semibold text-gray-900">Month</th>
                  <th className="px-5 sm:px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-5 sm:px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockFees.map((fee) => (
                  <tr key={fee.id} className="hover:bg-gray-50">
                    <td className="px-5 sm:px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {fee.studentName}
                    </td>
                    <td className="px-5 sm:px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{fee.month}</td>
                    <td className="px-5 sm:px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {formatCurrency(fee.amount)}
                    </td>
                    <td className="px-5 sm:px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          fee.status === "Paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {fee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Classes Overview */}
        <Card className="p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-6">
            <School className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold">Classes</h3>
          </div>
          <div className="space-y-3">
            {mockClasses.map((cls) => (
              <div
                key={cls.id}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg"
              >
                <div>
                  <p className="text-sm font-bold text-blue-900">{cls.name}</p>
                  <p className="text-xs text-blue-600">{cls.sections} sections</p>
                </div>
                <span className="text-sm font-semibold text-blue-800 bg-white px-2 py-1 rounded">
                  {cls.students} students
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Teachers + Admissions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <Card className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold">Teaching Staff</h3>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {mockTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex items-start sm:items-center justify-between gap-3 border border-gray-200 rounded-lg p-4"
              >
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 truncate">
                    {teacher.firstName} {teacher.lastName}
                  </h4>
                  <p className="text-sm text-gray-600 truncate">{teacher.subjects.join(", ")}</p>
                  <p className="text-xs text-gray-400 mt-1">{teacher.experience} yrs experience</p>
                </div>
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded shrink-0">
                  {teacher.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-6">
            <ClipboardList className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold">Admission Applications</h3>
          </div>
          <div className="space-y-4">
            {mockAdmissionApplications.map((app) => (
              <div
                key={app.id}
                className="flex items-start sm:items-center justify-between gap-3 border border-gray-200 rounded-lg p-4"
              >
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 truncate">{app.studentName}</h4>
                  <p className="text-sm text-gray-600">
                    Applying for Class {app.classApplyingFor}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded shrink-0 ${
                    app.status === "Approved"
                      ? "bg-green-100 text-green-800"
                      : app.status === "Rejected"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Announcements */}
      <Card className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold">School Announcements</h3>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
            <TrendingUp className="w-4 h-4 mr-2" /> New Announcement
          </Button>
        </div>
        <div className="space-y-4">
          {mockAnnouncements.map((announcement) => (
            <div key={announcement.id} className="border-l-4 border-blue-600 pl-4 py-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h4 className="font-bold text-gray-900">{announcement.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded self-start shrink-0 ${
                    announcement.priority === "High"
                      ? "bg-red-100 text-red-800"
                      : announcement.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {announcement.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
