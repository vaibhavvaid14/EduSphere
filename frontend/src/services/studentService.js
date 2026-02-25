// Mock Data for Static Demo Mode
const mockDashboardStats = {
    overallAttendance: "88%",
    avgGPA: "8.7",
    pendingGrievances: 1,
    subjectAttendance: [
        { subject: "Mathematics", percentage: 92 },
        { subject: "Physics", percentage: 85 },
        { subject: "Computer Science", percentage: 95 },
        { subject: "English", percentage: 80 }
    ]
};

const mockProfile = {
    name: "Demo Student",
    email: "student@demo.com",
    department: "Computer Science",
    semester: 6,
    enrollmentNo: "CS2023101",
    phone: "+91 9876543210",
    isActive: true
};

const mockAttendance = [
    { subject: "Mathematics", totalClasses: 40, classesAttended: 37, percentage: 92.5 },
    { subject: "Physics", totalClasses: 40, classesAttended: 34, percentage: 85 },
    { subject: "Computer Science", totalClasses: 40, classesAttended: 38, percentage: 95 },
    { subject: "English", totalClasses: 40, classesAttended: 32, percentage: 80 }
];

const mockResults = [
    { subject: "Mathematics", examType: "midterm", semester: 6, marks: 85, totalMarks: 100, grade: "A" },
    { subject: "Physics", examType: "midterm", semester: 6, marks: 78, totalMarks: 100, grade: "B+" },
    { subject: "Computer Science", examType: "midterm", semester: 6, marks: 92, totalMarks: 100, grade: "A+" },
    { subject: "English", examType: "midterm", semester: 6, marks: 88, totalMarks: 100, grade: "A" }
];

const mockNotifications = [
    { _id: "1", title: "Mid Term Exams", message: "Exams will start from next Monday. Please check the schedule.", type: "exam", createdAt: new Date(), createdBy: { name: "Admin" } },
    { _id: "2", title: "Holiday Notice", message: "University will remain closed this Friday for Holi.", type: "holiday", createdAt: new Date(), createdBy: { name: "System" } },
    { _id: "3", title: "Assignment Deadline", message: "Last date to submit the CS assignment is tomorrow.", type: "deadline", createdAt: new Date(), createdBy: { name: "Dr. Smith" } }
];

const mockGrievances = [
    { _id: "1", subject: "Library Access", description: "Card not working", status: "resolved", response: "Issue fixed. Please visit library.", respondedBy: { name: "Librarian" }, respondedAt: new Date(), createdAt: new Date() },
    { _id: "2", subject: "Portal Login", description: "Cannot see marks", status: "pending", createdAt: new Date() }
];

// Helper to simulate API delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Dashboard Stats
export const getStudentDashboardStats = async () => {
    await delay();
    return mockDashboardStats;
};

// Profile
export const getStudentProfile = async () => {
    await delay();
    return mockProfile;
};

export const updateStudentProfile = async (profileData) => {
    await delay();
    return { success: true, message: "Profile updated (Simulated)" };
};

// Attendance
export const getStudentAttendance = async () => {
    await delay();
    return mockAttendance;
};

// Results
export const getStudentResults = async () => {
    await delay();
    return mockResults;
};

// Notifications
export const getStudentNotifications = async () => {
    await delay();
    return mockNotifications;
};

// Grievances
export const submitGrievance = async (grievanceData) => {
    await delay();
    return { success: true, message: "Grievance submitted (Simulated)" };
};

export const getStudentGrievances = async () => {
    await delay();
    return mockGrievances;
};
