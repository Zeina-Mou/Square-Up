import './Dashboard.css'
import { useState } from 'react';
import GenericManager from '../Manager/GenericManager';

const DASHBOARD_CONFIG = {
  services: {
    title: "Our Services",
    resource: "ourservices",
    keys: ["titel", "description", "button", "image"]
  },
  about: {
    title: "About Us",
    resource: "aboutus",
    keys: ["titel", "description", "image"]
  },
  testimonials: {
    title: "Testimonials",
    resource: "testimonials",
    keys: ["name1", "title", "desc", "text", "profile"]
  },
  faq: {
    title: "FAQ",
    resource: "faq",
    keys: ["question", "answer"]
  },
  projects: {
    title: "Projects",
    resource: "projects",
    keys: ["firstTitel", "secondTitel", "paragraph", "link"]
  },
  story: {
    title: "Our Story",
    resource: "ourstory",
    keys: ["number", "title", "desc"]
  },
  process: {
    title: "At Square Up (Process)",
    resource: "atsquareup",
    keys: ["number", "title", "desc"]
  },
  "users" : {
    title: "Registered Users",
    resource: "users",
    keys: ["id", "name", "email", "options", "message"]
  }
};

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('services');

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Control Panel</h2>
        {Object.keys(DASHBOARD_CONFIG).map((key) => (
          <button 
            key={key}
            className={activeSection === key ? 'active' : ''} 
            onClick={() => setActiveSection(key)}>
            {DASHBOARD_CONFIG[key].title}
          </button>
        ))}
      </aside>

      <main className="main-content">
        <div className="table-card">
          <GenericManager sectionConfig={DASHBOARD_CONFIG[activeSection]} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;