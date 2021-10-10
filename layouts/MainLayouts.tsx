import classnames from 'classnames';
import React, { FC } from 'react';
import LeftMenu from '../components/LeftMenu';
import SideComments from '../components/SideComments';

interface MainLayoutProps {
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, contentFullWidth, hideComments, hideMenu, className }) => {
  return (
    <div className={classnames('wrapper', className)}>
      {!hideMenu && (
        <div className="leftSide">
          <LeftMenu />
        </div>
      )}
      <div className={classnames('content', { 'content-full': contentFullWidth })}>{children}</div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
