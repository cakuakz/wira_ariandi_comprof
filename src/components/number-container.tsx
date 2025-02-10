export default function NumberContainer({ number }: { number: string}) {
  return (
    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#D43D3D] bg-gradient-to-b from-[#DB1414] to-[#851111] flex items-center justify-center">
      <span className="text-white font-medium">{number}</span>
    </div>
  );
}
