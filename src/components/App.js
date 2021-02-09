import React, { Fragment } from 'react';
import Heading from './Heading';
import SEO from './SEO';

export default function App() {
  return (
    <Fragment>
      <SEO />
      <Heading text="Hello, World!" />
    </Fragment>
  );
}
