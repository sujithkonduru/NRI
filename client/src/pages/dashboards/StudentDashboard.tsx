import { Card } from "@/components/ui/card";
import { mockMarks, mockHomework, mockTimetable, mockExams, mockAnnouncements } from "@/lib/mockData";
import { BookOpen, Award, Calendar, Bell } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Attendance", value: "92%", icon: Calendar, color: "bg-green-500" },
          { label: "GPA", value: "4.0", icon: Award, color: "bg-blue-500" },
          { label: "Pending Homework", value: "3", icon: BookOpen, color: "bg-orange-500" },
          { label: "Upcoming Exams", value: "2", icon: Calendar, color: "bg-purple-500" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Homework */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-bold mb-6">My Homework</h3>
          <div className="space-y-4">
            {mockHomework.map((hw) => (
              <div key={hw.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{hw.title}</h4>
                    <p className="text-sm text-gray-600">By {hw.teacher}</p>
                  </div>
                  <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                    Due: {hw.dueDate}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{hw.description}</p>
                <button className="mt-3 text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Submit Assignment →
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Today's Schedule */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-6">Today's Classes</h3>
          <div className="space-y-3">
            {mockTimetable.map((slot, i) => (
              <div key={i} className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <p className="text-sm font-bold text-blue-900">{slot.time}</p>
                <p className="text-sm text-blue-800">{slot.subject}</p>
                <p className="text-xs text-blue-600">{slot.teacher}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Academic Performance */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-6">Academic Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Subject</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Marks</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Grade</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockMarks.slice(0, 3).map((mark, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{mark.subject}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{mark.marks}/{mark.totalMarks}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {mark.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      Excellent
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Upcoming Exams */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-6">Upcoming Exams</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockExams.map((exam) => (
            <div key={exam.id} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-3">{exam.name}</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600"><span className="font-semibold">Class:</span> {exam.class}</p>
                <p className="text-gray-600"><span className="font-semibold">Start Date:</span> {exam.startDate}</p>
                <p className="text-gray-600"><span className="font-semibold">End Date:</span> {exam.endDate}</p>
                <p className="text-gray-600"><span className="font-semibold">Subjects:</span> {exam.subjects.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Announcements */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold">School Announcements</h3>
        </div>
        <div className="space-y-4">
          {mockAnnouncements.slice(0, 3).map((announcement) => (
            <div key={announcement.id} className="border-l-4 border-blue-600 pl-4 py-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">{announcement.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                  announcement.priority === "High"
                    ? "bg-red-100 text-red-800"
                    : announcement.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}>
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
