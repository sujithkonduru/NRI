import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockMarks, mockFees, mockAttendance, mockAnnouncements } from "@/lib/mockData";
import { DollarSign, TrendingUp, Calendar, MessageSquare } from "lucide-react";

export default function ParentDashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
      {/* Child Overview */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Child Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600">Name</p>
            <p className="text-xl font-bold text-gray-900">Arjun Singh</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Class & Section</p>
            <p className="text-xl font-bold text-gray-900">10-A</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Admission #</p>
            <p className="text-xl font-bold text-gray-900">SRI/2024/001</p>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Attendance", value: "92%", icon: Calendar, color: "bg-green-500" },
          { label: "GPA", value: "4.0", icon: TrendingUp, color: "bg-blue-500" },
          { label: "Pending Fees", value: "₹5,000", icon: DollarSign, color: "bg-red-500" },
          { label: "Messages", value: "5", icon: MessageSquare, color: "bg-purple-500" },
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
        {/* Fee Payment */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-bold mb-6">Fee Payment Status</h3>
          <div className="space-y-4">
            {mockFees.map((fee) => (
              <div key={fee.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-gray-900">{fee.month}</h4>
                    <p className="text-sm text-gray-600">Due: {fee.dueDate}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    fee.status === "Paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {fee.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">₹{fee.amount}</span>
                  {fee.status === "Pending" && (
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
                      Pay Now
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Attendance Trend */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-6">Attendance Trend</h3>
          <div className="space-y-3">
            {mockAttendance.slice(-5).map((day, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{day.date}</span>
                <div className="flex gap-2">
                  <span className="text-green-600 font-semibold text-sm">{day.present}P</span>
                  <span className="text-red-600 font-semibold text-sm">{day.absent}A</span>
                </div>
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
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Performance</th>
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
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(mark.marks / mark.totalMarks) * 100}%` }}></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* School Announcements */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-6">School Announcements</h3>
        <div className="space-y-4">
          {mockAnnouncements.map((announcement) => (
            <div key={announcement.id} className="border-l-4 border-blue-600 pl-4 py-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">{announcement.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
                  <p className="text-xs text-gray-500 mt-2">By {announcement.author} on {announcement.date}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded whitespace-nowrap ml-4 ${
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

      {/* Teacher Communication */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Teacher Communication</h3>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Send Message
          </Button>
        </div>
        <div className="space-y-3">
          {[
            { teacher: "Mrs. Priya Sharma", subject: "Mathematics", message: "Great performance in the last exam!" },
            { teacher: "Mr. Amit Patel", subject: "English", message: "Needs to improve essay writing skills" },
          ].map((msg, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">{msg.teacher}</h4>
                  <p className="text-sm text-gray-600">{msg.subject}</p>
                  <p className="text-sm text-gray-700 mt-2">{msg.message}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Reply</button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
