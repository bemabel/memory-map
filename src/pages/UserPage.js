import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import StoriesContainer from '../components/StoriesContainer';
import CircularAvatar from '../components/Avatar/CircularAvatar';
import AddStory from '../components/AddStory/AddStory';
import 
  ContainerColor
 from "../components/Layout/ContainerColor";
 


const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

// const fixedOverlayStyle = {
//   ...overlayStyle,
//   position: 'fixed',
//   top: '80px',
//   zIndex: 10,
// }

// const overlayMenuStyle = {
//   position: 'relative',
//   left: 0,
//   transition: 'left 0.5s ease',
// }

// const fixedOverlayMenuStyle = {
//   ...overlayMenuStyle,
//   left: '800px',
// }

// const LeftImage = () => (
//   <Image
//     floated='left'
//     size='medium'
//     src='/images/wireframe/square-image.png'
//     style={{ margin: '2em 2em 2em -4em' }}
//   />
// )



// const Paragraph = () => (
//   <p>
//     {[
//       'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
//       'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
//       'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
//     ].join('')}
//   </p>
// )

export default class StickyLayout extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>{`
          html, body {
            background: #fff;
          }
        `}
        </style>
        
        <Container text style={{ marginTop: '2em' }}>
        <ContainerColor>
          <Grid >
            <Grid.Row style={{margin: '40px'}}>
              <Grid.Column floated='left' width={6} >
                <Header as='h1' >Dora Explorer</Header>
                <p padding="10px">
                  a hopeless learner
          </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <CircularAvatar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </ContainerColor>
        </Container>
        

        {/* <Grid>
          <Container text style={{ marginTop: '2em' }}>
            <Grid.Row floated='left' width={6}>
              <Header as='h1'>Dasha Ponamaryova</Header>
              <p>
                a hopeless learner.
          </p>
            </Grid.Row>
            <Grid.Row floated='right' width={6}>
              <CircularAvatar />

            </Grid.Row>
          </Container>
        </Grid> */}


        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src={require('../static/images/dasha_profile.jpg')} />
              </Menu.Item>
              <Link to="/memorymap"><Menu.Item header>MEMORYMAP</Menu.Item></Link>
              <Menu.Item as='a'>Profile</Menu.Item>
              <Menu.Item as='a'>Likes</Menu.Item>
            </Container>
          </Menu>
        </Visibility>


        <Container text>
<AddStory />
          <StoriesContainer />

          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />

          {/* <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
            <Menu
              icon='labeled'
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
              <Menu.Item>
                <Icon name='twitter' />
                Twitter
              </Menu.Item>

              <Menu.Item>
                <Icon name='facebook' />
                Share
              </Menu.Item>

              <Menu.Item>
                <Icon name='mail' />
                Email
              </Menu.Item>
            </Menu>
          </div> */}

          <StoriesContainer />

        </Container>

        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em', background: '#300D4F', }} vertical>
          <Container textAlign='center'>
           
            <Divider />
            <Image src={require('../static/images/dasha_avatar.png')} centered size='mini' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}