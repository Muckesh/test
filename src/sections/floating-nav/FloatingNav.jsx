import data from "./data";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";
import "./floating-nav.css";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      {/* offset={-500} */}
      <Scrollspy
        offset={-500}
        className="scrollspy"
        items={["header", "skills", "experience", "portfolio", "contact"]}
        currentClassName="active"
      >
        {data.map((item) => (
          <Nav className="hover" key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
