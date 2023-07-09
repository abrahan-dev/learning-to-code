#include <stdio.h>
#include <stdbool.h>

int getUserInput(void)
{
    int height;
    
    printf("\nHeight: ");
    scanf("%d", &height);
    
    return height;
}

void printValidationRule()
{
    printf("\nHeight between 1 and 10");
}

bool heightIsValid(int height)
{
    return height > 0 && height <= 10;
}

int getHeight (void)
{
    int height;
    
    do {
        height = getUserInput();
        
        if (heightIsValid(height)) {
	    return height;
	}
	
        printValidationRule();
    } while (true);
}

void printPiramid(int height)
{
    printf("\nPrinting a piramid of height %d\n\n", height);
    
    int i;
    int j;
    int pad;
    
    pad = height * 2 - 2;
    
    for(i = height, j = 1; i > 0; i--, j+=2, pad-=2) {
    	printf("%*s%s", pad/2, "", "     ");
    	printf("%0*d\n", j, 0);
    }
    
    printf("\n\n");
}

int main(void) 
{
    printf("\nPiramid printer\n\n");
    printPiramid(getHeight());
    
    return 0;
}

