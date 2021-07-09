import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

 
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
     quoteTokenAdresses: contracts.busd,
  },
  
  
  
]

export default farms
