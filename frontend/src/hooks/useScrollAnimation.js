import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Hook personnalisé pour animer les éléments au scroll
 * Utilisation : const { ref, inView } = useScrollAnimation();
 */
export const useScrollAnimation = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options
  });

  return { ref, inView };
};

/**
 * Hook pour ajouter une classe d'animation quand l'élément est visible
 */
export const useAnimateOnScroll = (animationClass = 'animate-fade-in-up', options = {}) => {
  const { ref, inView } = useScrollAnimation(options);

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.add(animationClass);
    }
  }, [inView, animationClass, ref]);

  return { ref, inView };
};
