import React from 'react';

import { PageHeaderStyle } from 'style/components';


type PageHeaderProps = {
  children: JSX.Element,
};

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
}) => {
  return (
    <PageHeaderStyle>
      {children}
    </PageHeaderStyle>
  );
};

export default PageHeader;
