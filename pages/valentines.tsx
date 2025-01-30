'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Letter from '../components/letter';
import Image from 'next/image';
import env from '../assets/env.png';

const valentines = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    setShowImage(false);
  };

  const handleUnlock = () => {
    if (code === '8734') {
      setIsUnlocked(true);
    } else {
      alert('Incorrect Code!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!isUnlocked && (
        <>
          {showImage && (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              onClick={handleOpen}
              style={{ display: showImage ? 'block' : 'none' }}
            >
              <div>
                <Image
                  src={env}
                  alt="Envelope Image"
                  width={500}
                  height={500}
                  className="cursor-pointer"
                />
              </div>
            </motion.div>
          )}

          {isOpen && (
            <div className="flex flex-col items-center ">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                onClick={handleUnlock}
              >
                Enter My Love
              </button>
              <p className='mt-5'>Hint! Check my roblox friends</p>
            </div>
          )}
        </>
      )}

      {isUnlocked && <Letter />}
    </div>
  );
};

export default valentines;
