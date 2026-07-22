import { useEffect, useState } from 'react';

/**
 * Track scroll direction + distance so the nav can hide on scroll-down / reveal on scroll-up.
 */
export function useScrollDirection(threshold = 8) {
    const [state, setState] = useState({
        direction: 'up',
        scrolled: false,
        y: 0,
    });

    useEffect(() => {
        let lastY = window.scrollY;
        let ticking = false;

        const update = () => {
            const y = window.scrollY;
            const diff = y - lastY;
            if (Math.abs(diff) < threshold) {
                ticking = false;
                return;
            }
            setState({
                direction: diff > 0 ? 'down' : 'up',
                scrolled: y > 24,
                y,
            });
            lastY = y > 0 ? y : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return state;
}
