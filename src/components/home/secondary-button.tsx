import { HomeButtonProps } from "../../utils/types";

export default function SecondaryButton({ text, onClick, className }: HomeButtonProps) {
  return (
    <button
      type="button"
      className={`px-6 py-3 rounded-sm cursor-pointer bg-[#1D1D1D] ${className}`}
      onClick={onClick ? onClick : () => console.log("No Function")}
    >
      {text}
    </button>
  );
}
