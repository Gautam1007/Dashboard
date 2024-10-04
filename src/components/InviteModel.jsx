import React, { useState } from 'react';
import Modal from 'react-modal';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

Modal.setAppElement('#root');

const InviteModal = ({ isOpen, onClose }) => {
  const [numInvites, setNumInvites] = useState(0);
  const [eventDuration, setEventDuration] = useState(0);
  const [price, setPrice] = useState(0);

  const handleCalculate = () => {
    const calculatedPrice = numInvites * 50 + eventDuration * 20;
    setPrice(calculatedPrice);
  };

  const data = {
    labels: ['Invites cost', 'Duration cost'],
    datasets: [
      {
        data: [numInvites * 50, eventDuration*50],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-md mx-auto mt-12 overflow-y-auto max-h-[90vh]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-lg font-bold mb-4">Invite to Event</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Number of Invites</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={numInvites}
            onChange={(e) => setNumInvites(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block mb-2">Event Duration (hours)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={eventDuration}
            onChange={(e) => setEventDuration(Number(e.target.value))}
          />
        </div>

        <div>
          <p className="text-md font-bold">Total Price: ${price}</p>
        </div>

        <button
          className="w-full bg-green-500 text-white py-2 rounded mt-4"
          onClick={handleCalculate}
        >
          Calculate Price
        </button>

        <div className="mt-6">
          <Pie data={data} />
        </div>
      </div>

      <button
        className="mt-6 w-full bg-red-500 text-white py-2 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </Modal>
  );
};

export default InviteModal;
