import { DeleteOutlined } from '@mui/icons-material';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Avatar } from '@material-ui/core';
import { blue, green, pink, yellow } from '@material-ui/core/colors';


const NoteCard = (props) => {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader 
                    avatar={
                        <Avatar 
                        style={
                            (props.note.category === 'work') ? 
                             {backgroundColor: yellow[700]} : 
                             (props.note.category === 'money') ? 
                             {backgroundColor: green[500]} : 
                             (props.note.category === 'todos') ?
                             {backgroundColor: pink[500]} :
                             {backgroundColor: blue[500]}}> 
                            {props.note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={()=> props.handleDelete(props.note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={props.note.title}
                    subheader={props.note.category}
                />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            {props.note.details}
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
};

export default NoteCard;