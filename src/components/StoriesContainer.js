import React, { Component } from 'react';
import Card, { CardTitle, CardBlock } from 'mineral-ui/Card';
// import Card, { CardActions, CardBlock, CardDivider, CardFooter, CardImage, CardTitle } from 'mineral-ui/Card';
import Avatar from 'mineral-ui/Avatar';

function CardAvatar() {
  return (
    <Avatar>
      <img src="/images/avatar.svg" alt="Alt text" />
    </Avatar>
  )
}

class StoriesСontainer extends Component {
  render() {
    const loremIpsum = "Lorem ipsum dolor sit amet, mei causae discere debitis no. Nec prima erant detraxit te. Sea ex labore recusabo efficiantur. Ad solum appetere mnesarchum ius. Id vim erat referrentur. Nusquam efficiendi mel no, eum ad nisl omittam conceptam, putent voluptatibus vis et. Diam melius ius ut.  "
    return (
      <>

        <Card>
          <CardTitle
            avatar={CardAvatar}
            subtitle="User Name">
            Story Title
            </CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
        </Card>
      </>
    );
  }
}
export default StoriesСontainer;