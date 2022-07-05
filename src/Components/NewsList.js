import React, { useEffect, useState } from 'react';
import NewItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';

const NewsListBock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;a
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'Https://via.placeholder.com/160',
};

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoding] = useState(false);
  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=35696b3c5a5c4a838f355b636d1663b9',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoding(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <NewsListBock>대기중 ...</NewsListBock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NewsListBock>
      {articles.map((article) => (
        <NewItem key={article.url} article={article} />
      ))}
    </NewsListBock>
  );
};

export default NewsList;
