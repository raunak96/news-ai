import React from 'react';
import NewsCard from '../news-card/NewsCard';
import {Grow,Grid,Typography} from "@material-ui/core"; /* For exit entry animation */
import useStyles from "./styles";

const NewsCards = ({articles,activeArticle}) => {
    const classes = useStyles();
    const infoCards = [
        { color: '#00838f', title: 'Latest News', text: 'Give me the latest news/latest news' },
        { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with Football/News about football' },
        { color: '#283593', title: 'News by Sources', info: 'CNN, The Hindu, The Times of India,BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN/latest from CNN' },
];
    return (
        <Grow in> 
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {articles.length ? (
                    articles.map((article,index)=>(
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                        <NewsCard  article={article} index={index} isActive={activeArticle===index} />
                    </Grid>
                ))
                ):(
                   infoCards.map((infoCard,index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {infoCard.info && (<Typography variant="subtitle2"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography>) }
                                <Typography variant="body2">Try saying: <br /> <strong><i>"{infoCard.text}"</i></strong></Typography>
                            </div>
                        </Grid>
                    ))
                )}
            </Grid>
        </Grow>
    );
};

export default NewsCards;