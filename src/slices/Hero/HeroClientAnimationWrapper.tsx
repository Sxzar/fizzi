'use client';

import dynamic from 'next/dynamic';

const HeroClientAnimation = dynamic(() => import('./HeroClientAnimation'), {
    ssr: false
});

export default function HeroClientAnimationWrapper() {
    return <HeroClientAnimation />;
}
