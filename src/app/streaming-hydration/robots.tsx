'use client';
import Image from 'next/image';

import { getUsers } from '@/utils/client';
import { useQuery } from '@tanstack/react-query';

const IMAGE_SIZE = 180;

export default function Robots() {
  const { data } = useQuery({
    queryKey: ['get-users'],
    queryFn: getUsers,
  });

  return (
    <div className="grid grid-cols-4 gap-5">
      {data?.map((user) => (
        <div
          className="relative w-[180px] h-[180px] border border-solid border-[#CCC]"
          key={user.id}
        >
          <Image
            fill
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            style={{ width: '100%', height: '100%' }}
          />
          <h3>
            {user.first_name} {user.last_name}
          </h3>
        </div>
      ))}
    </div>
  );
}
