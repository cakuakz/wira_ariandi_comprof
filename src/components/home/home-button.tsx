import { HomeButtonProps } from "../../utils/types";

export default function MainButton({ text, onClick, className, dataAos }: HomeButtonProps) {
  return (
    <button
      type="button"
      className={`px-6 py-3 rounded-sm cursor-pointer bg-gradient-to-r from-[#EB1E1E] to-[#851111] ${className}`}
      onClick={onClick ? onClick : () => console.log("No Function")}
      data-aos={dataAos}
    >
      {text}
    </button>
  );
}
