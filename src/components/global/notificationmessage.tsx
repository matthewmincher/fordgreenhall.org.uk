import * as React from 'react';
import { FC } from 'react';
import * as Style from './notificationmessage.module.scss';

type NotificationMessageProps = {
  theme: 'light' | 'dark';
  message: string;
  classList?: string[];
};

const NotificationMessage: FC<NotificationMessageProps> = ({
  message,
  classList,
  theme,
}) => {
  return (
    <div className={`constrainedContent ${Style.notification} ${Style[theme]}`}>
      <div className={classList?.join(' ')}>{message}</div>
    </div>
  );
};

export default NotificationMessage;
