const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const withSass = require('@zeit/next-sass')

  
module.exports = withSass(withMDX({
  cssModules: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx']
}))
