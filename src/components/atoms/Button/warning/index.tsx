import buttonFactory from "../buttonFactory";
import IPropsButton from "../IPropsButton";

const WarningButton: React.FC<IPropsButton> = buttonFactory(
  {
    backgroundColor: "red"
  },
  {
    color: "white"
  }
);

export default WarningButton;
