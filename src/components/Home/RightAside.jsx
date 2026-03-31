import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const RightAside = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-primary mb-4">Login With</h2>

        <div className="space-y-3">
          <button className="btn btn-outline w-full justify-center rounded-none text-sm">
            G Login with Google
          </button>

          <button className="btn btn-outline w-full justify-center rounded-none text-sm">
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-primary mb-4">Find Us On</h2>

        <div className="border border-base-300">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-base-300 text-sm text-accent">
            <FaFacebookF className="text-blue-600" />
            Facebook
          </div>

          <div className="flex items-center gap-3 px-4 py-3 border-b border-base-300 text-sm text-accent">
            <FaTwitter className="text-sky-500" />
            Twitter
          </div>

          <div className="flex items-center gap-3 px-4 py-3 text-sm text-accent">
            <span className="text-pink-500">◎</span>
            Twitter
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-primary mb-4">Q-Zone</h2>

        <div className="bg-base-200 p-4 space-y-4">
          <img
            src="https://via.placeholder.com/250x120"
            alt="swimming"
            className="w-full"
          />
          <img
            src="https://via.placeholder.com/250x120"
            alt="class"
            className="w-full"
          />
          <img
            src="https://via.placeholder.com/250x120"
            alt="playground"
            className="w-full"
          />
        </div>

        <div className="mt-4">
          <img
            src="https://via.placeholder.com/250x300"
            alt="ad"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RightAside;