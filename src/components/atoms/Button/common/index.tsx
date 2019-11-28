import buttonFactory from "../buttonFactory";
import IPropsButton from "../IPropsButton";

const Button: React.FC<IPropsButton> = buttonFactory(
  { backgroundColor: "blue" },
  { color: "white" }
);

export default Button;
