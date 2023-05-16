import OrganizeImg from '../../assets/Organize.png'
import NftImg from '../../assets/Nft.png'
// import BikerImg from '../../assets/Biker.png'
import TeaImg from '../../assets/Tea.png'
import HomelyImg from '../../assets/Homely.png'

const data = [
  {
    id: 1,
    number: '01',
    image: OrganizeImg,
    title: 'The Fun Class',
    price: '$10 per session',
    mainText: `
  A 30 minutes speaking session for $10 per session`,
    // link: `https://calendly.com/speaktolearntoday/the-fun-class`,
    link: `https://paystack.com/pay/thefunclass`,
  },
  {
    id: 2,
    number: '02',
    image: TeaImg,
    title: 'The Deep Dive',
    price: ' $20 per session',
    mainText: `
     A 1 hour speaking session for $20 per session.`,
    // link: `https://calendly.com/speaktolearntoday/the-deep-dive`,
    link: `https://paystack.com/pay/thedeepdive`,
  },
  {
    id: 3,
    number: '03',
    image: NftImg,
    title: 'Speak Some More',
    price: '$30 per session',
    mainText: `
    A 1 hour 30 minutes session for $30 per session.`,
    // link: `https://calendly.com/speaktolearntoday/speak-some-more`,
    link: `https://paystack.com/pay/speaksomemore`,
  },
  {
    id: 4,
    number: '04',
    image: HomelyImg,
    title: 'Finale',
    price: '$50 per session',
    mainText: ` A 2 hours speaking class with a curriculum as a guide for $50 per class.`,
    // link: `https://calendly.com/speaktolearntoday/finale`,
    link: `https://paystack.com/pay/finale`,
  },
]

export default data
