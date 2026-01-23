import React from 'react';
import { CheckCircle } from 'lucide-react';

const Toast = ({ message }) => {
  return (
    <div className={`toast-container ${message ? 'show' : ''}`}>
      <div style={{background: '#4e8a15', padding: '5px', borderRadius: '50%'}}>
        <CheckCircle size={24} color="#fff" />
      </div>
      <span>{message}</span>
    </div>
  );
};

export default Toast;