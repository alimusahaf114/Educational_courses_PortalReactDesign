import React from 'react'
import ScheduledClassItem from './ScheduledClassItem';

const ScheduledClasses = ({ classes }) => {
  return (
    <div>
      <h6 style={{ fontWeight: '600', marginBottom: '15px' }}>Schedule class</h6>
      {classes.map((item, idx) => (
        <ScheduledClassItem key={idx} item={item} isActive={idx === 0} />
      ))}
    </div>
  );
};
export default ScheduledClasses
