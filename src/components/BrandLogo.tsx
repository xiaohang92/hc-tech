import Image from "next/image";
import logo from "/public/hc-tech-mark.png";

type BrandLogoProps = {
  priority?: boolean;
  onDark?: boolean;
};

const BrandLogo = ({ priority = false, onDark = false }: BrandLogoProps) => {
  const mark = (
    <Image
      src={logo}
      alt=""
      width={40}
      height={40}
      priority={priority}
      className="h-10 w-10 object-contain"
    />
  );

  return (
    <span className="inline-flex items-center gap-2.5">
      {onDark ? (
        <span className="inline-flex rounded-lg bg-white p-1">{mark}</span>
      ) : (
        mark
      )}
      <span
        className={`text-sm font-semibold tracking-tight sm:text-base ${
          onDark ? "text-white" : "text-gray-900"
        }`}
      >
        H&C Tech Solution
      </span>
    </span>
  );
};

export default BrandLogo;
