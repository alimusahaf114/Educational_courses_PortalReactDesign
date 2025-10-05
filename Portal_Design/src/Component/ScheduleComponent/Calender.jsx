const Calendar = ({ currentDate }) => {
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentDate);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="card border-0 mb-4" 
         style={{ background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)', borderRadius: '15px' }}>
      <div className="card-body text-white p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 style={{ fontWeight: '600', margin: 0 }}>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h6>
          <div className="d-flex gap-2">
            <button className="btn btn-sm text-white p-0" style={{ background: 'none', border: 'none' }}>‹</button>
            <button className="btn btn-sm text-white p-0" style={{ background: 'none', border: 'none' }}>›</button>
          </div>
        </div>
        <div className="row text-center mb-2" style={{ fontSize: '12px' }}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
            <div key={idx} className="col" style={{ opacity: '0.7' }}>{day}</div>
          ))}
        </div>
        <div className="row text-center g-1" style={{ fontSize: '13px' }}>
          {[...Array(firstDay)].map((_, idx) => (
            <div key={`empty-${idx}`} className="col"></div>
          ))}
          {[...Array(daysInMonth)].map((_, idx) => {
            const day = idx + 1;
            const isHighlighted = day === 2;
            return (
              <div key={day} className="col">
                <div 
                  className={`rounded-circle p-1 ${isHighlighted ? 'bg-warning text-dark fw-bold' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  {day}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar