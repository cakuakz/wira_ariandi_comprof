type HomeButtonProps = {
    text: string;
    onClick?: () => void
}

export default function HomeButton({ text, onClick }: HomeButtonProps) {
  return (
    <button
        type="button"
        className="px-6 py-3 rounded-sm cursor-pointer bg-gradient-to-r from-[#EB1E1E] to-[#851111]"
        onClick={onClick ? onClick : () => console.log("No Function")}
    >
        {text}
    </button>
  )
}
