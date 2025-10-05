const CourseCard = ({ course }) => {
  return (
    <div className="col-md-4">
      <div className={`card border-0 ${course.color === 'primary' ? 'bg-primary text-white' : 'bg-white'} h-100`} 
           style={{ borderRadius: '15px' }}>
        <div className="card-body">
          <div className="mb-3" style={{ fontSize: '32px' }}>{course.icon}</div>
          <h6 className="card-title mb-3" style={{ fontWeight: '600' }}>{course.title}</h6>
          <div className="d-flex justify-content-between mb-3" style={{ fontSize: '13px', opacity: '0.8' }}>
            <span>{course.lessons} Lessons</span>
            <span>{course.duration}</span>
          </div>
          <button className={`btn ${course.color === 'primary' ? 'btn-light text-primary' : 'btn-outline-secondary'} w-100`} 
                  style={{ borderRadius: '10px' }}>
            Buy Course
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;