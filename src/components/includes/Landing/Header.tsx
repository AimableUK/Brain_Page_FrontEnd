import DeskHeader from "./DeskHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div className="">
      {/* Desktop Header */}
      <DeskHeader />

      {/* Tablet + mobile Header */}
      <MobileHeader />
    </div>
  );
};

export default Header;
