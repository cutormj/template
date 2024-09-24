// components/UserCard.tsx

import React from 'react';
import UserType from '@/app/types/user-type'

interface UserCardProps {
  user: UserType;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <span>{user.avatarUrl}</span>
      <h3>{user.fullName}</h3>
      <p>@{user.username}</p>
      {/* Add more user details here */}
    </div>
  );
};

export default UserCard;
