import { googleLoginAction } from "@/server-actions/serverActions";

export default function LoginPage() {
  return (
    <>
      <div className="loginfront flex flex-center flex-col full-w">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>
          Visit out main website{" "}
          <a href="https://linkedin.com" target="_blank">
            TRZBlogs
          </a>
        </p>
        <form action={googleLoginAction}>
          <button className="mt-2">Login with Google</button>
        </form>
      </div>
    </>
  );
}
