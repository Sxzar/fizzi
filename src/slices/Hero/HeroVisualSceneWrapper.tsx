'use client';

import dynamic from 'next/dynamic';

const HeroVisualScene = dynamic(() => import('./HeroVisualScene'), {
    ssr: false
});

export default function HeroVisualSceneWrapper() {
    return <HeroVisualScene />;
}
