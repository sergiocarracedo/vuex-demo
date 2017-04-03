export const posts = state => state.posts;

export const postsPaginated = (state) => (page) => {
  let itemsByPage = 10;
  if (page < 0) {
    page = 0;
  }
  return state.posts.slice(page * itemsByPage, (page + 1) * itemsByPage);
}


export const postCount = state => state.posts.length;

export const totalPages = (state, getters) => getters.postCount / 10;

