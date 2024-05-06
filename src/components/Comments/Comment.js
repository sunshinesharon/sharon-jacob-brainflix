import React from 'react';
import './Comment.scss';
import commentIcon from '../../assets/images/icons/add_comment.svg';
import {formatTimestamp} from '../../App.js' ;

const Comments = ({ comments }) => {
    return (
      <section className='comments-section'>
        <p className='comments-section__title'>{comments.length} Comment{comments.length > 1 ? 's' : ''}</p>
        <div className='comments-section__newcomment'>
          <div className='newcomment__profile'>
          </div>
          <div className='newcomment__input'>
            <label htmlFor='comment-input'>JOIN THE CONVERSATION</label>
            <input id='comment-input' type='text' placeholder='Add a new comment' />
          </div>
          <div className='newcomment__button'>
            <button>
              <img src={commentIcon} alt='upload-btn-icon' />
              <span>COMMENT</span>
            </button>
          </div>
        </div>
        {comments.map((comment) => {
          return (
            <div class="comments-section__content__card">
              <div class="comments-section__content__profile">
                <span></span>
              </div>
              <div class="comments-section__content__info">
                <div class="comments-section__content__info__header">
                  <p class="comments-section__content__info__username">{comment.name}</p>
                  <p class="comments-section__content__info__timestamp">{formatTimestamp(comment.timestamp)}</p>
                </div>
                <p class="comments-section__content__info__comment">{comment.comment}</p>
              </div>
            </div>
          )
        })}
      </section>
    )
  }

export default Comments;