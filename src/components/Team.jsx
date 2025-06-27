import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import './Team.css';

// The data structure is now updated with the official names and roles you provided .This includes the leaders and members of each department, along with their social media links and avatar URLs.
// Ensure that the avatar URLs are correctly set for each member, and placeholders are used where necessary. Change the placeholder URLs to actual images if available.
// The teamData object is structured to include leaders, technical, graphics, management, content, and social departments with their respective members.
// The component renders the leadership section first, followed by tabs for each department. When a tab is clicked, it displays the leads and members of that department. 
// It also hovers over the leaders and members to show their names, titles, and social media links. 
// Do not change any other data only change this data structure to match the official names and roles you provided.
const teamData = {
  leaders: [
    { name: 'Neelesh Kumar', title: 'Vice-President', avatarUrl: '/Photos/Neelesh.png',social: { github: '#', linkedin: '#',instagram: "#" } },
    { name: 'Asmit Kumar Roy', title: 'President', avatarUrl: '/Photos/Asmit.png', social: { github: 'https://github.com/asmitkumarroy', linkedin: 'https://www.linkedin.com/in/asmit-kumar-roy',instagram: "https://www.instagram.com/_asmit_2304"} },
    { name: 'Akshat Tyagi', title: 'Secretary', avatarUrl: '/Photos/Akshat_Tyagi.png', social: { github: '#', linkedin: '#',instagram: "#" } },
    { name: 'Kangna Shrivastava', title: 'Treasurer', avatarUrl: '/Photos/Kangna.png', social: { github: '#', linkedin: '#',instagram: "#" } },
    { name: 'Rishabh Verma', title: 'Deputy Head',avatarUrl: '/Photos/Rishabh.png', social: { github: '#', linkedin: '#',instagram: "#" } },
  ],
  technical: {
    leads: [
      { name: 'Alok Kumar Jha', title: 'Head', avatarUrl: '/Photos/Alok.png', social: { github: '#', linkedin: '#',instagram: "#" } },
      { name: 'Harsh Naagar', title: 'Co-Head', avatarUrl: '/Photos/Harsh.png', social: { github: '#', linkedin: '#',instagram: "#" } }
    ],
    members: [
      { name: 'Ayush Kumar Singh', title: 'Member', avatarUrl: '/Photos/Ayush_Kumar.png', social: { github: '#', linkedin: '#',instagram: "#" } },
      { name: 'Ankit Choudhary', title: 'Member', avatarUrl: '/Photos/Ankit.png', social: { github: '#', linkedin: '#',instagram: "#" } },
      { name: 'Aman Verma', title: 'Member', avatarUrl: '/Photos/Aman.png',social: { github: '#', linkedin: '#',instagram: "#" } },
      //{ name: 'Niharika Kumari', title: 'Member', avatarUrl: '/Photos/Niharika.png', social: { github: '#', linkedin: '#',instagram: "#" } },
    ]
  },
  graphics: {
    leads: [
        { name: 'Md. Abdullah Meraj', title: 'Head', avatarUrl: '/Photos/Abdullah.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        { name: 'Priyal Jain', title: 'Co-Head', avatarUrl: '/Photos/Priyal.png',social: { github: '#', linkedin: '#',instagram: "#" } }
    ],
    members: [
        { name: 'Avishka Bhardwaj', title: 'Member', avatarUrl: '/Photos/Avishka.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        { name: 'Niharika Kumari', title: 'Member', avatarUrl: '/Photos/Niharika.png', social: { github: '#', linkedin: '#',instagram: "#" } },
        //{ name: 'Ankur Pandey', title: 'Member', avatarUrl: '/Photos/Ankur.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        { name: 'Anantabh Kashyup', title: 'Member', avatarUrl: '/Photos/Arin.png',social: { github: '#', linkedin: '#',instagram: "#" } }
    ]
  },
  management: {
    leads: [
        { name: 'Anwesha Sen', title: 'Head', avatarUrl: '/Photos/Anwesha.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        { name: 'Akshat Jain', title: 'Co-Head', avatarUrl: '/Photos/Akshat_Jain.png',social: { github: '#', linkedin: '#',instagram: "#" } }
    ],
    members: [
        { name: 'Atuyla', title: 'Member', avatarUrl: '/Photos/Atulya.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        { name: 'Ankur Pandey', title: 'Member', avatarUrl: '/Photos/Ankur.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        //{ name: 'Atula (3)', title: 'Member', avatarUrl: '/Photos/Atulya.jpg',social: { github: '#', linkedin: '#',instagram: "#" } },
        //{ name: 'Atula (4)', title: 'Member', avatarUrl: '/Photos/Atulya.jpg',social: { github: '#', linkedin: '#',instagram: "#" } }
    ]
  },
  content: {
    leads: [
        { name: 'Sanskriti Bishnoi', title: 'Head', avatarUrl: '/Photos/Sanskriti.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        { name: 'Rishabh Verma', title: 'Co-Head', avatarUrl: '/Photos/Rishabh.png',social: { github: '#', linkedin: '#',instagram: "#" } }
    ],
    members: [
        { name: 'Vanshika', title: 'Member', avatarUrl: '/Photos/Vanshika.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        { name: 'Shreya Sai', title: 'Member', avatarUrl: '/Photos/Shreya.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        
    ]
  },
  social: {
    leads: [
    { name: 'Pratyush Patwal', title: 'Head', avatarUrl: '/Photos/Pratyush.png',social: { github: '#', linkedin: '#',instagram: "#" } },
  
    { name: 'Ayush Parashar', title: 'Co-Head', avatarUrl: '/Photos/Ayush_Parashar.png', social: { github: '#', linkedin: '#',instagram: "#" } } 
],
    members: []
  },
};

const topRowLeaders = teamData.leaders.slice(0, 3);
const bottomRowLeaders = teamData.leaders.slice(3, 5);
const TABS = ['Technical', 'Graphics', 'Management', 'Content', 'Social'];

const Team = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const activeDepartment = teamData[activeTab.toLowerCase()];

  const addDefaultAvatar = (member) => ({
    ...member,
    avatarUrl: member.avatarUrl || `https://placehold.co/250x350/000000/FFFFFF?text=${member.name.split(' ').map(n=>n[0]).join('')}`,
  });

  return (
    <div className="new-page-container new-team-page">
      <h1 className="new-page-main-title">Meet the Team</h1>

      <section className="new-team-section">
        <h2 className="new-team-category-title">Leadership</h2>
        <div className="leaders-layout-container">
          <div className="new-team-grid leaders-top-row">
            {topRowLeaders.map((member) => ( <ProfileCard key={member.name} {...addDefaultAvatar(member)} /> ))}
          </div>
          <div className="new-team-grid leaders-bottom-row">
            {bottomRowLeaders.map((member) => ( <ProfileCard key={member.name} {...addDefaultAvatar(member)} /> ))}
          </div>
        </div>
      </section>

      <div className="new-team-tabs">
        {TABS.map((tabName) => (
          <button
            key={tabName}
            className={`new-tab-button ${activeTab === tabName.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveTab(tabName.toLowerCase())}
          >
            {tabName}
          </button>
        ))}
      </div>

      <section className="new-team-section">
        <h2 className="new-team-category-title">Department Leads</h2>
        <div className="new-team-grid department-leads-grid">
          {activeDepartment.leads.map((member) => ( <ProfileCard key={member.name} {...addDefaultAvatar(member)} /> ))}
        </div>
        
        <h2 className="new-team-category-title members-title">Members</h2>
        <div className="new-team-grid department-members-grid">
          {activeDepartment.members.map((member) => ( <ProfileCard key={member.name} {...addDefaultAvatar(member)} /> ))}
        </div>
      </section>
    </div>
  );
};

export default Team;