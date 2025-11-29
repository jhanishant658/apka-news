import React, { Component } from 'react'

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Full viewport height
};

// Inline styles for the spinner
const spinnerStyle = {
  border: '8px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '50%',
  borderTop: '8px solid #3498db', // Spinner color
  width: '50px',
  height: '50px',
  animation: 'spin 1.5s linear infinite',
};
export default class Spinner extends Component {
  render() {
    return (
      <div style={containerStyle}>
      <div style={spinnerStyle}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
    )
  }
}

