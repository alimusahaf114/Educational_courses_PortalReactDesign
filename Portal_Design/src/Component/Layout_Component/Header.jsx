const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="position-relative" style={{ width: '400px' }}>
        <input 
          type="text" 
          className="form-control ps-5" 
          placeholder="Search your favorite course"
          style={{ borderRadius: '10px', border: '1px solid #e0e0e0' }}
        />
        <span className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}>
          🔍
        </span>
      </div>
      <div className="d-flex gap-3">
        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" 
             style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
          💬
        </div>
        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" 
             style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
          🔔
        </div>
      </div>
    </div>
  );
};

export default Header;