import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Email</h2>
          <p>Zakazzouz@gmail.com</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Location</h2>
          <p>Orlando, Florida</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Phone</h2>
          <p>123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 