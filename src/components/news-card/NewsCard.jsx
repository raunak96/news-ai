import React, { useRef, useEffect } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from "./styles";
const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage },index,isActive}) => {
    const classes = useStyles();
    const myRef = useRef(null);
    useEffect(()=>{
        if(isActive)
            window.scrollTo(0, myRef.current.offsetTop);
    },[isActive]);
    return (
        <Card ref={myRef} className={`${classes.card} ${isActive?classes.activeCard:null}`}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://cdn.ymaws.com/www.itsmfusa.org/resource/resmgr/images/more_images/news-3.jpg'} />

                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component="h2">{new Date(publishedAt).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component="h2">{source.name}</Typography>
                </div>

                <Typography className={`${classes.title} ${isActive?classes.highlight:null}`} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" href={url}>Learn More</Button>
                <Typography variant="h5" color="textSecondary" component="h2">{index+1}</Typography>
            </CardActions>
        </Card>
    );
};

export default NewsCard;