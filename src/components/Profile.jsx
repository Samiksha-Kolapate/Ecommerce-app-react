import React, { useEffect, useState } from "react";
import axios from "axios";


import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../Shared/config";

const Profile = (props) => {
  const [profileData, setProfileData] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.profileApi, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    fetchProfile();
  }, [accessToken]);

// useEffect = (() =>{

// },[])

  const handleLogout = () => {
    localStorage.removeItem('token');
    props.setIsAuthenticated(false);
    setShowLogoutModal(false);
    navigate('/login');
  };

  const toggleLogoutModal = () => {
    setShowLogoutModal(!showLogoutModal);
  };

  return (
    <>
      <ul className="dropdown-menu dropdown-menu-end">
        {profileData ? (
          <>
            <li className="dropdown-item"><strong>{profileData.name}</strong></li>
            <li className="dropdown-item"><strong>{profileData.email}</strong></li>
            <li className="dropdown-item btn" onClick={toggleLogoutModal}><strong>Logout</strong></li>
          </>
        ) : (
          <li className="dropdown-item">Loading profile...</li>
        )}
        
      </ul>
      <div className={`modal fade ${showLogoutModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Logout</h5>
              <button type="button" className="btn-close" onClick={toggleLogoutModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to log out?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggleLogoutModal}>Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
