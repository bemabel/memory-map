import React, { Component } from 'react';
import MainMap from '../components/MainMap/MainMap';
import SidebarHeader from '../components/SidebarHeader/SidebarHeader';
import StoriesContainer from '../components/StoriesContainer';

import Box from 'mineral-ui/Box';
import Flex from 'mineral-ui/Flex';


class Main extends Component {
    render() {
        return (
            <Flex>
                <Box width={3 / 4}
                    margin="0px">
                    <MainMap />
                </Box>
                <Box width={1 / 4}
                    margin="0px"
                    paddingRight="5px">
                    <SidebarHeader />
                    <StoriesContainer />

                </Box>
            </Flex>
        )
    }
}

export default Main