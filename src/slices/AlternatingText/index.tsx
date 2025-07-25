'use client';

import { Content, asText } from '@prismicio/client';
import {
    PrismicRichText,
    PrismicText,
    SliceComponentProps
} from '@prismicio/react';

import { Bounded } from '@/components/Bounded';
import { FC } from 'react';
import Scene from './Scene';
import { View } from '@react-three/drei';
import clsx from 'clsx';

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
    SliceComponentProps<Content.AlternatingTextSlice>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText: FC<AlternatingTextProps> = ({ slice }) => {
    return (
        <Bounded
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="alternating-text-container relative bg-yellow-300 text-sky-950"
        >
            <div>
                <div className="relative z-[100] grid">
                    {/* View Goes Here */}
                    <View className="alternating-text-view absolute top-0 left-0 h-screen w-full">
                        <Scene />
                    </View>

                    {slice.primary.text_group.map((item, index) => (
                        <div
                            key={asText(item.heading)}
                            className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
                        >
                            <div
                                className={clsx(
                                    index % 2 === 0
                                        ? 'col-start-1'
                                        : 'md:col-start-2',
                                    'rounded-lg p-8 backdrop-blur-sm max-md:bg-white/20'
                                )}
                            >
                                <h2 className="text-6xl font-bold text-balance">
                                    <PrismicText field={item.heading} />
                                </h2>
                                <div className="mt-4 text-xl">
                                    <PrismicRichText field={item.body} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Bounded>
    );
};

export default AlternatingText;
