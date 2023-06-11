import { cva } from 'class-variance-authority';
import { withVariants } from '.';

export const Button = withVariants(
  'button',
  cva('button', {
    variants: {
      intent: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-500 text-white',
      },
    },
  })
);

export const Test = () => {
  return (
    <div>
      <Button>Test</Button>
    </div>
  );
};
