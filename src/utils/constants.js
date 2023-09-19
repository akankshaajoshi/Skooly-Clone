import academy from '@/assets/images/academy.png';
import onlineschool from '@/assets/images/online-school.png';
import preschool from '@/assets/images/preschool.png';
import school from '@/assets/images/school.png';
import course from '@/assets/images/course.png';
import enroll from '@/assets/images/enroll.png';
import schedule from '@/assets/images/schedule.png';

export const navItems = [
  ['/register-school', 'For schools'],
  ['https://getskooly.com/mpweb/#/school-form', 'Teach a course'],
  ['/signup', 'Signup'],
  ['/login', 'Login'],
];

export const hamburgerItems = ['Download app', 'Contact support', 'English', 'Add New'];

export const downloads = [
  ['https://play.google.com/store/apps/details?id=com.skooly.app&pli=1', 'Download it on the Play store'],
  ['https://apps.apple.com/us/app/skooly-messenger-for-teachers/id1153385847', 'Get it on the App store'],
];

export const schoolTypes = [
  ['/register-school', 'Online school'],
  ['/register-school/preschool', 'Preschool & Childcare'],
  ['/register-school', 'Coaching & Tutoring'],
  ['/register-school', 'Sports'],
  ['/register-school', 'Music & Dance'],
  ['/register-school', 'Fitness & Gym'],
  ['/register-school', 'General Academy'],
  ['/register-school', 'K12 School'],
];

export const stats = [25, 15, 5000, 20000];

export const statLabels = ['Countries', 'worth payments processed', 'Schools', 'Teachers & Coaches'];

export const about = [['https://getskooly.com/schools/en/support.html', 'Customer Support']];

export const schoolsAndBusinesses = [
  ['https://getskooly.com/schools/en/', 'For schools'],
  ['https://getskooly.com/schools/en/pricing-academies-and-schools.html', 'Pricing'],
  ['https://getskooly.com/schools/en/support.html', 'For partners'],
  ['https://getskooly.com/schools/en/schedule-a-demo.html', 'Schedule a Demo'],
];

export const legal = [
  ['https://getskooly.com/schools/en/terms-and-conditions.html', 'Terms of Service'],
  ['https://getskooly.com/schools/en/privacy-policy.html', 'Privacy Policy'],
];

export const userOnboarding = [
  ['Academy', 'Book or schedule classes', academy, '/academy'],
  [
    'Online school',
    'Cohort based courses, online classes, remote teaching, hybrid',
    onlineschool,
    '/register-school/online-school',
  ],
  ['Preschool', 'Daycare, Nurseries, or Childcare', preschool, '/register-school/preschool'],
  ['School', 'Regular day schools, Sunday schools, K12 Schools', school, '/register-school/school'],
];

export const onboardingCards = [
  ['Add course', 'Add courses and setup fees to get started.', course, "/register-school/preschool/dashboard/course"],
  ['Add schedule', 'Do you want to add schedules ?', schedule, "/register-school/preschool/dashboard/schedule"],
  ['Enroll your first student', 'Enroll students to the courses.', enroll, "/register-school/preschool/dashboard/student"],
];

export const remainingCards = [
  ['Add your payment provider', 'Please setup payments', 'Setup payments'],
  ['Add another location', 'Would you like to add location ?', 'Add location'],
  ['Add staff', 'Would you like to send invites to staff ?', 'Invite staff'],
];

export const timelineData = [
  [1, 'Setup courses and fees'],
  [2, 'Setup schedules'],
  [3, 'Enroll students'],
  [4, 'Download admin mobile app'],
  ['', 'Setup online payments'],
  ['', 'Add another location'],
  ['', 'Get your staff on board !!'],
];

export const details = [
  {
    header: "Type of education offered",
    content: "Online School"
  },  {
    header: "Institution's Contact No",
    content: "Institution Number is "
  },  {
    header: "Website",
    content: ""
  },  {
    header: "Billing Details",
    content: ""
  },  {
    header: "Timezone",
    content: "Timezone is "
  },  {
    header: "Currency",
    content: "Currency is "
  },{
    header: "School Address",
    content: ""
  },{
    header: "Deactivate account",
    content: ""
  },
]