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
import HomeHero from "../components/HomeHero";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RSR Development" },
    {
      name: "description",
      content:
        "RSR Development is the next-gen platform for your modern communities.",
    },
  ];
}

export default function Layout() {
  return (
    <div className="flex h-screen custom-scrollbar overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="relative flex items-start justify-center text-center flex-grow mt-32">
          <div className="mb-32">
            <HomeHero />
            <div>
              <h1 className="text-2xl text-agray-300 font-bold leading-10 mb-4">
                Our Services
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-transparent font-bold bg-gradient-to-br bg-clip-text from-awhite-200 to-agray-400 tracking-tight mb-8">
                Tailored for Success
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-16 lg:mx-64 rounded-lg text-left">
                {/* Service 1 - Large */}
                <div className="col-span-1 lg:col-span-2 bg-gradient-to-br from-agray-800 to-agray-700 p-6 rounded-lg shadow-lg hover:scale-105 transform transition flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold text-awhite-100">
                    Service 1
                  </h3>
                  <p className="mt-2 text-agray-400">
                    Brief description of service 1. Designed to achieve
                    excellence in every step.
                  </p>
                </div>

                {/* Service 2 - Regular */}
                <div className="bg-gradient-to-br from-agray-800 to-agray-700 p-6 rounded-lg shadow-lg hover:scale-105 transform transition flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-awhite-100">
                    Service 2
                  </h3>
                  <p className="mt-2 text-agray-400">
                    Brief description of service 2. Your goals, our priority.
                  </p>
                </div>

                {/* Service 3 - Tall */}
                <div className="bg-gradient-to-br from-agray-800 to-agray-700 p-6 rounded-lg shadow-lg hover:scale-105 transform transition row-span-2 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-awhite-100">
                    Service 3
                  </h3>
                  <p className="mt-2 text-agray-400">
                    Brief description of service 3. Elevating ideas to the next
                    level.
                  </p>
                </div>

                {/* Service 4 - Regular */}
                <div className="bg-gradient-to-br from-agray-800 to-agray-700 p-6 rounded-lg shadow-lg hover:scale-105 transform transition flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-awhite-100">
                    Service 4
                  </h3>
                  <p className="mt-2 text-agray-400">
                    Brief description of service 4. Driven by innovation.
                  </p>
                </div>

                {/* Service 5 - Regular */}
                <div className="bg-gradient-to-br from-agray-800 to-agray-700 p-6 rounded-lg shadow-lg hover:scale-105 transform transition flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-awhite-100">
                    Service 5
                  </h3>
                  <p className="mt-2 text-agray-400">
                    Brief description of service 5. Solutions tailored to your
                    vision.
                  </p>
                </div>

                {/* Service 6 - Wide */}
                <div className="col-span-1 sm:col-span-2 bg-gradient-to-br from-agray-800 to-agray-700 p-6 rounded-lg shadow-lg hover:scale-105 transform transition flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-awhite-100">
                    Service 6
                  </h3>
                  <p className="mt-2 text-agray-400">
                    Brief description of service 6. Focused on delivering
                    unmatched results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
