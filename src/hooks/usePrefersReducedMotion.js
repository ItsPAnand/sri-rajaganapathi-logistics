import { useEffect, useState } from 'react';

/** Match prefers-reduced-motion at runtime. */
export function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handler = () => setReduced(mq.matches);
        handler();
        mq.addEventListener?.('change', handler);
        return () => mq.removeEventListener?.('change', handler);
    }, []);

    return reduced;
}
