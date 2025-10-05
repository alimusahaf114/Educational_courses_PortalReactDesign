const UserProfileCard = () => {
  return (
    <div className="card border-0 text-white mb-4" 
         style={{ background: 'linear-gradient(135deg, #2d3e6e 0%, #1e2742 100%)', borderRadius: '15px' }}>
      <div className="card-body text-center p-4">
        <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" 
             style={{ width: '80px', height: '80px', fontSize: '40px' }}>
          👨‍🎓
        </div>
        <h6 style={{ fontWeight: '600' }}>Andre Maspion ✓</h6>
        <p style={{ fontSize: '13px', opacity: '0.8' }}>Verified Student</p>
        <div className="row text-center mt-3">
          <div className="col-4">
            <div style={{ fontWeight: '600', fontSize: '18px' }}>32</div>
            <div style={{ fontSize: '11px', opacity: '0.7' }}>Courses</div>
          </div>
          <div className="col-4">
            <div style={{ fontWeight: '600', fontSize: '18px' }}>120</div>
            <div style={{ fontSize: '11px', opacity: '0.7' }}>Completed</div>
          </div>
          <div className="col-4">
            <div style={{ fontWeight: '600', fontSize: '18px' }}>5.0</div>
            <div style={{ fontSize: '11px', opacity: '0.7' }}>Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard