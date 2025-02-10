import { CustomButtonProps } from "../../utils/types";

export default function CustomButton({ text, onClick, className, isActive, dataAos }: CustomButtonProps) {
  return (
    <button
      type="button"
      className={`${isActive ? 'bg-gradient-to-r from-[#EB1E1E] to-[#851111]' : 'bg-[#1D1D1D]'} px-6 py-3 rounded-sm cursor-pointer ${className}`}
      onClick={onClick ? onClick : () => console.log("No Function")}
      data-aos={dataAos}
    >
      {text}
    </button>
  );
}
