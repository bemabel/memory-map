import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const CircularAvatar = () => (
  <Image
    as={Link}
    src={require('../../static/images/dasha_profile.jpg')}
    to='/profile'
    size='medium' circular

  />
)

export default CircularAvatar