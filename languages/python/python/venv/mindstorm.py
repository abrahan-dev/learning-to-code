import turtle


def main():
    window = turtle.Screen()
    window.bgcolor("black")
    drawer = turtle.Turtle()
    drawer.color("red")
    drawer.speed(20)
    drawer.shape("turtle")

    for i in range(1, 37):
        draw_square(drawer)
        drawer.right(10)

    window.exitonclick()


def draw_square(drawer):
    for i in range(1, 5):
        drawer.forward(200)
        drawer.right(90)


main()
