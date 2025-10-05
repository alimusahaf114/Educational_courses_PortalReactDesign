const RecomCourseItem = ({ course }) => {
  return (
    <div className="card border-0 mb-3" style={{ borderRadius: '15px' }}>
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="bg-light rounded d-flex align-items-center justify-content-center" 
                 style={{ width: '60px', height: '60px', fontSize: '28px' }}>
              {course.image}
            </div>
          </div>
          <div className="col">
            <div style={{ fontSize: '11px', color: '#999', fontWeight: '600', letterSpacing: '1px' }}>
              {course.category}
            </div>
            <div style={{ fontWeight: '500', fontSize: '15px' }}>{course.title}</div>
          </div>
          <div className="col-auto">
            <div className="d-flex align-items-center gap-3">
              <span style={{ fontSize: '13px', color: '#666' }}>📅 {course.date}</span>
              <span style={{ fontSize: '13px', color: '#666' }}>⭐ {course.rating}</span>
              <button className="btn btn-link p-0">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomCourseItem