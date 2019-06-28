import React from "react";
import { ButtonDefault } from "../../components/";
import "./style.scss";

const Profile = () => {
  return (
    <div>
      <h1>PERFIL</h1>
      <ButtonDefault name="Editar perfil" path="profile-edit" />
    </div>
  );
};

export default Profile;
