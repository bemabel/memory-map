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
    const loremIpsum = "Hello"
    return (
      <>
    
        <Card>
          <CardTitle
            avatar={CardAvatar}
            subtitle="Card Subtitle">
            Card Title
            </CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
        </Card>
      </>
    );
  }
}
export default StoriesСontainer;