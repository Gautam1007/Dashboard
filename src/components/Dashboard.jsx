import React, { useState } from "react";
import InviteModal from "./InviteModel";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div>
          <button
            onClick={openModal}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Invite
          </button>
          <button className="bg-green-500 ml-5 text-white px-4 py-2 rounded">
            Help
          </button>
        </div>
      </header>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {/* Stats Section */}
        <div className="col-span-2">
          <div className="p-4 bg-white shadow rounded-md">
            <h2 className="text-md font-semibold">New Signups</h2>
            {/* Chart Placeholder */}
            <div className="h-48 bg-gray-200 my-4"></div>
          </div>
        </div>

        {/* Sidebar*/}
        <div className="space-y-4">
          <div className="p-4 bg-white shadow rounded-md">
            <h3 className="text-md font-semibold">New users</h3>
            <div className="mt-2 flex items-center">
              <div className="bg-gray-200 w-10 h-10 rounded-full"></div>
              <div className="ml-4">
                <p>hubx</p>
                <p className="text-gray-500 text-sm">24 minutes</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white shadow rounded-md">
            <h3 className="text-md font-semibold">Trial period</h3>
            <p className="mt-2 text-xl font-semibold">30 days left</p>
            <button className="mt-2 bg-pink-500 text-white w-full py-2 rounded">
              Upgrade now!
            </button>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="p-4 bg-white shadow rounded-md">
        <h3 className="text-md font-semibold">How to sell courses blog</h3>
        <ul className="mt-4 space-y-2 text-blue-600">
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, ea!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, esse soluta.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eum accusantium iure id.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-6">
        © 2024 Dashboard, Inc.
      </footer>
      {/* Invite Modal */}
      <InviteModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Dashboard;
