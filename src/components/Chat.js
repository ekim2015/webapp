import * as React from 'react';
import ReactDOM from 'react-dom';
import '../styles/HomeStyles.css';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText  } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

function Chat() {
    return (
        <div className="list-component">
            <Box sx={{bgcolor: 'grey'}}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ChatIcon color="black" />
                            </ListItemIcon>
                            <ListItemText primary="CS 201" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon />
                            <ListItemText primary="CS 202" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon />
                            <ListItemText primary="CS 202" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </div>
    );
}

export default Chat;