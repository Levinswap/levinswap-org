const menu = [
  {
    name: 'Products',
    sublinks: [
      {
        name: 'App',
        link: 'https://app.levinswap.org/#/',
        description: 'Swap tokens and provide liquidity'
      },
      {
        name: 'Analytics',
        link: 'https://app.levinswap.org/',
        description: 'Levinswap analytics and historical data'
      },
      {
        name: 'Token Lists',
        link: 'https://tokenlists.levinswap.org/',
        description: 'Levinswap token list standard.'
      }
    ]
  },
  {
    name: 'Developers',
    sublinks: [
      {
        name: 'Documentation',
        target='_blank',
        href='https://wiki.levinswap.org/products/exchange/for-developers'
      },
      { name: 'GitHub', link: 'https://github.com/Levinswap' },
      { name: 'Whitepaper', link: '/whitepaper.pdf' }
    ]
  },
  /*{
    name: 'Governance',
    sublinks: [
      {
        name: 'UNI Token',
        link: '/blog/uni'
      },
      { name: 'Forum', link: 'https://gov.uniswap.org/' },
      { name: 'Voting Portal', link: 'https://app.uniswap.org/#/vote' },
      { name: 'Documentation', link: '/docs/v2/governance/overview' }
    ]
  },*/
  {
    name: 'Community',
    sublinks: [
      { name: 'Discord', link: 'https://discord.gg/vYHCcJQFPW' },
      { name: 'Twitter', link: 'https://twitter.com/Levinswap' },
      { name: 'Telegram', link: 'https://t.me/levinswap' }
    ]
  },
  {
    name: 'About',
    sublinks: [
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Info',
        link: '/about'
      },
      {
        name: 'FAQ',
        link: '/faq'
      },
      {
        name: 'Logo & Brand',
        link: '/about#brand'
      }
    ]
  }
]

module.exports = menu
