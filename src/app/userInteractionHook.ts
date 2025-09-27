// hooks/useIntersectionObserver.ts
import { useEffect } from 'react';

export function useIntersectionObserver(setActiveId: (id: string) => void) {
  useEffect(() => {
    // The callback function that runs when a section enters or leaves the viewport
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // If the section is more than 0% in view, set it as active
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    // Observer options: rootMargin adjusts the "bounding box"
    // This makes the observer trigger when the section is 40% from the bottom of the screen
    const options: IntersectionObserverInit = {
      rootMargin: "0px 0px -40% 0px",
    };

    // Create the observer
    const observer = new IntersectionObserver(callback, options);

    // Find all the section elements to observe
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    // Cleanup function: stop observing when the component unmounts
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [setActiveId]); // Rerun the effect if setActiveId changes
}