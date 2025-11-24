'use client';

import { First100FoundersModal } from '@/components/First100FoundersModal';
import { useRouter, usePathname } from 'next/navigation';

export default function First100FoundersModalWrapper() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <First100FoundersModal 
      targetUrl="https://www.ventureos.com/first100founders"
      getCurrentPath={() => pathname}
      excludedPaths={['/first100founders', '/admin', '/api']}
    />
  );
}