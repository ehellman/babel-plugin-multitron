# babel-plugin-multitron

Converts
```
const MyComponent = styled('div', ({ isActive, hasBorder }) => ({
  color: 'red',
  borderColor: 'yellow'
}));
```

To:
```
const MyComponent = styled('div', ({ isActive, hasBorder }) => ({
  color: 'red',
  borderColor: 'yellow'
}), ['isActive', 'hasBorder']);
```

This means that you can write Styletron components for React and then use them with Vue as well. Win!
