import React from 'react';
import styled from 'styled-components';

const NewsWrapper = styled.div`
  margin-bottom: 2rem;
`;

const NewsTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${(props) => (props.darkMode ? '#ecf0f1' : '#2c3e50')};
`;

const NewsCard = styled.div`
  background: ${(props) => (props.darkMode ? '#34495e' : '#f9f9f9')};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${(props) => (props.darkMode ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)')};
`;

const MarketNews = ({ darkMode }) => {
  return (
    <NewsWrapper>
      <NewsTitle darkMode={darkMode}>Market News</NewsTitle>
      <NewsCard darkMode={darkMode}>
        <h3>Recent Headlines</h3>
        <p>Details about recent market news.</p>
      </NewsCard>
    </NewsWrapper>
  );
};

export default MarketNews;
