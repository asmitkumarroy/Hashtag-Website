import React from 'react';
import ProfileCard from './AlumniCard';
import './Alumni.css';

// Placeholder data for the Alumni page
const alumniData = [
  { name: 'Nishit Mehta', title: 'Application Engineer @Quadrafort', avatarUrl: '/Photos/Nishit.png', social: { github: 'mailto:nishitmehta@gmail.com', linkedin: 'https://www.linkedin.com/in/nishitmehta-/' } },
  { name: 'Manav Sharma', title: 'Product Manager @ Microsoft', avatarUrl: '/Photos/alumni2.png', social: { github: 'mailto:nishitmehta@gmail.com', linkedin: '#' } },
  { name: 'Arjun Singh', title: 'Data Scientist @ Amazon', avatarUrl: '/Photos/alumni3.png', social: { github: 'mailto:nishitmehta@gmail.com', linkedin: '#' } },
  { name: 'Sneha Reddy', title: 'UX Designer @ Adobe', avatarUrl: '/Photos/alumni4.png', social: { github: 'mailto:nishitmehta@gmail.com', linkedin: '#' } },
  { name: 'Divyanshu Singh', title: 'Founder @2ByteCode', avatarUrl: '/Photos/Divyanshu.jpeg', social: { github: 'mailto:divyanshu20029@gmail.com', linkedin: 'https://www.linkedin.com/in/divyanshu-singh-346881229/' } },
  { name: 'Satyajeet Sau', title: 'Engineer @IUS Digital Solutions', avatarUrl: '/Photos/satya.jpg', social: { github: 'mailto:sausatyajeet100@gmail.com', linkedin: 'https://www.linkedin.com/in/satyajeet-sau-53a315248/' } },
  { name: 'Mayank Pruthi', title: 'Frontend Dev @White Light IT', avatarUrl: '/Photos/Mayank.jpg', social: { github: 'mailto:pruthimayank2003@gmail.com', linkedin: 'https://www.linkedin.com/in/pruthimayank/' } },
  { name: 'Mehul Anand', title: 'Intern @IIT Delhi', avatarUrl: '/Photos/Mehul.jpeg', social: { github: 'mailto:mehulanand78@gmail.com', linkedin: 'https://www.linkedin.com/in/mehulxyz/' } },
  { name: 'Harsh Nainwaya', title: 'Intern @BirchStreet Systems', avatarUrl: '/Photos/Harsh_Nainwaya.jpg', social: { github: 'mailto:nainwayaharsh2003@gmail.com', linkedin: 'https://www.linkedin.com/in/harsh-nainwaya-966714252' } },
  { name: 'Tanuja Pujari', title: 'Ex Software Dev Intern @SUEZ',  avatarUrl: '/Photos/Tanuja.jpg', social: { github: 'mailto:tanujapujari2004@gmail.com', linkedin: 'https://www.linkedin.com/in/tanujapujari' } },
  { name: 'Charu Aggarwal', title: ' System Engineer @TCS', avatarUrl: '/Photos/charu.jpeg', social: { github: 'mailto:01charuaggarwal@gmail.com', linkedin: 'https://www.linkedin.com/in/1charuaggarwal/' } },
  { name: 'Nikhil Aswal', title: 'Frontend Dev @Staar Payout', avatarUrl: '/Photos/Nikhil.jpg', social: { github: 'mailto:nikhilaswal1913@gmail.com', linkedin: 'https://www.linkedin.com/in/nikhil-aswal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' } },
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
