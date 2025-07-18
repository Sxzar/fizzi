import { FizziLogo } from '@/components/FizziLogo';
import React from 'react';

type Props = object;

export default function Header({}: Props) {
    return (
        <header className="-mb-28 flex justify-center py-4">
            <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
        </header>
    );
}
