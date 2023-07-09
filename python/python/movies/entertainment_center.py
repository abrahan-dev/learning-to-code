import movies.media as media
import movies.fresh_tomatoes as fresh_tomatoes

toy_story = media.Movie(
    'Toy story',
    '2h 35m',
    'A story of a boy and his toys that come to life',
    'https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg',
    'https://www.youtube.com/watch?v=m9CvO0s6Tzw'
)

movies = [toy_story]
fresh_tomatoes.open_movies_page(movies)

