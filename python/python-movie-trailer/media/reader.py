import media.movie as movie
import csv


class Reader:

    @staticmethod
    def list_of_movies():
        """Read the data source and create a list of Movie objects
        :rtype: list
        """
        movies = []
        with open('data/greatest_movies.csv') as csv_file:
            movies_reader = csv.reader(csv_file, delimiter=',')
            # skip the header row
            next(movies_reader)
            for row in movies_reader:
                # only movies with poster and trailer are listed
                if row[8] and row[9]:
                    movies.append(
                        movie.Movie(
                            title=row[0],
                            director=row[1],
                            leading_actors=row[2],
                            release_year=row[3],
                            oscars_won=row[4] if row[4] else 0,
                            imdb_link=row[5],
                            country=row[6],
                            genre=row[7],
                            poster_image_url=row[8],
                            trailer_youtube_url=row[9]
                        )
                    )
        return movies
