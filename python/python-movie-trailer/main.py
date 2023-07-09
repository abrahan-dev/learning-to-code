import media.renderer as media_renderer
import media.reader as media_reader


class Main:
    """Run the main application."""

    @staticmethod
    def run():
        """
        Create a renderer.
        Get the list of movies.
        The renderer opens the page taking the movies as parameter.
        """
        renderer = media_renderer.Renderer()
        movies = media_reader.Reader.list_of_movies()
        renderer.open_movies_page(movies)


Main.run()
