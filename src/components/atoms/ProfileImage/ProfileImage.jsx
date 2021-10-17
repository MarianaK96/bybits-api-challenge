import React from "react";
import ProfilePic from "../../../assets/images/profileimage.jpg";
import { ProfileImageStyles } from "./ProfileImage.styles";

const ProfileImage = () => {
  return (
    <>
      <ProfileImageStyles src={ProfilePic} alt="" />
    </>
  );
};

export default ProfileImage;
