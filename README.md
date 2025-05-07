# @bebeal/ripple-effect

Ripple flash effect for clickables

## Setup

```bash
npm install @bebeal/ripple-effect
```

## Usage

```tsx
import { useRippleEffect } from '@bebeal/ripple-effect';

const Button = () => {
  const { createRippleEffect } = useRippleEffect();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    createRippleEffect(e);
  };

  return <button onClick={onClick}>Click me</button>;
};
```

## License

MIT
