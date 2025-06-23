import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import './Team.css';

// The data structure is now updated with the official names and roles you provided.
const teamData = {
  leaders: [
    { name: 'Asmit Kumar Roy', title: 'President', social: { github: '#', linkedin: '#' } },
    { name: 'Neelesh Kumar', title: 'Vice-President', social: { github: '#', linkedin: '#' } },
    { name: 'Akshat Tyagi', title: 'Secretary', social: { github: '#', linkedin: '#' } },
    { name: 'Kangna Shrivastava', title: 'Treasurer', social: { github: '#', linkedin: '#' } },
    { name: 'Rishabh Verma', title: 'Deputy Head', social: { github: '#', linkedin: '#' } },
  ],
  technical: {
    leads: [
      { name: 'Alok Kumar Jha', title: 'Head', social: { github: '#', linkedin: '#' } },
      { name: 'Harsh Naagar', title: 'Co-Head', social: { github: '#', linkedin: '#' } }
    ],
    members: [
      { name: 'Ayush Kumar Singh', title: 'Member', social: { github: '#', linkedin: '#' } },
      { name: 'Ankit Choudhary', title: 'Member', social: { github: '#', linkedin: '#' } },
      { name: 'Aman Verma', title: 'Member', social: { github: '#', linkedin: '#' } },
      { name: 'Aman', title: 'Member', social: { github: '#', linkedin: '#' } },
    ]
  },
  graphics: {
    leads: [
        { name: 'Md. Abdullah Meraj', title: 'Head', social: { github: '#', linkedin: '#' } },
        { name: 'Priyal Jain', title: 'Co-Head', social: { github: '#', linkedin: '#' } }
    ],
    members: [
        { name: 'Avishka Bhardwaj', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Niharika Kumari', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Ankur Pandey', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Anantabh Arin Kashyup', title: 'Member', social: { github: '#', linkedin: '#' } }
    ]
  },
  management: {
    leads: [
        { name: 'Anwesha Sen', title: 'Head', social: { github: '#', linkedin: '#' } },
        { name: 'Akshat Jain', title: 'Co-Head', social: { github: '#', linkedin: '#' } }
    ],
    members: [
        { name: 'Atula (1)', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Atula (2)', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Atula (3)', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Atula (4)', title: 'Member', social: { github: '#', linkedin: '#' } }
    ]
  },
  content: {
    leads: [
        { name: 'Sanskriti Bishnoi', title: 'Head', social: { github: '#', linkedin: '#' } },
        { name: 'Rishabh Verma', title: 'Co-Head', social: { github: '#', linkedin: '#' } }
    ],
    members: [
        { name: 'Vanshika Shrivastava', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Shreya Sai', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Atula (5)', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Atula (6)', title: 'Member', social: { github: '#', linkedin: '#' } }
    ]
  },
  social: {
    leads: [
        { name: 'Pratyush Patwal', title: 'Head', social: { github: '#', linkedin: '#' } },
        { name: 'Ayush Parashar', title: 'Co-Head', social: { github: '#', linkedin: '#' } }
    ],
    members: [
        { name: 'Atula (7)', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Atula (8)', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Atula (9)', title: 'Member', social: { github: '#', linkedin: '#' } },
        { name: 'Atula (10)', title: 'Member', social: { github: '#', linkedin: '#' } }
    ]
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