import React from 'react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center text-black dark:text-white text-2xl font-semibold gap-4">
      <img
        src="/images/logo/logo.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
      />
      Chef's Kitchen.
    </a>
  );
};

export default Logo;
