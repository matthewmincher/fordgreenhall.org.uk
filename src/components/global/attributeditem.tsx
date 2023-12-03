import * as React from 'react';
import * as Styles from './attributeditem.module.scss';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  attribution: string;
  className?: string;
  display?: string;
}>;

const AttributedItem: FC<Props> = ({
  className,
  attribution,
  children,
  display = 'inline-block',
}) => {
  return (
    <div
      className={`${className} ${Styles.itemContainer}`}
      style={{ display: display }}
    >
      {children}

      <span className={Styles.attribution}>{attribution}</span>
    </div>
  );
};

export default AttributedItem;
