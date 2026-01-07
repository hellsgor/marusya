const SWIPER_FREE_MODE_NORMALIZE = {
  enabled: true,
  momentum: true,
  momentumRatio: 1.2,
  momentumVelocityRatio: 1.1,
  sticky: false,
  momentumBounce: true,
  momentumBounceRatio: 1,
  minimumVelocity: 0.02,
};

export const SWIPER_NORMALIZE = {
  grabCursor: true,
  touchStartPreventDefault: false,
  touchMoveStopPropagation: true,
  touchReleaseOnEdges: true,
  threshold: 0,
  touchAngle: 45,
  resistanceRatio: 0.85,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.3,
  longSwipesMs: 150,
  followFinger: true,
  touchRatio: 1,
  passiveListeners: false,
  updateOnWindowResize: true,
  freeMode: SWIPER_FREE_MODE_NORMALIZE,
} as const;
