import Link from "next/link";

const IconBox = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="relative inline-block text-4xl "
    >
      <div className="before:ease relative p-3 rounded-md overflow-hidden border-2 border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
        <span className="relative z-10">{children}</span>
      </div>
    </Link>
  );
};

export default IconBox;
