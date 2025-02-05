/*
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Rafael Soley Robles                                                     │
  │ v1.0.0                                                                  │
  │                                                                         │
  │ Limited Source Software, see LICENSE.                                   │
  │ © All rights reserved.                                                  │
  │                                                                         │
  │ The above copyright notice and this permission shall be included in all │
  │ copies or substantial portions of the Software.                         │
  └─────────────────────────────────────────────────────────────────────────┘
 */

import { useState } from "react";

export default function Hero(props) {
  const [loadingImage, setLoadingImage] = useState(true);

  const handle = () => {
    if (loadingImage) {
      setLoadingImage(false);
    }
  };
  return (
    <>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-big text-transparent font-bold bg-gradient-to-br bg-clip-text from-awhite-200 to-agray-400 m-4 tracking-tight">
        The next-gen platform
        <br /> for modern communities.
      </h1>
      <p className="regular">
        Streamline staff, management, and engagement with ease.
        <br />
        Free. Reliable. Secure.
      </p>
      <button className="btn btn-primary my-8 py-2 px-4 rounded border-2 border-blue-800 text-awhite-200 hover:bg-blue-800">
        Get Started
      </button>
      <div className="relative mt-32 mb-32 mx-4 md:mx-16 lg:mx-64 rounded-lg">
        {loadingImage && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
            {/* Example of a loading animation */}
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        )}
        <img
          className={`relative object-cover rounded-lg transition-opacity duration-500 ${
            loadingImage ? "opacity-0" : "opacity-100"
          }`}
          src="https://picsum.photos/1920/1080"
          alt="Hero Image"
          onLoad={handle} // Trigger when the image loads
        />
      </div>
    </>
  );
}
