import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center items-center bg-lime-300 text-white font-medium py-4 text-lg">
      <Link
        className="mx-4 transition-all hover:text-slate-100"
        href={"/dashboard"}
        replace
      >
        Dashboard
      </Link>
      <Link
        className="mx-4 transition-all hover:text-slate-100"
        href={"/login"}
        replace
      >
        Sign In
      </Link>
    </div>
  );
};

export default Page;
