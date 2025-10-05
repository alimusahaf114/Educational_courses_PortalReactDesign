import RecomCourseItem from "./RecomCourseItem";
const RecommendedCourses = ({ courses }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 style={{ fontWeight: '600' }}>Recommended Course</h5>
        <a href="#" className="text-decoration-none" style={{ fontSize: '14px', color: '#666' }}>
          SEE ALL
        </a>
      </div>
      {courses.map((course) => (
        <RecomCourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default RecommendedCourses