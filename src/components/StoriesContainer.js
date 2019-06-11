import React, { Component } from 'react';
import Card, { CardTitle, CardBlock } from 'mineral-ui/Card';
// import Card, { CardActions, CardBlock, CardDivider, CardFooter, CardImage, CardTitle } from 'mineral-ui/Card';
// import Avatar from 'mineral-ui/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
// import AvImg from "../static/icons/logo.jpg";
// import AccountCircle from '@material-ui/icons/AccountCircle';


function CardAvatar() {
  return (
    // <img src={AccountCircle} 
    // style={{width: "40px", height: "40px", padding: "5px"}}
    //  />
    <IconButton aria-label="Go to Account">
      <SvgIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /><path d="M0 0h24v24H0z" fill="none" /></svg>      </SvgIcon>
    </IconButton>

  )
}

class StoriesСontainer extends Component {
  render() {
    const loremIpsum = "Lorem ipsum dolor sit amet, mei causae discere debitis no. Nec prima erant detraxit te. Sea ex labore recusabo efficiantur. Ad solum appetere mnesarchum ius. Id vim erat referrentur. Nusquam efficiendi mel no, eum ad nisl omittam conceptam, putent voluptatibus vis et. Diam melius ius ut.  "
    return (
      <>
          <Card
          background-color="#f9f9ff">
            <CardTitle
              subtitle="User's Name">
              {/* надо убрать имя пользователя в UserPage */}
              {/* avatar={CardAvatar} */}
              <CardAvatar />
              Story Title
            </CardTitle>
            <CardBlock>{loremIpsum}</CardBlock>
          </Card>
      </>
    );
  }
}
export default StoriesСontainer;