const MyComponent = styled('div', ({ isActive, hasBorder }) => ({
  color: 'red',
  borderColor: 'yellow'
}));

const MyNormalComponent = styled('div', props => ({
  color: 'blue',
  padding: '15px'
}));

const MyObjectComponent = styled('div', {
  color: 'palevioletred',
  padding: '22px'
});
