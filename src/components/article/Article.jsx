import React from 'react';
import './article.css';


const Article = (props) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={props.imgUrl} alt='blogimage'/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>FEB 15, 2023</p>
          <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article