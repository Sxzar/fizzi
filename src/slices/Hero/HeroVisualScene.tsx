'use client';

import { Bubbles } from './Bubbles';
import Scene from './Scene';
import { View } from '@react-three/drei';

export default function HeroVisualScene() {
    return (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
            <Scene />
            <Bubbles count={300} speed={1} repeat={true} />
        </View>
    );
}
