import React from "react";
import ProfileSectionDesktop from "../components/ProfileSectionDesktop";
import ProfileSectionMobile from "../components/ProfileSectionMobile";

import "./ProfileSection.css";

const ProfileSection = () => {
  if (window.innerWidth < 992) {
    return <ProfileSectionMobile />;
  } else {
    return <ProfileSectionDesktop />;
  }
};

export default ProfileSection;
