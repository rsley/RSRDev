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

import type { Route } from "./+types/home";
import Sidebar from "../components/Sidebar/Sidebar";
import Hero from "../components/HomeHero";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RSR Development" },
    {
      name: "description",
      content:
        "Streamline staff, management, and engagement with ease. Free. Reliable. Secure.",
    },
  ];
}

export default function Home() {
  // <div class="flex items-center justify-center text-center overflow-auto">
  //   <div>
  //     <h1 class="text-big text-transparent font-title font-bold bg-gradient-to-br bg-clip-text from-awhite-50 to-awhite-950 m-4 leading-tighter">
  //       Your next-gen platform
  //       <br /> for modern communities.
  //     </h1>
  //     <p class="text-awhite-800">
  //       Streamline staff, management, and engagement with ease.
  //       <br />
  //       Free. Reliable. Secure.
  //     </p>
  //   </div>
  // </div>;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden mt-4 pl-16">
        <Footer />
      </div>
    </div>
  );
}
