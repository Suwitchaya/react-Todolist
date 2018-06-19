import React,{Component} from 'react';
import Aux from './Aux';
import styled from 'styled-components';

import Toolbar from '../components/Navigation/Toolbar/Toolbar';

const Main = styled.main`
        margin-top: 72px
        `;
class Layout extends Component{
    render(){
        return(
        <Aux>
        <Toolbar />
        <Main>
          {this.props.children}
        </Main>
        </Aux>
            
        );
    }
}

export default Layout;