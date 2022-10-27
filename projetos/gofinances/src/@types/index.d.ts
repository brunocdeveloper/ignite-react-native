declare module "*.svg" {
  import react from "react";
  import {} from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
