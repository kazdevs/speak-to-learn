import { easeInOut } from 'framer-motion'

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.75,
      staggerChildren: 0.2,
      duration: 2,
    },
  },
}

export const itemm = {
  hidden: { x: '-100%' },
  show: { x: '0%', transition: { duration: 0.5, ease: easeInOut } },
}
