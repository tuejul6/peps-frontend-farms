import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "/",
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "https://swap.peps.today/x/#/swap",
      },
      {
        label: "Liquidity",
        href: "https://swap.peps.today/x/#/pool",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
   {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://peps.today/',
      },
      {
        label: 'Github',
        href: 'https://github.com/PEPS-Project',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x019be1796178516e060072004f267b59a49a0801',
      },

    ],
  },
]

export default config
