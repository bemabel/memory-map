import React, { Component } from 'react';
import CustomizedInputBase from '../SearchGoogleMaps';
import Box from 'mineral-ui/Box';
import Flex from 'mineral-ui/Flex';

class SidebarHeader extends Component {
    render() {
        return (
            <Flex>
                <Box width={3 / 4}>
                    <CustomizedInputBase />
                </Box>
                <Box width={1 / 4}>
                    
                </Box>
            </Flex>
        )
    }
}

export default SidebarHeader