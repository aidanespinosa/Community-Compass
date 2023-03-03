const { RESTDataSource } = require('@apollo/datasource-rest');
const { model, models } = require('mongoose');

class MoviesAPI extends RESTDataSource {
    baseURL = 'https://movies-api.example.com/';
  
    async getMovie(id) {
      return this.get(`movies/${encodeURIComponent(id)}`);
    }
  
    async getMostViewedMovies(limit = 10) {
      const data = await this.get('movies', {
        params: {
          per_page: limit.toString(), // all params entries should be strings
          order_by: 'most_viewed',
        },
      });
      return data.results;
    }
  }


module.exports = MoviesAPI;