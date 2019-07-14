import React from "react";
import { LinkButton } from "../../components/";
import "./style.scss";

const Profile = () => {
  return (
    <div>
      <h1>PERFIL</h1>
      <LinkButton text="Editar perfil" to="profile/edit" />
    </div>
  );
};

export default Profile;
