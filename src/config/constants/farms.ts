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
  
  
  
]

export default farms
