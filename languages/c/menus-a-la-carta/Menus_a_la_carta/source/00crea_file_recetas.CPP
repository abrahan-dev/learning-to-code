//ARCHIVO AUXILIAR DEL PROYECTO DE PROGRAMACI�N DE 1�DAI. CURSO 2010/2011
//00crea_file_recetas.cpp
//AUTOR: ABRAHAM MESA MESA
//PROCESO: 	Crea un archivo con registros del tipo Receta.

//LIBRERIAS
#include <stdio.h>
#include <conio.h>
#include <string.h>

//CONSTANTES
#define FPC 30			//N�mero m�ximo de productos y cantidades en una receta
#define CPC 40			//Tama�o m�ximo del nombre de producto
#define M 20			//Tama�o m�ximo del nombre de la magnitud
#define NOMBRE 100	//Tama�o m�ximo del nombre de la receta
#define TM 5			//N�mero m�ximo de tipos de men� para una sola receta
#define LTM 20       //Tama�o m�ximo de los tipos de men�
//TIPOS DEFINIDOS
typedef struct {
	char producto[CPC];
	float precio;
	float cantidad;
	char magnitud[M];
} Tproducto_receta;

typedef struct {
	int codigo;
	char nombre[NOMBRE];
	char posicion[10];
	//primero, segundo, postre
	Tproducto_receta datos_producto[FPC];
	//Productos, cantidades, magnitudes y precios
	char procedimiento[1000];
	//texto de la receta
	char tipo_menu[TM][LTM];
	//tipo de menu definido
} Treceta;

//PRINCIPAL
void main(void) {
	FILE * Precetas;
	char * ruta_recetas = "recetas.txt";
	Treceta receta;

	Precetas = fopen(ruta_recetas, "wb");

	if (Precetas == NULL) {
		printf("\nError de apertura.");
		printf("\n\nPulse una tecla...");
		getch();
	} else {
		//leer una receta
		receta.codigo = 1500;https://github.com/brhmms/hw-mean-stack.git
		strcpy(receta.nombre, "PATATAS A LO POBRE");
		strcpy(receta.posicion, "SEGUNDO");
		strcpy(receta.datos_producto[0].producto, "PATATA");
		strcpy(receta.datos_producto[0].magnitud, "KILO");
		receta.datos_producto[0].cantidad = 1;
		receta.datos_producto[1].cantidad = 0;
		strcpy(receta.procedimiento, "ESCRIBIR AQUI EL PROCEDIMIENTO");
		strcpy(receta.tipo_menu[0], "NORMAL");

		//guardar receta en archivo
		fwrite(&receta, sizeof(Treceta), 1, Precetas);

		//cerrar archivo
		fclose(Precetas);
		printf("\nArchivo creado correctamente...");
		getch();
	}
}

