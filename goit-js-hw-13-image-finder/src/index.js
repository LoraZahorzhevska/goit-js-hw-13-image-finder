import './styles.css';
import NewsApiService from './js/apiService.js';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles();
}

function onLoadMore() {
  newsApiService.fetchArticles();
}
