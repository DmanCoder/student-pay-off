import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

export const bannerAnimation = ({
  header,
  banner,
  bannerBgAddition,
  contentP,
  contentButton,
  playVideo,
  playVideoCover,
  handImg,
  featureBanner,
  featureBannerGreen,
  h1LineArr,
}) => {
  tl.from([bannerBgAddition, banner], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: 'power3.inOut',
    stagger: { amount: 0.2 },
  })
    .from(
      header,
      {
        duration: 0.8,
        opacity: 0,
        y: 16,
        ease: 'power3.inOut',
      },
      '-=.4'
    )
    .from(
      h1LineArr.current,
      {
        duration: 0.8,
        y: 80,
        ease: 'power3.inOut',
        stagger: { amount: 0.2 },
      },
      '-=.7'
    )
    .from(
      [contentP, contentButton],
      {
        y: -40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.inOut',
        stagger: { amount: 0.2 },
      },
      '-=.6'
    )
    .to([playVideo, playVideoCover], { duration: 0, opacity: 1 }, '-=.6')
    .to(playVideoCover, { height: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
    .from(
      handImg,
      { duration: 0.8, opacity: 0, ease: 'power3.out', x: -100, skewX: 2 },
      '-=.85'
    )
    .from(
      [featureBanner, featureBannerGreen],
      {
        duration: 0.8,
        opacity: 0,
        ease: 'power3.out',
        x: -60,
        skewX: 6,
        stagger: { amount: 0.2 },
      },
      '-=.8'
    );
};
