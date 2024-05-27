import { cn } from '@/utils/tailwind';

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  type?: 'padding' | 'margin';
}

export function Container({
  children,
  className,
  type = 'margin',
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full ',
        type === 'margin' && 'xl:max-w-[85%] max-xl:px-2 mx-auto',
        type === 'padding' && 'xl:px-[calc(100vw_-_85%)] px-8',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
