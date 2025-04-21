import React from "react";

const SocialSignIn = () => {
  const handleGoogleSignIn = () => {
    // Replace with your actual Google sign-in logic
    console.log("Google Sign In triggered");
  };

  const handleGithubSignIn = () => {
    // Replace with your actual GitHub sign-in logic
    console.log("GitHub Sign In triggered");
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleGoogleSignIn}
        className="flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 bg-primaryPurple hover:bg-lightPurple text-white"
      >
        Sign In
        {/* Google SVG */}
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none">
          <g clipPath="url(#clip0)">
            <path
              d="M22.5 11.24c.01-.76-.07-1.51-.24-2.25H11.72v4.08h6.19a7.96 7.96 0 01-2.3 3.57l3.33 2.53C21.28 17.42 22.5 14.59 22.5 11.24z"
              fill="#4285F4"
            />
            <path
              d="M11.72 22c3.03 0 5.57-0.98 7.43-2.66l-3.54-2.69c-0.95.65-2.22 1.1-3.89 1.1-1.42 0-2.8-.45-3.94-1.27a7.88 7.88 0 01-2.42-3.82l-3.47 2.63A10.97 10.97 0 0011.72 22z"
              fill="#34A853"
            />
            <path
              d="M5.34 13.17a8.75 8.75 0 01-.37-2.17c0-.74.12-1.48.37-2.17L1.81 6a11 11 0 000 10L5.34 13.17z"
              fill="#FBBC05"
            />
            <path
              d="M11.72 4.25c1.61 0 3.17.59 4.34 1.64L19.23 2.86A10.93 10.93 0 0011.72 0 11 11 0 001.7 6.06l3.63 2.76c.44-1.32 1.3-2.47 2.47-3.34 1.17-.87 2.59-1.33 4-1.33z"
              fill="#EB4335"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="22" height="22" fill="white" transform="translate(0.5)" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <button
        onClick={handleGithubSignIn}
        className="flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 text-white bg-primaryPurple hover:bg-lightPurple"
      >
        Sign In
        {/* GitHub SVG */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 1.83C5.94 1.83 1.83 6.04 1.83 11.23c0 4.15 2.63 7.68 6.27 8.92.46.09.63-.2.63-.45v-1.78c-2.56.56-3.1-1.11-3.1-1.11-.42-1.09-1.03-1.38-1.03-1.38-.84-.59.06-.58.06-.58.93.06 1.42.95 1.42.95.82 1.44 2.15 1.02 2.67.78.08-.61.3-1.02.55-1.26-2.05-.23-4.2-1.05-4.2-4.68 0-1.03.36-1.87.95-2.53-.1-.23-.41-1.15.09-2.39 0 0 .77-.25 2.52.95.72-.2 1.5-.3 2.27-.3.77 0 1.55.1 2.27.3 1.74-1.2 2.51-.95 2.51-.95.51 1.24.2 2.16.1 2.39.6.66.95 1.5.95 2.53 0 3.64-2.16 4.44-4.22 4.67.31.27.59.8.59 1.62v2.4c0 .25.17.54.64.45a9.42 9.42 0 006.27-8.92c0-5.19-4.1-9.4-9.17-9.4z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default SocialSignIn;
