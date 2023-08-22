import CompanyProfile from "../Company/CompanyProfile";
import style from "./Profile.module.css";

const Profile = ({ name, companyName, companyLocation }) => {
  // const name = props.name;
  // const companyName = props.companyName;
  // const companyLocation = props.companyLocation;
  // const { name, companyName, companyLocation } = props;
  return (
    <div className={style.friendCard}>
      <h2>{name}</h2>
      <CompanyProfile
        companyName={companyName}
        companyLocation={companyLocation}
      />
    </div>
  );
};

export default Profile;
