import CourseCard from "./CourseCard";

const FeaturedCourses = ({ courses }) => {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 style={{ fontWeight: '600' }}>Featured Course</h5>
        <div className="d-flex gap-2">
          <button className="btn btn-light rounded-circle" style={{ width: '35px', height: '35px', padding: '0' }}>
            ‹
          </button>
          <button className="btn btn-dark rounded-circle" style={{ width: '35px', height: '35px', padding: '0' }}>
            ›
          </button>
        </div>
      </div>
      <div className="row g-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses 