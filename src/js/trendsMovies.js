import { fetchGenresOfMovie, fetchTrendMovies } from './ApiService';
import { updateTotalPagesNumber, stylePagination, HOME, site } from './pagination';
import pagination from'./castom_pagination';
import { preloader } from './preloader';
import imgPlaceholder from '../images/imgPlaceholder.jpg'


const START_PAGE = 1;
let page = START_PAGE;
let popularMoviesList = [];

const cardsMain = document.querySelector('.main-render');

createHomeGallery(page);

export async function createHomeGallery(page) {
  site.currentPage = HOME;

  await fetchTrendMovies(page)
  
  .then(({data }) => {
    
    page === START_PAGE;
    pagination(data.page, data.total_pages)

    popularMoviesList = [];
    data.results.forEach(movie => {
      let movieData = {
        id: movie.id,
        poster: movie.poster_path,
        title: movie.original_title,
        genres: movie.genre_ids,
        year: movie.release_date ? movie.release_date.slice(0, 4) : 'Year N/A',
      };

      popularMoviesList.push(movieData);
    });
  })
  .catch(error => console.log(error));

  await fetchGenresOfMovie()
    .then(response => {
      const {
        data: { genres },
      } = response;
      // console.log(response);

      popularMoviesList.forEach(movie => {
        movie.genres = movie.genres.map(id => {
          genres.forEach(obj => {
            // console.log(obj);
            if (obj.id === id) {
              id = obj.name;
            }
          });
          return id;
          
        });
        
        switch (true) {
          case movie.genres.length > 0 && movie.genres.length <= 2:
            movie.genres = movie.genres.join(', ');
            break;

          case movie.genres.length > 2:
            movie.genres[2] = 'Other';
            movie.genres = movie.genres.slice(0, 3).join(', ');
            break;

          default:
            movie.genres = 'Genre N/A';
            break;
        }
      });
    })
    .catch(error => {
      console.log('Failed to get genres : ', error);
      popularMoviesList.map(movie => (movie.genres = 'Genres N/A'));
    });

  cardsMain.innerHTML = popularMoviesList
    .map(({ id, poster, title, genres, year }) => {
      return `
<li class="main-render__item">
        <a href="#" class="main-render__link" data-id="${id}">
        
          <img class="main-render__image"
          src="${
            poster ? `https://image.tmdb.org/t/p/w500${poster}` : imgPlaceholder
          }"
          loading="lazy"
          alt="${title}" 
          data-id="${id}">
          
          
          <h2 class="main-render__title" data-id="${id}">
            ${title}
          </h2>
          <p class="main-render__text" data-id="${id}">${genres} | ${year}</p>
          
        </a>
      </li>
`;
    })
    .join('');

  setTimeout(() => {
    if (popularMoviesList.length === 0) {
      const errorText = `<li class="api-error">
            <p class="api-error__desc">The list of popular movies is temporarily unavailable.<br>Please, retry later!
            </p>
            </li>`;
      cardsMain.innerHTML = errorText;
    }

  }, 500);
}

