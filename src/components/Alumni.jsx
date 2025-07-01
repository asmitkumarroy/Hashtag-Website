import React from 'react';
import ProfileCard from './AlumniCard';
import './Alumni.css';

// Placeholder data for the Alumni page
const alumniData = [
  { name: 'Rohan Sharma', title: 'Software Engineer @ Google', avatarUrl: '/Photos/alumni1.png', social: { github: '#', linkedin: '#' } },
  { name: 'Priya Mehta', title: 'Product Manager @ Microsoft', avatarUrl: '/Photos/alumni2.png', social: { github: '#', linkedin: '#' } },
  { name: 'Arjun Singh', title: 'Data Scientist @ Amazon', avatarUrl: '/Photos/alumni3.png', social: { github: '#', linkedin: '#' } },
  { name: 'Sneha Reddy', title: 'UX Designer @ Adobe', avatarUrl: '/Photos/alumni4.png', social: { github: '#', linkedin: '#' } },
  { name: 'Vikram Rao', title: 'Cloud Architect @ Oracle', avatarUrl: '/Photos/alumni5.png', social: { github: '#', linkedin: '#' } },
  { name: 'Isha Gupta', title: 'Frontend Developer @ Netflix', avatarUrl: '/Photos/alumni6.png', social: { github: '#', linkedin: '#' } },
];

const Alumni = () => {
  return (
    <div className="new-page-container alumni-page">
      <h1 className="new-page-main-title">Our Alumni</h1>
      <p className="page-subtitle">Proud to showcase the accomplished individuals from our society.</p>
      
      <div className="alumni-grid">
        {alumniData.map((alumnus) => (
          <ProfileCard key={alumnus.name} {...alumnus} />
        ))}
      </div>
    </div>
  );
};

export default Alumni;
