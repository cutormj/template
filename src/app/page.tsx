
import SampleTheme from "@/components/SampleTheme";
import SocialLogins from "@/components/SocialLogins";
import dbConnect from "@/lib/mongo";
import Link from "next/link";
export default function Home() {

  

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3xl my-3">Start Here!</h1>
      {/* <code className="text-red-500 underline">You are in <b>Default Template</b>!</code> */}
      <span>Portfolio</span>
      <SocialLogins/>
      {/* <p className="my-3">
        Dont you have an account?
        <Link href="register" className="mx-2 underline">Register</Link>
      </p> */}
      <SampleTheme />
    </div>
  );
}
