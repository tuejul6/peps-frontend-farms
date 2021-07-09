import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  {
    pid: 3,
    risk: 2,
    lpSymbol: 'PEPR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xE3B4eEDb56260bbF0Da83733fecd23140FF188b9',
    },
    tokenSymbol: 'PEPR',
    tokenAddresses: {
      97: '',
      56: '0x019bE1796178516e060072004F267B59a49A0801',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 6,
    risk: 2,
    lpSymbol: 'PEX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd394bC6CED3Ac2A054DDcf8e963212E1596518D6',
    },
    tokenSymbol: 'PEX',
    tokenAddresses: {
      97: '',
      56: '0x50f15390951386ce3c34122a77444e54973ddb91',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 2,
    lpSymbol: 'WPEPS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8b1943eBC37CC51C0C1b34277a01f1B8d128974f',
    },
    tokenSymbol: 'WPEPS',
    tokenAddresses: {
      97: '',
      56: '0xf0ebeb79792190a1be089c522c82e724a4f8c8f1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
     quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BBFI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x12f169f23b2f35d75f99fc8b505d10348837e239',
    },
    tokenSymbol: 'BBFI',
    tokenAddresses: {
      97: '',
      56: '0x946aaa7a2c6221650c2bf1233ca41dbb4ddf9b78',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
]

export default farms