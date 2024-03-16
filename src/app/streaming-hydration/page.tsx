import { Metadata } from 'next';

import Counter from './counter';
import Robots from './robots';

export const metadata: Metadata = {
  title: 'streaming hydration',
};

export default function Page() {
  return (
    <main className="p-5">
      <Counter />
      <Robots />
    </main>
  );
}
