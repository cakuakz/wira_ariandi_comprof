type CustomBadgeProps = {
  title: string;
};

export default function CustomBadge({ title }: CustomBadgeProps) {
  return (
    <div className="inline-block px-4 py-2 bg-gradient-to-b from-[#DB1414] to-[#851111] border border-[#E95959] rounded-xl text-[#F9F9F9] text-[20px] font-semibold badge-drop-shadow badge-inner-shadow">
      {title}
    </div>
  );
}
