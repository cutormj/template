// pages/index.tsx (or Home.tsx)

import React from 'react';
import Image from 'next/image';
import UserCard from './components/UserCard';
import UserType from '@/app/types/user-type'; // Adjust the path to your user-type

const sampleUser: UserType = {
  id: 1,
  username: 'john_doe',
  fullName: 'John Doe',
  avatarUrl: '/path/to/avatar.jpg', // Replace with the actual URL
  // Add other relevant properties
};

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserCard user={sampleUser} />
    </main>
  );
};

export default Home;
