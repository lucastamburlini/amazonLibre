import GoogleButton from "@/app/ui/GoogleButton";
import LoginForm from "@/app/ui/LoginForm";

export default function () {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />

          <p className="flex w-full justify-center text-sm font-medium leading-6 text-gray-900 mt-5 mb-5">
            Or login with
          </p>

          <GoogleButton />
        </div>
      </div>
    </>
  );
}
