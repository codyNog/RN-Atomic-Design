import buttonFactory from "../buttonFactory";
import IPropsButton from "../IPropsButton";

const DangerButton: React.FC<IPropsButton> = buttonFactory(
  {
    backgroundColor: "red"
  },
  {
    color: "white"
  }
);

export default DangerButton;
