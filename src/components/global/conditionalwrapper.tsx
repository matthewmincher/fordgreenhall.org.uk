import { FC, PropsWithChildren, ReactElement, ReactNode } from 'react';

type Props = PropsWithChildren<{
  condition: boolean;
  wrapper: (children: ReactNode | undefined) => ReactElement;
}>;

const ConditionalWrapper: FC<Props> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default ConditionalWrapper;
