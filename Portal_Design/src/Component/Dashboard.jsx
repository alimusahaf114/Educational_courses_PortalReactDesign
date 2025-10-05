import {React , useState}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScheduledClasses from "./ScheduleComponent/ScheduledClasses";
import Calender from "./ScheduleComponent/Calender";
import Sidebar from "./Layout_Component/Sidebar";
import Header from "./Layout_Component/Header";
import FeaturedCourses from "./Course_Component/FeaturedCourses";
import RecommendedCourses from "./Course_Component/RecommendedCourses";
import UserProfileCard from "./ScheduleComponent/UserProfileCard";
const Dashboard = () => {
  const [currentDate] = useState(new Date(2025, 1, 2)); // February 2025

  // Load Bootstrap CSS via CDN
  
  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: 'Basic Design System',
      lessons: 12,
      duration: '40 hours',
      color: 'primary',
      icon: '🎨'
    },
    {
      id: 2,
      title: 'Machine Learning Basics',
      lessons: 9,
      duration: '40 hours',
      color: 'light',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Tutorial Pro Website by Ari',
      lessons: 9,
      duration: '40 hours',
      color: 'light',
      icon: '🎓'
    }
  ];

  // Recommended courses data
  const recommendedCourses = [
    {
      id: 1,
      category: 'UI/UX DESIGN',
      title: 'Build landing page with figma',
      date: '24 May 2022',
      rating: 5.0,
      image: '👨‍🏫'
    },
    {
      id: 2,
      category: 'TECHNOLOGY',
      title: 'Fundamentals of machine learning',
      date: '24 May 2022',
      rating: 5.0,
      image: '🤖'
    },
    {
      id: 3,
      category: 'DATA LEARNING',
      title: 'Introduction to data science',
      date: '24 May 2022',
      rating: 5.0,
      image: '📊'
    }
  ];

  // Schedule classes data
  const scheduleClasses = [
    {
      date: '02',
      month: 'MAR',
      title: 'Basic HTML and CSS',
      time: '2h'
    },
    {
      date: '04',
      month: 'FEB',
      title: 'Fundamental Shipa Con',
      time: '2h'
    },
    {
      date: '05',
      month: '',
      title: 'How to survive in jungle',
      time: ''
    }
  ];

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: '#f5f7fa' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
        {/* Header */}
        <Header />

        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Featured Courses */}
            <FeaturedCourses courses={featuredCourses} />

            {/* Recommended Courses */}
            <RecommendedCourses courses={recommendedCourses} />
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            {/* User Profile Card */}
            <UserProfileCard />

            {/* Calendar */}
            <Calender currentDate={currentDate} />

            {/* Schedule */}
            <ScheduledClasses classes={scheduleClasses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;