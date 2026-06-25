import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockHomework, mockTimetable, mockStudents, mockAttendance } from "@/lib/mockData";
import { Plus, Clock, Users, FileText } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Classes", value: "4", icon: Users, color: "bg-blue-500" },
          { label: "Students", value: "120", icon: Users, color: "bg-green-500" },
          { label: "Pending Homework", value: "3", icon: FileText, color: "bg-orange-500" },
          { label: "Avg Attendance", value: "92%", icon: Clock, color: "bg-purple-500" },
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
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Homework Assignments</h3>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Homework
            </Button>
          </div>
          <div className="space-y-4">
            {mockHomework.map((hw) => (
              <div key={hw.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{hw.title}</h4>
                    <p className="text-sm text-gray-600">{hw.subject}</p>
                  </div>
                  <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                    Due: {hw.dueDate}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{hw.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Timetable */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-6">Today's Schedule</h3>
          <div className="space-y-3">
            {mockTimetable.map((slot, i) => (
              <div key={i} className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <p className="text-sm font-bold text-blue-900">{slot.time}</p>
                <p className="text-sm text-blue-800">{slot.subject}</p>
                <p className="text-xs text-blue-600">{slot.period} Period</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Student Attendance */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-6">Class Attendance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Student</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Attendance %</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {student.firstName} {student.lastName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.attendance}%</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.attendance >= 90
                        ? "bg-green-100 text-green-800"
                        : student.attendance >= 75
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {student.attendance >= 90 ? "Good" : student.attendance >= 75 ? "Fair" : "Poor"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">Mark</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
