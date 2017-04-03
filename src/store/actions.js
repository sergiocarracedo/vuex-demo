import * as types from './mutation-types'
import Api from '../api'

export const getAllPosts = ({commit}) => {
  Api.getAllPosts().then(response => {
    let posts = response.data;
    commit(types.RECEIVE_POSTS, { posts })
  })
}
