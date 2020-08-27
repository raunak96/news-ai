import React, { useEffect, useState, Fragment } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/news-cards/NewsCards";
import useStyles from "./styles";
import wordsToNumbers from "words-to-numbers";

const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);
	const [activeArticle, setActiveArticle] = useState(-1);
	const classes = useStyles();
	useEffect(() => {
		alanBtn({
			key: process.env.REACT_APP_ALAN_KEY,
			onCommand: ({ command, articles,number }) => {
				switch(command){
					case 'newHeadlines':
						setNewsArticles(articles);
						setActiveArticle(-1);
						break;
					case 'highlight':
						setActiveArticle((prevState) => prevState + 1);
						break;
					case 'open':
						let numberToInt = parseInt(number);
						const parsedNumber = !numberToInt ? wordsToNumbers(number,{fuzzy:true}): numberToInt;
						if(parsedNumber> articles.length)
							alanBtn().playText('This article number does not exist..Try Again!');
						else{
							window.open(articles[parsedNumber-1].url, '_blank');
							alanBtn().playText('Opening...');
						}
						break;
					default:
						break;
				}
			},
		});
	}, []);
	return (
		<Fragment>
			<div className={classes.logoContainer}>
				<img src='https://alan.app/voice/images/previews/preview.jpg' className={classes.alanLogo} alt='logo' />
			</div>
			<NewsCards articles={newsArticles} activeArticle={activeArticle} />
		</Fragment>
	);
};

export default App;
