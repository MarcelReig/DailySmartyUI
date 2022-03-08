import {
  SET_RECENT_POSTS
} from '../actions/types'

const INIT_STATE = {
  posts: [],
  recentPosts: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_RECENT_POSTS:
      
      return [...state, recentPosts: action.payload ]
  
    default:
      return state
  }
}