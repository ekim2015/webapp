import * as React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/RecommendedStyles.css';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemAvatar, ListItemText, Avatar, Typography, TextField, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Person from '@mui/icons-material/Person';

function Recommended() {
    return (
        <div>    
            <div className="userList">
                <Box sx={{width: "25%", height: "100%", border: "1px solid gray"}}>
                    <List>
                        <ListItem>
                            <ListItemText className="primary:userListText" primary={<Typography style={{fontSize: 30}}>User List</Typography>} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon sx={{color:"black"}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Bob Jones" secondary="Last seen 13 hours ago" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon sx={{color:"black"}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Bob Jones" secondary="Last seen 13 hours ago" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon sx={{color:"black"}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Bob Jones" secondary="Last seen 13 hours ago" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon sx={{color:"black"}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Bob Jones" secondary="Last seen 13 hours ago" />
                        </ListItem>
                    </List>
                </Box>
            </div>
            <div className="searchBar">
                <TextField id="search-field" label="Search User" variant="outlined" />
            </div>
            <div className="recommendedPeople">
                <Box sx={{height: "25%", width: "25%", bgcolor: "background.paper"}}>
                    <List>
                        <ListItem>
                            <ListItemText primary={<Typography style={{fontSize: 30}}>Friends List</Typography>} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon sx={{color:"black"}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Bob" />
                        </ListItem>
                    </List>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{height: "25%", width: "25%", bgcolor: "background.paper"}}>
                    <List>
                        <ListItem>
                            <ListItemText primary={<Typography style={{fontSize: 30}}>Recommended Friends</Typography>} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon sx={{color:"black"}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Fred" secondary="in CS202" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon sx={{color:"black"}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Skase???" secondary="in bread club" />
                        </ListItem>
                    </List>
                </Box>
            </div>
        </div>
    )
}

export default Recommended;