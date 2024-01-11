// Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200 p-4">
        {/* Sidebar content goes here */}
        Sidebar
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
}

export default Layout;
