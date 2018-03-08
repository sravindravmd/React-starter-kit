import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './Components/App';
import HomePage from './Components/home/HomePage';
import AboutPage from './Components/about/AboutPage';
import CoursesPage from './Components/course/CoursesPage';
import ReactForm from './Components/forms/ReactForms';

export default (
  <Route path="/" component={App}>
   <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="forms" component={ReactForm}/>

  </Route>
);