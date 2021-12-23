const path = require('path')
const md = require('markdown-it')() // 引入markdown-it
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: (config) => {
    // console.log(config.module.rules)
    config.resolve.alias.set('@', path.resolve('examples'))
    config.resolve.alias.set('~', path.resolve('packages'))
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        use: [
          [
            require('markdown-it-container'),
            'demo',
            {
              validate: function (params) {
                return params.trim().match(/^demo\s*(.*)$/)
              },

              render: function (tokens, idx) {
                const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                if (tokens[idx].nesting === 1) {
                  //
                  const description = m && m.length > 1 ? m[1] : '' // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
                  const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''

                  return `<demo-block>
                <div slot="source">${content}</div>
                ${description ? `<div>${md.render(description)}</div>` : ''}
                `
                }
                return '</demo-block>'
              }
            }
          ],
          [require('markdown-it-container'), 'tip'],
          [require('markdown-it-container'), 'warning']
        ]
      })
  }
}
