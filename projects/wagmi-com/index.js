const { uniV3Export } = require("../helper/uniswapV3");

module.exports = uniV3Export({
  era: { factory: '0x31be61CE896e8770B21e7A1CAFA28402Dd701995', fromBlock: 1351075, },
  fantom: { factory: '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', fromBlock: 60063058, },
  kava: { factory: '0x53dca7E0015B8c445881A9BC2baC1D8648d7f800', fromBlock:  6037137, }
})