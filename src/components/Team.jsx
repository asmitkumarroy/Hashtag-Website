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
    { name: 'Neelesh Kumar', title: 'Vice-President', avatarUrl: '/Photos/Neelesh.png',social: { github: 'https://github.com/neeleshkr22', linkedin: 'https://www.linkedin.com/in/neelesh-kumar-rana/',instagram: "https://www.instagram.com/i.neeleshk" } },
    { name: 'Asmit Kumar Roy', title: 'President', avatarUrl: '/Photos/Asmit.png', social: { github: 'https://github.com/asmitkumarroy', linkedin: 'https://www.linkedin.com/in/asmit-kumar-roy',instagram: "https://www.instagram.com/_asmit_2304"} },
    { name: 'Akshat Tyagi', title: 'Secretary', avatarUrl: '/Photos/Akshat_Tyagi.png', social: { github: 'https://github.com/DastroG/', linkedin: 'https://www.linkedin.com/in/xyz/',instagram: "https://www.instagram.com/akshattyagi_17/" } },
    { name: 'Kangna Shrivastava', title: 'Treasurer', avatarUrl: '/Photos/Kangna.png', social: { github: 'https://github.com/KangnaShrivastva', linkedin: 'http://www.linkedin.com/in/kangna-shrivastva-9b542523a',instagram: "https://www.instagram.com/kangnaa._?igsh=MWVuNmcwMzFtMzc0aw==" } },
    { name: 'Rishabh Verma', title: 'Deputy Head',avatarUrl: '/Photos/Rishabh.png', social: { github: 'https://github.com/RishabhV28', linkedin: 'https://www.linkedin.com/in/rishabh-verma-9a4997262/',instagram: "https://www.instagram.com/wh0.zip__" } },
  ],
  technical: {
    leads: [
      { name: 'Alok Kumar Jha', title: 'Head', avatarUrl: '/Photos/Alok.png', social: { github: 'https://github.com/alokjha099', linkedin: 'https://www.linkedin.com/in/alok-kumar-jha-3521a1265',instagram: "https://www.instagram.com/alokjha245" } },
      { name: 'Harsh Naagar', title: 'Co-Head', avatarUrl: '/Photos/Harsh.png', social: { github: 'https://github.com/HarshNaagar77', linkedin: 'https://www.linkedin.com/in/harsh-naagar-a4b5b8207',instagram: "https://www.instagram.com/hnaagar04" } }
    ],
    members: [
      { name: 'Ayush Kumar Singh', title: 'Member', avatarUrl: '/Photos/Ayush_Kumar.png', social: { github: 'https://github.com/ayushkumarsingh14', linkedin: 'https://www.linkedin.com/in/ayush-kumar-singh-7ba5862ba',instagram: "https://www.instagram.com/ayush.feb14/" } },
      { name: 'Ankit Choudhary', title: 'Member', avatarUrl: '/Photos/Ankit.png', social: { github: 'https://github.com/ankit77003', linkedin: 'https://www.linkedin.com/in/ankit-choudhary-978a11266/',instagram: "https://www.instagram.com/ankitchoudhary4141/" } },
      { name: 'Aman Verma', title: 'Member', avatarUrl: '/Photos/Aman.png',social: { github: 'https://github.com/Batman0003333', linkedin: 'https://www.linkedin.com/in/aman-v-64223a293',instagram: "https://www.instagram.com/er.a_m_n_?igsh=MTczdXUwbzNheWdweA==" } },
      //{ name: 'Niharika Kumari', title: 'Member', avatarUrl: '/Photos/Niharika.png', social: { github: '#', linkedin: '#',instagram: "#" } },
    ]
  },
  graphics: {
    leads: [
        { name: 'Md. Abdullah Meraj', title: 'Head', avatarUrl: '/Photos/Abdullah.png',social: { github: 'https://github.com/mohdabdullahmeraj', linkedin: 'https://www.linkedin.com/in/mohdabdullahmeraj/',instagram: "https://www.instagram.com/mohdabdullahmeraj/" } },
        { name: 'Priyal Jain', title: 'Co-Head', avatarUrl: '/Photos/Priyal.png',social: { github: 'https://github.com/pihu404', linkedin: 'https://www.linkedin.com/in/priyal-jain-92863b282',instagram: "https://www.instagram.com/priyal2936?igsh=MW92ZDIzNW5wcnZjNA==" } }
    ],
    members: [
        { name: 'Avishka Bhardwaj', title: 'Member', avatarUrl: '/Photos/Avishka.png',social: { github: 'https://github.com/avishkabhardwaj', linkedin: 'https://www.linkedin.com/in/avishka-bhardwaj-091807327',instagram: "https://www.instagram.com/avishka.20?utm_source=qr&igsh=MTNzZ2I3cDdsYWV2NQ==" } },
        { name: 'Niharika Kumari', title: 'Member', avatarUrl: '/Photos/Niharika.png', social: { github: 'https://github.com/niharikakumari23', linkedin: 'https://www.linkedin.com/in/niharika-k-71b35730a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: "https://www.instagram.com/niha.stappen_" } },
        //{ name: 'Ankur Pandey', title: 'Member', avatarUrl: '/Photos/Ankur.png',social: { github: '#', linkedin: '#',instagram: "#" } },
        { name: 'Anantabh Kashyup', title: 'Member', avatarUrl: '/Photos/Arin.png',social: { github: 'https://github.com/arxnkshyp/', linkedin: 'https://www.linkedin.com/in/arin-kashyap/',instagram: "https://www.instagram.com/arxnkshyp/" } }
    ]
  },
  management: {
    leads: [
        { name: 'Anwesha Sen', title: 'Head', avatarUrl: '/Photos/Anwesha.png',social: { github: 'https://github.com/anwesha1367', linkedin: 'https://www.linkedin.com/in/anwesha-sen-97170227b',instagram: "https://www.instagram.com/anwesha_sen9405?igsh=MW9jbTlpd2xxbWJiNw==" } },
        { name: 'Akshat Jain', title: 'Co-Head', avatarUrl: '/Photos/Akshat_Jain.png',social: { github: 'https://github.com/Akshatjain2411', linkedin: 'https://www.linkedin.com/in/Akshatjain',instagram: "https://www.instagram.com/akshatjain2411" } }
    ],
    members: [
        { name: 'Atuyla', title: 'Member', avatarUrl: '/Photos/Atulya.png',social: { github: 'https://github.com/atulya-mukesh', linkedin: 'https://www.linkedin.com/in/atulya-mukesh-12716a2ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: "https://www.instagram.com/atulya.mukesh/profilecard/?igsh=MThyenFxOTEydWZ5Zw==" } },
        { name: 'Ankur Pandey', title: 'Member', avatarUrl: '/Photos/Ankur.png',social: { github: 'https://github.com/Ank77r', linkedin: 'http://www.linkedin.com/in/777-ankur-pandey',instagram: "https://www.instagram.com/vm_studios_official/" } },
        //{ name: 'Atula (3)', title: 'Member', avatarUrl: '/Photos/Atulya.jpg',social: { github: '#', linkedin: '#',instagram: "#" } },
        //{ name: 'Atula (4)', title: 'Member', avatarUrl: '/Photos/Atulya.jpg',social: { github: '#', linkedin: '#',instagram: "#" } }
    ]
  },
  content: {
    leads: [
        { name: 'Sanskriti Bishnoi', title: 'Head', avatarUrl: '/Photos/Sanskriti.png',social: { github: 'https://github.com/Sanskriti-Vishnoi', linkedin: 'https://www.linkedin.com/in/sanskriti-vishnoi-00866926a',instagram: "https://www.instagram.com/sanskriti_bishnoi/" } },
        { name: 'Rishabh Verma', title: 'Co-Head', avatarUrl: '/Photos/Rishabh.png',social: { github: 'https://github.com/RishabhV28', linkedin: 'https://www.linkedin.com/in/rishabh-verma-9a4997262/',instagram: "https://www.instagram.com/wh0.zip__" } }
    ],
    members: [
        { name: 'Vanshika Shrivastava', title: 'Member', avatarUrl: '/Photos/Vanshika.png',social: { github: 'https://github.com/Vanshika-Srivastava79', linkedin: 'https://www.linkedin.com/in/vanshikasrivastava79',instagram: "https://www.instagram.com/vannssszzz/" } },
        { name: 'Shreya Sai', title: 'Member', avatarUrl: '/Photos/Shreya.png',social: { github: 'https://github.com/sst2105', linkedin: 'https://www.linkedin.com/in/shreya-sai-thanikella/',instagram: "https://www.instagram.com/l_.shreya._l" } },
        
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