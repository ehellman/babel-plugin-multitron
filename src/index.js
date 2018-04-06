require('better-log/install')

module.exports = function({ types: t }) {
  return {
    name: 'multitron',
    visitor: {
      CallExpression: path => {
        if (
          path.node.callee.name === 'styled' &&
          path.node.arguments.length === 2 &&
          t.isArrowFunctionExpression(path.node.arguments[1])
        ) {
          if (t.isObjectPattern(path.node.arguments[1].params[0])) {
            const props = []
            path.node.arguments[1].params[0].properties.map(
              property => props.push(property.value.name),
            )
			path.node.arguments.push(t.valueToNode(props))
          }
        }
      },
    },
  }
}
