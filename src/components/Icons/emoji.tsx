import { FC } from "react";
import SVGProps from "../../types/svg";

export const EmojiIcon: FC<SVGProps> = ({ width = "24", height = "24" }) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width + "px"}
      height={height + "px"}
      viewBox={viewBox}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path>
      <path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path>
    </svg>
  );
};
