export default function DetailOrgTitle({ title }: { title: string }) {
  return (
    <span 
        className="relative top-32 w-full text-center md:w-fit md:px-12 py-3 bg-gradient-to-l from-[#851111] to-[#EB1E1E] text-[42px] lg:text-[56px] font-semibold"
        data-aos="fade-up"
    >
      {title}
    </span>
  );
}
