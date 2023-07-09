import webbrowser
import os


class Renderer:
    """Put together the html of the application and open the browser"""

    def __init__(self):
        # Styles and scripting for the page
        main_page_head_path = 'template/main_page_head.html'
        self.main_page_head = open(main_page_head_path, 'r').read()

        # The main page layout and title bar
        main_page_content_path = 'template/main_page_content.html'
        self.main_page_content = open(main_page_content_path, 'r').read()

        # A single movie entry html template
        movie_tile_content_path = 'template/movie_tile_content.html'
        self.movie_tile_content = open(movie_tile_content_path, 'r').read()

    def create_movie_tiles_content(self, movies):
        """The HTML content for this section of the page: movie tiles"""
        content = ''
        for movie in movies:
            # Append the tile for the movie with its content filled in
            content += self.movie_tile_content.format(
                movie_title=movie.title,
                poster_image_url=movie.poster_image_url,
                trailer_youtube_url=movie.trailer_youtube_url,
                director=movie.director,
                leading_actors=movie.leading_actors,
                release_year=movie.release_year,
                oscars_won=movie.oscars_won,
                imdb_link=movie.imdb_link,
                genre=movie.genre,
                country=movie.country,
            )
        return content

    def open_movies_page(self, movies):
        # Create or overwrite the output file
        output_file = open('public/movies.html', 'w')

        # Replace the movie tiles placeholder generated content
        rendered_content = self.main_page_content.format(
            movie_tiles=self.create_movie_tiles_content(movies)
        )

        # Output the file
        output_file.write(self.main_page_head + rendered_content)
        output_file.close()

        # open the output file in the browser (in a new tab, if possible)
        url = os.path.abspath(output_file.name)
        webbrowser.open('file://' + url, new=2)
