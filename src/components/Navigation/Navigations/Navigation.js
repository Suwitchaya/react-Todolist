import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'
import  './Navigation.css'

const navigation = (props)=>(
  <ul className="Navigation">
      <NavigationItem link="/" exact>All</NavigationItem>
      <NavigationItem link="/completed" >Completed</NavigationItem>
      <NavigationItem link="/incompleted" >Incompleted</NavigationItem>
  </ul>
)
export default navigation;
