const ScheduledClassItem = ({ item, isActive }) => {
  return (
    <div className={`card border-0 mb-3 ${isActive ? 'bg-dark text-white' : 'bg-white'}`} 
         style={{ borderRadius: '12px' }}>
      <div className="card-body p-3">
        <div className="row align-items-center">
          <div className="col-auto">
            <div className={`text-center ${isActive ? 'text-white' : 'text-dark'}`}>
              <div style={{ fontWeight: '600', fontSize: '20px' }}>{item.date}</div>
              <div style={{ fontSize: '11px', opacity: '0.7' }}>{item.month}</div>
            </div>
          </div>
          <div className="col">
            <div style={{ fontWeight: '500', fontSize: '14px' }}>{item.title}</div>
            {item.time && (
              <div style={{ fontSize: '12px', opacity: '0.7' }}>🕐 {item.time}</div>
            )}
          </div>
          <div className="col-auto">
            <button className="btn btn-link p-0 text-secondary">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScheduledClassItem
