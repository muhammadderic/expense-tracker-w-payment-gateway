import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen flex flex-col lg:flex-row items-center justify-center text-tarsier">
      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-screen flex justify-center items-center">
        <div className="relative w-1/2 h-1/2">
          <Image
            src="https://placehold.co/400"
            alt="Expenses Tracker app preview"
            fill={true}
            className="rounded-full object-cover"
            // Next.js optimizes images from remote sources, but some domains (like placehold.co) might not work properly.
            // Try disabling Next.js optimization
            unoptimized={true}
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 pr-10 text-center lg:text-left flex flex-col items-center lg:items-start">
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Track your <span className="font-extrabold text-secondary"> daily expenses </span> effortlessly
        </h1>

        <p className="text-xl font-medium max-w-[600px]">
          Use Expenses Tracker to easily keep track of your expenses. Get
          lifetime access for $9.
        </p>

        <div className="mt-10 space-x-3">
          <>
            <Link href="/" className="bg-black text-white py-2 px-4 rounded-lg font-medium">
              Login
            </Link>

            <Link href="/" className="bg-black/50 text-white py-2 px-4 rounded-lg font-medium">
              Register
            </Link>
          </>
        </div>
      </div>
    </div>
  );
}
