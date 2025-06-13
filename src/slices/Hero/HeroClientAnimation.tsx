'use client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useStore } from '@/hooks/useStore';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroClientAnimation() {
    const ready = useStore((state) => state.ready);
    const isDesktop = useMediaQuery('(min-width: 768px', true);

    useGSAP(
        () => {
            if (!ready && isDesktop) return;

            const introTl = gsap.timeline();

            introTl
                .set('.hero', { opacity: 1 })
                .from('.hero-header-word', {
                    scale: 3,
                    opacity: 0,
                    ease: 'power4.in',
                    delay: 0.3,
                    stagger: 1
                })
                .from(
                    '.hero-subheading',
                    {
                        opacity: 0,
                        y: 30
                    },
                    '+=.8'
                )
                .from('.hero-body', {
                    opacity: 0,
                    y: 10
                })
                .from('.hero-button', {
                    opacity: 0,
                    y: 10,
                    duration: 0.6
                });

            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.5
                }
            });

            scrollTl
                .fromTo(
                    'body',
                    {
                        backgroundColor: '#FDE047'
                    },
                    {
                        backgroundColor: '#D9F99D',
                        overwrite: 'auto'
                    },
                    1
                )
                .from('.text-side-heading .split-char', {
                    scale: 1.3,
                    y: 40,
                    rotate: -25,
                    opacity: 0,
                    stagger: 0.1,
                    ease: 'back.out(3)',
                    duration: 0.5
                })
                .from('.text-side-body', {
                    y: 20,
                    opacity: 0
                });
        },
        { dependencies: [ready, isDesktop] }
    );

    return null;
}
