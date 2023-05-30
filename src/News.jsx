import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchNewsData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=80d85b3c799343ad946fd4b9c2ea3754&page=${page}`
      );
      const data = await response.json();
      setArticles((prevArticles) => [...prevArticles, ...data.articles]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(data.articles.length > 0);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchNewsData}
      hasMore={hasMore}
      loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
    >
      <div className="container">
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <NewsItem
              title={article.title}
              text={article.description}
              image={article.urlToImage}
              author={article.author}
              url={article.url}
            />
          </div>
        ))}
      </div>
      </div>
      
    </InfiniteScroll>
  );
};

export default News;
