import React from 'react'

import Content from './Content'

import HeaderClient from './HeaderClient';
import FooterClient from './FooterClient';

class PageLayout extends React.Component {
    
    render() {
        const { children } = this.props;
        return(
        <div className="cr-app bg-light">
            <Content fluid>
                <HeaderClient title="ShopTore" />
                    {children}  
                <FooterClient />    
            </Content>          
        </div>
      )
      
  }
}

export default PageLayout
