import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Status from "./Status";
import Message from "./Message"
const Referal = ()=>{
    return(
      <div className="projects-1">
             <div className="app-container">
        <div className="app-header">
          <Header/>
          <div className="app-header-right">
            <button className="mode-switch" title="Switch Theme">
              <svg className="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            <button className="add-btn" title="Add New Project">
              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button>
            <button className="notification-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </button>
            <button className="profile-btn">
              <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1685272110/samples/people/boy-snow-hoodie.jpg" />
              <span>Pranshu Yadav</span>
            </button>
          </div>
          <button className="messages-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
          </button>
        </div>
        <div className="app-content">
          <Sidebar/>
          <div className="projects-section">
            <div className="projects-section-header">
              <p>Services</p>
              
            </div>
            <div className="projects-section-line">
              <div className="projects-status">
                <div className="item-status">
                  <span className="status-number">45</span>
                  <span className="status-type">In Progress</span>
                </div>
                <div className="item-status">
                  <span className="status-number">24</span>
                  <span className="status-type">Upcoming</span>
                </div>
                <div className="item-status">
                  <span className="status-number">62</span>
                  <span className="status-type">Total Projects</span>
                </div>
              </div>
              <div className="view-actions">
                
                <button className="view-btn grid-view active" title="Grid View">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" /></svg>
                </button>
              </div>
            </div>
            <div className="project-boxes jsGridView">
              <Status/>
        </div>
      </div>
     <Message/>
      </div>
      </div>
        </div>
    )
}
export default Referal;