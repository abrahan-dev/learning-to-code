class Movie:
    """Store information related to one movie"""

    def __init__(self,
                 title,
                 director,
                 leading_actors,
                 release_year,
                 oscars_won,
                 imdb_link,
                 country,
                 genre,
                 poster_image_url,
                 trailer_youtube_url):
        """
        :param title:
        :param director:
        :param leading_actors:
        :param release_year:
        :param oscars_won:
        :param imdb_link:
        :param country:
        :param genre:
        :param poster_image_url:
        :param trailer_youtube_url:
        """
        self.title = title
        self.director = director
        self.leading_actors = leading_actors
        self.release_year = release_year
        self.oscars_won = oscars_won
        self.imdb_link = imdb_link
        self.country = country
        self.genre = genre
        self.poster_image_url = poster_image_url
        self.trailer_youtube_url = trailer_youtube_url
