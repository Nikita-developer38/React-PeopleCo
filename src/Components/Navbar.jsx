import bellIcon from "../Images/bellIcon.png";
import profile from "../Images/profile.png";
const Navbars = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-md">
          <div
            className="navbar-brand fw-bold fs-2"
            style={{ color: "#6941C6" }}
            href="#"
          >
            PEOPLE.CO
          </div>
          <div className="d-flex flex-row">
            <img src={bellIcon} alt=".." />
            <img src={profile} alt=".." />
            <div className="pt-1 ms-2" style={{ fontWeight: " 600" }}>
              Co Founder
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbars;
