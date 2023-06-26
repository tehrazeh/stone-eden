import { NavButtons } from "../../Redux/datafilter/types";
import NavButton from "./NavButton";
export const Header: React.FC = () => {
  const buttonElems = (
    Object.keys(NavButtons) as Array<keyof typeof NavButtons>
  ).map((key) => {
    return <NavButton title={key} key={key} />;
  });
  return (
    <div className="bg-neutral-800 h-16 flex justify-center items-center">
      {buttonElems}
    </div>
  );
};

export default Header;
