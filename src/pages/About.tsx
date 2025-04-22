import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        I have 2 years of experience with web development and am comfortable with using HTML, CSS, and JavaScript. I am also familiar with using React and Node.js. My work experience is limited to my own projects and my work for my school.
      </p>
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      <ul className="list-disc pl-4 mb-4">
        <li>HTML, CSS, JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Responsive Web Design</li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Education</h2>
      <p className="mb-4">University of Central Florida (UCF)</p>
      <p className="mb-4">Bachelor of Science in Digital Media</p>
      <p className="mb-4">Expected Graduation: 2026</p>
    </div>
  );
};

export default About; 