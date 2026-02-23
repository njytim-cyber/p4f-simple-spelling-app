import { useRef, useCallback } from 'react';

/**
 * Reusable hook for horizontal swipe navigation between indexed tabs/pages.
 *
 * @param currentIndex  – current tab index
 * @param maxIndex      – highest valid index (e.g. tabCount - 1)
 * @param onSwipe       – callback invoked with the new index after a valid swipe
 * @param minDistance    – minimum px distance to count as a swipe (default 50)
 */
export function useSwipeNavigation(
    currentIndex: number,
    maxIndex: number,
    onSwipe: (newIndex: number) => void,
    minDistance = 50,
) {
    const touchStart = useRef<number | null>(null);
    const touchEnd = useRef<number | null>(null);

    const onTouchStart = useCallback((e: React.TouchEvent) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientX;
    }, []);

    const onTouchMove = useCallback((e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX;
    }, []);

    const onTouchEnd = useCallback(() => {
        if (touchStart.current === null || touchEnd.current === null) return;
        const distance = touchStart.current - touchEnd.current;

        if (distance > minDistance && currentIndex < maxIndex) {
            onSwipe(currentIndex + 1);
        } else if (distance < -minDistance && currentIndex > 0) {
            onSwipe(currentIndex - 1);
        }
    }, [currentIndex, maxIndex, minDistance, onSwipe]);

    return { onTouchStart, onTouchMove, onTouchEnd };
}
