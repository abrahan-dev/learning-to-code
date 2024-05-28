//ARCHIVO AUXILIAR DEL PROYECTO DE PROGRAMACI�N DE 1�DAI. CURSO 2010/2011
//00crea_file_productos.cpp
//AUTOR: ABRAHAM MESA MESA
//PROCESO: 	Crea un archivo con registros del tipo Producto.

//LIBRERIAS
#include <stdio.h>	//printf,scanf#include <conio.h> 	//clrscr#include <string.h>	//strupr
//CONSTANTES
#define M 20			//Tama�o m�ximo del nombre de la magnitud#define NOMBRE 100	//Tama�o m�ximo del nombre del producto
//TIPOS DEFINIDOS
typedef struct {
	float precio;
	char magnitud[M];
} TNumMagnitud;

typedef struct {
	int codigo;
	char nombre[NOMBRE];
	char categoria[30];
	//legumbres, verduras, carnes...
	char temporada[12][12];
	//enero, febrero, marzo...
	TNumMagnitud precio;
	//Kilos, gramos, unidades, litros...
} Tproducto;

//PRINCIPAL
void main(void) {
	FILE * Pproductos;
	char * ruta_productos = "productos.txt";
	Tproducto producto;

	Pproductos = fopen(ruta_productos, "wb");

	if (Pproductos == NULL) {
		printf("\nError de apertura de fichero de productos.");
		printf("\n\nPulse una tecla...");
		getch();
	} else {
		//leer un producto
		producto.codigo = 10344;
		strcpy(producto.nombre, "GARBANZOS");
		strcpy(producto.categoria, "LEGUMBRES");
		strcpy(producto.temporada[0], "ENERO");
		producto.temporada[1][0] = '\0';
		producto.precio.precio = 0.89;
		strcpy(producto.precio.magnitud, "KILO");
		//guardar receta en archivo
		fwrite(&producto, sizeof(Tproducto), 1, Pproductos);
		//cerrar archivo
		fclose(Pproductos);
		printf("\nArchivo creado correctamente...");
		getch();
	}
}
