import 'better-log/install';

module.exports = function ({ types: t }) {
	return {
		name: 'multitron', // not required
		visitor: {
		  CallExpression: (path) => {
			if (
			  path.node.callee.name === 'styled' &&
			  path.node.arguments.length === 2 &&
			  t.isArrowFunctionExpression(path.node.arguments[1])
			) {
			  if (t.isObjectPattern(path.node.arguments[1].params[0])) {
				const props = []
				path.node.arguments[1].params[0].properties.map(property => props.push(property.value.name))
				path.node.arguments.push(JSON.stringify(props))
			  }
			}

		  }
		}
	};
};

// "test": "node test",
//     "watch": "node test --watch",
//     "prepublish": "npm test && npm run release"
