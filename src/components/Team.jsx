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
    { name: 'Anwesha Sen', title: 'President', avatarUrl: '/Photos/Anwesha.png',social: { github: 'https://github.com/anwesha1367', linkedin: 'https://www.linkedin.com/in/anwesha-sen-97170227b',instagram: "https://www.instagram.com/anwesha_sen9405?igsh=MW9jbTlpd2xxbWJiNw==" } },
    { name: 'M. Abdullah Meraj', title: 'Vice President', avatarUrl: '/Photos/Abdullah.png',social: { github: 'https://github.com/mohdabdullahmeraj', linkedin: 'https://www.linkedin.com/in/mohdabdullahmeraj/',instagram: "https://www.instagram.com/mohdabdullahmeraj/" } },
    { name: 'Priyal Jain', title: 'Secretary ', avatarUrl: '/Photos/Priyal.png',social: { github: 'https://github.com/pihu404', linkedin: 'https://www.linkedin.com/in/priyal-jain-92863b282',instagram: "https://www.instagram.com/priyal2936?igsh=MW92ZDIzNW5wcnZjNA==" } },
    { name: 'Vanshika S.', title: 'Treasurer', avatarUrl: '/Photos/Vanshika.png',social: { github: 'https://github.com/Vanshika-Srivastava79', linkedin: 'https://www.linkedin.com/in/vanshikasrivastava79',instagram: "https://www.instagram.com/vannssszzz/" } },
  ],
  technical: {
    leads: [
      { name: 'Ayush Kumar S.', title: 'Head', avatarUrl: '/Photos/Ayush_Kumar.png', social: { github: 'https://github.com/ayushkumarsingh14', linkedin: 'https://www.linkedin.com/in/ayush-kumar-singh-7ba5862ba',instagram: "https://www.instagram.com/ayush.feb14/" } },
      { name: 'Ankit Choudhary', title: 'Co-Head', avatarUrl: '/Photos/Ankit.png', social: { github: 'https://github.com/ankit77003', linkedin: 'https://www.linkedin.com/in/ankit-choudhary-978a11266/',instagram: "https://www.instagram.com/ankitchoudhary4141/" } },
    ],
    // members: []                commented bcz can use in future
  },
  graphics: {
    leads: [
      { name: 'Avishka Bhardwaj', title: 'Head', avatarUrl: '/Photos/Avishka.png',social: { github: 'https://github.com/avishkabhardwaj', linkedin: 'https://www.linkedin.com/in/avishka-bhardwaj-091807327',instagram: "https://www.instagram.com/avishka.20?utm_source=qr&igsh=MTNzZ2I3cDdsYWV2NQ==" } },
      { name: 'Anantabh Kashyap', title: 'Co-Head', avatarUrl: '/Photos/Arin.png',social: { github: 'https://github.com/arxnkshyp/', linkedin: 'https://www.linkedin.com/in/arin-kashyap/',instagram: "https://www.instagram.com/arxnkshyp/" } },
    ],
    // members: []
  },
  management: {
    leads: [
      { name: 'Atulya Mukesh', title: 'Head', avatarUrl: '/Photos/Atulya.png',social: { github: 'https://github.com/atulya-mukesh', linkedin: 'https://www.linkedin.com/in/atulya-mukesh-12716a2ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: "https://www.instagram.com/atulya.mukesh/profilecard/?igsh=MThyenFxOTEydWZ5Zw==" } },
      { name: 'Akshat Jain', title: 'Co-Head', avatarUrl: '/Photos/Akshat_Jain.png',social: { github: 'https://github.com/Akshatjain2411', linkedin: 'https://www.linkedin.com/in/Akshatjain',instagram: "https://www.instagram.com/akshatjain2411" } }
    ],
    // members: []
  },
  content: {
    leads: [
      { name: 'Shreya Sai', title: 'Head', avatarUrl: '/Photos/Shreya.png',social: { github: 'https://github.com/sst2105', linkedin: 'https://www.linkedin.com/in/shreya-sai-thanikella/',instagram: "https://www.instagram.com/l_.shreya._l" } },
      { name: 'Rimi Kumari', title: 'Co-Head', avatarUrl: '/Photos/Rimi.png',social: { github: 'https://github.com/', linkedin: 'https://www.linkedin.com/in/',instagram: "https://www.instagram.com/" } },
    ],
    // members: []
  },
  social: {
    leads: [
    { name: 'Pratyush Patwal', title: 'Head', avatarUrl: '/Photos/Pratyush.png',social: { github: 'https://github.com/pratyush1279', linkedin: 'https://www.linkedin.com/in/pratyush-patwal-198144333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: "https://www.instagram.com/ohhpratyush?igsh=MWl3bDJjNnowdjQ4ZQ==" } },
  
    { name: 'Ayush Parashar', title: 'Co-Head', avatarUrl: '/Photos/Ayush_Parashar.png', social: { github: 'https://github.com/ayushparashar91', linkedin: 'https://www.linkedin.com/in/ayush-parashar-49a596213',instagram: "https://www.instagram.com/ayushparashar19" } },
  ],
    // members: []
  },
  pr: {
    leads: [
      { name: 'Avishka Bhardwaj', title: 'Head', avatarUrl: '/Photos/Avishka.png',social: { github: 'https://github.com/avishkabhardwaj', linkedin: 'https://www.linkedin.com/in/avishka-bhardwaj-091807327',instagram: "https://www.instagram.com/avishka.20?utm_source=qr&igsh=MTNzZ2I3cDdsYWV2NQ==" } },
    ],
    // members: []
  },
  members: {
    leads: [
      { name: 'Amisha', title: 'Member', avatarUrl: '/Photos/Amisha.png',social: { github: 'https://github.com/Amisha1kumari', linkedin: 'https://www.linkedin.com/in/amisha-kumari-04bb10328',instagram: "https://www.instagram.com/amixh.aa?igsh=MTFjaHMwemZ2dmw3eA==" } },
      { name: 'Kartik Mishra', title: 'Member', avatarUrl: '/Photos/Kartik.png',social: { github: 'https://github.com/codelawyer-max', linkedin: 'https://www.linkedin.com/in/kartik-mishra-6139b9335',instagram: "https://www.instagram.com/kartikkmishraaa"} },
      { name: 'Prince Kumar', title: 'Member', avatarUrl: '/Photos/Prince.png',social: { github: 'https://github.com/Princekr267', linkedin: 'https://www.linkedin.com/in/prince-kumar-27a12b315',instagram: "https://www.instagram.com/princekrr267"} },
      { name: 'Dilawar Ali', title: 'Member', avatarUrl: '/Photos/Dilawar.png',social: { github: 'https://github.com/Dilawar-ali313', linkedin: 'https://www.linkedin.com/in/dilawar-ali-4533ab335',instagram: "https://www.instagram.com/dilawarzaidi._?igsh=N3ZkdXhhNDZjNHpl"} },
      { name: 'Suhani Mittal', title: 'Member', avatarUrl: '/Photos/Suhani.png',social: { github: 'https://github.com/suhani-ux123', linkedin: 'https://www.linkedin.com/in/suhani-mittal-a650a2381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',instagram: "https://www.instagram.com/suuhanii__m?igsh=MWljZWE0djNoaXJ5aw=="} },
      { name: 'Kushagra Pandey', title: 'Member', avatarUrl: '/Photos/Kushagra.png',social: { github: '', linkedin: '',instagram: ""} },
      { name: 'Tanvi Salhotra', title: 'Member', avatarUrl: '/Photos/tanvi_salhotra.png',social: { github: '', linkedin: '',instagram: ""} },
      { name: 'Anushka Dua', title: 'Member', avatarUrl: '/Photos/Anushka_Dua.png',social: { github: '', linkedin: '',instagram: ""} },
      { name: 'Rimjhim Shukla', title: 'Member', avatarUrl: '/Photos/Rimjhim.png',social: { github: '', linkedin: '',instagram: ""} },
      { name: 'Bhumika Dobha', title: 'Member', avatarUrl: '/Photos/Bhumika_Dobhal.png',social: { github: '', linkedin: '',instagram: ""} },
      // { name: '', title: 'Member', avatarUrl: '/Photos/.png',social: { github: '', linkedin: '',instagram: ""} },
    ]
  }
};

const topRowLeaders = teamData.leaders.slice(0, 2); // First 2 cards
const bottomRowLeaders = teamData.leaders.slice(2, 4); // Last 2 cards
const TABS = ['Technical', 'Graphics', 'Management', 'Content', 'Social', 'PR', 'Members'];

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
        <h2 className="new-team-category-title">Leadership</h2>

      <section className="new-team-section">
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
  
        {activeDepartment.leads && activeDepartment.leads.length > 0 && (
          <>
            <h2 className="new-team-category-title">
              {activeTab === 'members' ? 'Members' : 'Department Leads'}
            </h2>
            <div className={`new-team-grid ${activeTab === 'members' ? 'department-members-grid' : 'department-leads-grid'}`}>
              {activeDepartment.leads.map((member, index) => ( 
                <ProfileCard key={`${activeTab}-${index}`} {...addDefaultAvatar(member)} /> 
              ))}
            </div>
          </>
        )}
        
        {/* {activeDepartment.members && activeDepartment.members.length > 0 && (
          <>
            <h2 className="new-team-category-title members-title">Members</h2>
            <div className="new-team-grid department-members-grid">
              {activeDepartment.members.map((member) => ( <ProfileCard key={member.name} {...addDefaultAvatar(member)} /> ))}
            </div>
          </>
        )} */}
      </section>
    </div>
  );
};

export default Team;