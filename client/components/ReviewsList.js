import React from 'react';
//import moment from 'moment';

const ReviewsList = ({handleClick, blogs, setCurrentBlogPost}) => {

  // let list = blogs.map((blogs, i) => (
  //     <li className="feed-list-item" key={i}>
  //       <div className="feed-list-item-title" onClick={() => {setCurrentBlogPost(i); handleClick()}}>{blogs.title}</div>
  //       <div className="feed-list-item-byline">
  //         <span className="feed-list-item-byline-author">{blogs.author}</span>
  //         {moment(blogs.createdAt).fromNow()}
  //         </div>
  //       <img src={blogs.imageUrl} onClick={() => {setCurrentBlogPost(i); handleClick()}} className="feed-list-item-image"/>
  //       <span className="feed-list-item-lede">{blogs.body}</span>
  //     </li>
  // ))

  return (
    <div className="reviewOuterDiv">
      reviews list
    </div>
  )
};

export default ReviewsList;