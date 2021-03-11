module.exports = {
  configureWebpack: {
    // Using source-map allows VS Code to correctly debug inside vue files
    devtool: 'source-map',
    // Breakpoints in VS and VSCode won’t work since the source maps
    // consider ClientApp the project root, rather than its parent folder
    output: {
      devtoolModuleFilenameTemplate: info => {
        const resourcePath = info.resourcePath.replace('./src/', './ClientApp/src/')
        return `webpack:///${resourcePath}?${info.loaders}`
      }
    }
  }
}
