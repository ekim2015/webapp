import * as React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import '../styles/cardLayout.css';

function ScheduleCard() {
    return (
        <div className="upcoming-container">
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color = "black">
                        Upcoming
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>23rd</Button>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>2:00 PM: CS 202</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>4:00 PM: Group meet library</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </CardActions>
                <CardActions>
                    <Button>24th</Button>
                    <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText>1:30 PM: Meeting with Prof. Johnson</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText>3:25 PM: Study session with friends</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                </CardActions>
            </Card>
        </div>
    );
}

export default ScheduleCard;