'use client';

import { getTodos } from '@/utils/client';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data } = useQuery({
    queryKey: ['get-todos'],
    queryFn: getTodos,
  });

  return (
    <ul className="grid grid-cols-4 gap-10 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white divide-y divide-solid divide-x">
      {data?.map((todo) => (
        <li key={todo.id} className="w-full px-4 py-2 rounded-b-lg">
          <p className="text-sm">{todo.title}</p>
        </li>
      ))}
    </ul>
  );
}
