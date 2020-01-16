import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Applications from '../pages/Applications';
import Enrollments from '../pages/Enrollments';
import Plans from '../pages/Plans';
import Students from '../pages/Students';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/applications" component={Applications} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/students" component={Students} isPrivate />
    </Switch>
  );
}
