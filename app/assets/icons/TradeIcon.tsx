import Svg, { Path } from "react-native-svg";

export const TradeIcon: React.FC<Icon> = ({ color }) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M16.55 12L21.5 16.95L16.55 21.9L15.136 20.486L17.672 17.949L4.5 17.95V15.95H17.672L15.136 13.414L16.55 12ZM8.45 2L9.864 3.414L7.328 5.95H20.5V7.95H7.328L9.864 10.486L8.45 11.9L3.5 6.95L8.45 2Z"
        fill={color}
      />
    </Svg>
  );
};
