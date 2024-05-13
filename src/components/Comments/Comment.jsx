import React from 'react'
import './Comment.scss';
import { formatTimestamp } from '../../assets/utils/commons';

const CommentCard = ({ comment }) => {
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
}

export default CommentCard