import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="bg-slate-900 min-h-screen flex justify-center items-center">
        <div className="text-white text-center bg-emerald-950 p-7 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg mb-8">Explore our dashboard or login to get started.</p>
          <div className="space-x-4">
            <Link href="/dashboard">
              <p className="text-xl font-semibold hover:font-extrabold hover:text-blue-900">Dashboard</p>
            </Link>
            <Link href="/login">
              <p className="text-xl font-semibold hover:font-extrabold hover:text-blue-900">Login</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
