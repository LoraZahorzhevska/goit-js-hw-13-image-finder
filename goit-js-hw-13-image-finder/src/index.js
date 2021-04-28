import './styles.css';
import NewsApiService from './js/apiService.js';
import imageCrd from './templates/image-card.hbs';

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

  clearArticleContainer();
  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  //newsApiService.fetchArticles().then(gallery => console.log(gallery));
  newsApiService.fetchArticles().then(appendArticlesMarkup);
}

function onLoadMore() {
  //newsApiService.fetchArticles().then(gallery => console.log(gallery));
  newsApiService.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(images) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', imageCrd(images.hits));
}

function clearArticleContainer() {
  refs.articlesContainer.innerHTML = '';
}
