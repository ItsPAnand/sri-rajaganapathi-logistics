import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * Counter that animates on first entry into the viewport.
 */
export function useCountUp(target = 0, duration = 2, decimals = 0) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return undefined;
        const controls = animate(0, target, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate(v) {
                setValue(decimals ? Number(v.toFixed(decimals)) : Math.round(v));
            },
        });
        return () => controls.stop();
    }, [inView, target, duration, decimals]);

    return { ref, value };
}
