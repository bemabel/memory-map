import React, { Component } from 'react';
import MainMap from '../components/MainMap/MainMap';
import SidebarHeader from '../components/SidebarHeader/SidebarHeader';
import StoriesContainer from '../components/StoriesContainer';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import InfiniteLoader from 'react-infinite-loader';

import Box from 'mineral-ui/Box';
import Flex from 'mineral-ui/Flex';


class Main extends Component {
constructor(props){
    super(props)
    this.state = {
        items: []
    }
}
    componentDidMount() {
      this.loadItems()
    }
    
    loadItems() {
      /* just simulating a load of more items from an api here */
      setTimeout( () => {
        let items = this.state.items.slice()
        items = items.concat(this.getItems())
        this.setState({ items: items })
      }, 1000)
    }
    
    handleVisit () {
      this.loadItems()
    }
    
    getItems() {
      let items = []
      for(var i = 0; i < 2; i++) {
        items.push({ name: 'An item' })
      }
      return items
    }
    
    renderCards() {
      const { items } = this.state
      const cards = items.map((item, i) => {
        return (
          <StoriesContainer />
        )
      })
      return cards
    }


    render() {
        return (
            <Flex height="100%">
                <Box width={3 / 4}
                    margin="0px"
                    position="fixed">
                    <MainMap />
                </Box>
                <Box width={1 / 4}
                    margin="0px"
                    paddingRight="5px"
                    height="100%"
                    style={{
                        overflowY: "scroll"
                    }}
                    >
                    
                    <SidebarHeader  />
                    
                    <Link to="/profile"><Button>Sign Up</Button></Link>
                        <div>
                            { this.renderCards() }
                            <InfiniteLoader onVisited={ () => this.handleVisit() } />
                        </div>
                </Box>
            </Flex>
        )
    }
}

export default Main


