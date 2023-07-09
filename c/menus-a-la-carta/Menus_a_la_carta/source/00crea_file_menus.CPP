//ARCHIVO AUXILIAR DEL PROYECTO DE PROGRAMACI�N DE 1�DAI. CURSO 2010/2011
//00crea_file_menus.cpp
//AUTOR: ABRAHAM MESA MESA
//PROCESO: 	Crea un archivo secuencial con registros simples del tipo cadena
//definido a continuaci�n.

//LIBRERIAS
#include <stdio.h>#include <conio.h> 	//clrscr#include <string.h>	//strupr
//CONSTANTES
#define CPC 40			//Tama�o m�ximo de la cadena
//TIPOS DEFINIDOS
typedef char cadena[CPC];

//PRINCIPAL
void main(void) {
	FILE * Pmenus;
	char * ruta = "menus.txt";
	cadena nombre;

	Pmenus = fopen(ruta, "wb");

	if (Pmenus == NULL) {
		printf("\nError de apertura.");
		printf("\n\nPulse una tecla...");
		getch();
	} else {
		//leer una cadena
		strcpy(nombre, "       ");
		//guardar nombre en archivo
		fwrite(&nombre, sizeof(cadena), 1, Pmenus);
		//cerrar archivo
		fclose(Pmenus);
		printf("\nArchivo creado correctamente...");
		getch();
	}
}
