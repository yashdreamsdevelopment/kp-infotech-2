const CompanyProfile = ({ companyLocation, companyName }) => {
  //   const companyLocation = props.companyLocation;
  //   const companyName = props.companyName;
  return (
    <p>
      {companyName} | {companyLocation}
    </p>
  );
};

export default CompanyProfile;
