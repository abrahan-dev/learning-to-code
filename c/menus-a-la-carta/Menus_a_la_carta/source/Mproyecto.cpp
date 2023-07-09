//PROGRAMA PRINCIPAL DEL PROYECTO DE PROGRAMACI�N DE 1�DAI. CURSO 2010/2011
//Mproyecto.cpp
//AUTOR: ABRAHAM MESA MESA

#include "Fproyecto.cpp" //archivo de funciones.
//PROGRAMA PRINCIPAL
void main(void) {
	//variables de opcion de pantallas
	int opcion_a, volver_a, opcion_b1, volver_b1 = 1, opcion_b2, volver_b2 = 1;
	int opcion_c1, volver_c1 = 1, opcion_c2, volver_c2 = 1;
	//otras variables
	int size_r, size_p, size_m, i; //size es el tama�o de los arrays
	Treceta *recetas;
	Tproducto *productos;
	cadena * menus;
	FILE * Precetas, *Pproductos, *Pmenus;
	char * ruta_menus = "menus.txt";
	char * ruta_recetas = "recetas.txt";
	char * ruta_productos = "productos.txt";

	//abrir fichero recetas, contar registros y reservar memoria.
	Precetas = fopen(ruta_recetas, "rb");
	if (Precetas == NULL) {
		printf("\nERROR: Apertura  de archivo de recetas incorrecta");
		printf("\n\nPulse una tecla para salir...");
		getch();
		exit(0);
	}
	size_r = (filelength(fileno(Precetas)) / sizeof(Treceta));
	recetas = (Treceta *) malloc((size_r + 100) * sizeof(Treceta));
	fread(recetas, sizeof(Treceta), size_r, Precetas);
	fclose(Precetas);

	//abrir fichero productos, contar registros y reservar memoria.
	Pproductos = fopen(ruta_productos, "rb");
	if (Pproductos == NULL) {
		printf("\nERROR: Apertura  de archivo de productos incorrecta");
		printf("\n\nPulse una tecla para salir...");
		getch();
		exit(0);
	}
	size_p = (filelength(fileno(Pproductos)) / sizeof(Tproducto));
	productos = (Tproducto *) malloc((size_p + 100) * sizeof(Tproducto));
	fread(productos, sizeof(Tproducto), size_p, Pproductos);
	fclose(Pproductos);

	//abrir fichero menus, contar registros y reservar memoria.
	Pmenus = fopen(ruta_menus, "rb");
	if (Pmenus == NULL) {
		printf("\nERROR: Apertura  de archivo de menus incorrecta");
		printf("\n\nPulse una tecla para salir...");
		getch();
		exit(0);
	}
	size_m = (filelength(fileno(Pmenus)) / sizeof(cadena));
	menus = (cadena *) malloc((size_m + 50) * sizeof(cadena));
	fread(menus, sizeof(cadena), size_m, Pmenus);
	fclose(Pmenus);

	if (recetas == NULL || productos == NULL || menus == NULL) {
		printf("\nERROR: Reserva de memoria de arrays incorrecta");
		printf("\n\nPulse una tecla para salir...");
		getch();
		exit(0);
	}

	//PRINCIPAL
	do {
		do {
			clrscr();
			pantalla_a();
			volver_a = 0;
			printf("\n\n\tOPCI0N(ESC sale): ");
			opcion_a = getch();
			putch(opcion_a);
			fflush(stdin);
		} while (opcion_a != '1' && opcion_a != '2' && opcion_a != '3'
				&& opcion_a != 27);
		if (opcion_a == 27)	//si ha elegido salir
			volver_a = 1;
		else
			switch (opcion_a) {
			case '1':	//generar men�
				clrscr();
				if (size_r > 1)
					generar_menu(recetas, size_r, productos, size_p, menus,
							size_m);
				else {
					clrscr();
					printf("\n\tPara generar un menu deben existir recetas.");
					printf("\n\n\tPulse una tecla para continuar...");
					getch();
				}
				break;
			case '2':	//gesti�n de datos
				do {
					do {
						clrscr();
						pantalla_b1();
						volver_b1 = 0;
						printf("\n\n\tOPCION(ESC sale): ");
						opcion_b1 = getch();
						putch(opcion_b1);
						fflush(stdin);
					} while (opcion_b1 != '1' && opcion_b1 != '2'
							&& opcion_b1 != '3' && opcion_b1 != '4'
							&& opcion_b1 != 27);
					if (opcion_b1 == 27)	//si ha elegido volver
						volver_b1 = 1;
					else
						switch (opcion_b1) {
						case '1':	//introducir nueva receta
							system("cls");	//clearscreen();
							new_receta(recetas, size_r, productos, size_p);
							qsort(recetas, size_r, sizeof(Treceta), comp1);
							break;
						case '2':	//modificar receta
							system("cls");	//clearscreen();
							if (size_r > 0) {
								mod_receta(recetas, size_r, productos, size_p);
								qsort(recetas, size_r, sizeof(Treceta), comp1);
							} else {
								clrscr();
								printf("\n\tNo hay recetas almacenadas.");
								printf(
										"\n\n\tPulse una tecla para continuar...");
								getch();
							}
							break;
						case '3':	//introducir nuevo producto
							system("cls");	//clearscreen();
							new_producto(productos, size_p);
							qsort(productos, size_p, sizeof(Tproducto), comp2);
							break;
						case '4': 	//modificar producto
							system("cls"); 	//clearscreen();
							if (size_p > 1) {
								mod_producto(productos, size_p, recetas,
										size_r);
								qsort(productos, size_p, sizeof(Tproducto),
										comp2);
							} else {
								clrscr();
								printf("\n\tNo hay productos almacenados.");
								printf(
										"\n\n\tPulse una tecla para continuar...");
								getch();
							}
							break;
						}
				} while (volver_b1 == 0);
				break;
			case '3':	//consultas
				do {
					do {
						clrscr();
						pantalla_b2();
						volver_b2 = 0;
						printf("\n\n\tOPCION(ESC sale): ");
						opcion_b2 = getch();
						putch(opcion_b2);
						fflush(stdin);
					} while (opcion_b2 != '1' && opcion_b2 != '2'
							&& opcion_b2 != '3' && opcion_b2 != 27);
					if (opcion_b2 == 27)	//si ha elegido volver
						volver_b2 = 1;
					else
						switch (opcion_b2) {
						case '1':	//buscar recetas
							do {
								do {
									clrscr();
									pantalla_c1();
									volver_c1 = 0;
									printf("\n\n\tOPCION(ESC sale): ");
									opcion_c1 = getch();
									putch(opcion_c1);
									fflush(stdin);
								} while (opcion_c1 != '1' && opcion_c1 != '2'
										&& opcion_c1 != '3' && opcion_c1 != '4'
										&& opcion_c1 != '5' && opcion_c1 != 27);
								if (opcion_c1 == 27)	//si ha elegido volver
									volver_c1 = 1;
								else {
									if (size_r < 1) {
										clrscr();
										printf(
												"\n\tNo hay recetas que mostrar.");
										printf(
												"\n\n\tPulse una tecla para continuar...");
										getch();
									} else
										switch (opcion_c1) {
										case '1':	//mostrar todas las recetas
											system("cls");	//clearscreen();
											printf("\n\tLISTA DE RECETAS:\n");
											for (i = 0; i < size_r; i++)
												printf("\n\t%d\t%s",
														recetas[i].codigo,
														recetas[i].nombre);
											printf(
													"\n\n\tPulse una tecla para continuar...");
											getch();
											system("cls");	//clearscreen();
											break;
										case '2': 	//buscar recetas por nombre
											buscar_receta(recetas, size_r, 2);
											break;
										case '3'://buscar recetas por posici�n
											buscar_receta(recetas, size_r, 3);
											break;
										case '4'://buscar recetas por ingrediente
											buscar_receta(recetas, size_r, 4);
											break;
										case '5'://buscar recetas por tipo de men�
											buscar_receta(recetas, size_r, 5);
											break;
										}
								}
							} while (volver_c1 == 0);
							break;
						case '2':	//buscar productos
							do {
								do {
									clrscr();
									pantalla_c2();
									volver_c2 = 0;
									printf("\n\n\tOPCION(ESC sale): ");
									opcion_c2 = getch();
									putch(opcion_c2);
									fflush(stdin);
								} while (opcion_c2 != '1' && opcion_c2 != '2'
										&& opcion_c2 != '3' && opcion_c2 != '4'
										&& opcion_c2 != 27);
								if (opcion_c2 == 27)	//si ha elegido volver
									volver_c2 = 1;
								else {
									if (size_p < 1) {
										clrscr();
										printf(
												"\n\tNo hay productos que mostrar.");
										printf(
												"\n\n\tPulse una tecla para continuar...");
										getch();
									} else
										switch (opcion_c2) {
										case '1'://mostrar todos los productos
											system("cls");	//clearscreen();
											printf(
													"\n\tLISTA DE INGREDIENTES:\n");
											for (i = 0; i < size_p; i++) {
												printf("\n\t%d\t%s",
														productos[i].codigo,
														productos[i].nombre);
												if (i % 20 == 0 && i > 0) {
													printf(
															"\n\n\tMostrar siguientes...");
													getch();
												}
											}
											printf(
													"\n\n\tPulse una tecla para continuar...");
											getch();
											system("cls");	//clearscreen();
											break;
										case '2': //buscar productos por nombre
											buscar_producto(productos, size_p,
													2);
											break;
										case '3': //buscar productos por categor�a
											buscar_producto(productos, size_p,
													3);
											break;
										case '4': //buscar productos por temporada
											buscar_producto(productos, size_p,
													4);
											break;
										}
								}
							} while (volver_c2 == 0);
							break;
						case '3':	//buscar men�s almacenados
							if (size_m > 1)
								buscar_menu(menus, size_m);
							else {
								clrscr();
								printf("\n\n\tNo hay menus almacenados.");
								printf(
										"\n\n\tPulse una tecla para continuar...");
								getch();
							}
							break;
						}
				} while (volver_b2 == 0 && volver_c1 == 1 && volver_c2 == 1);
				break;
			}
	} while (volver_a == 0 && volver_b1 == 1 && volver_b2 == 1);
	clrscr();
	printf("\n\tGuardando cambios...");
	//volcar arrays a ficheros
	Precetas = fopen(ruta_recetas, "wb+");
	if (Precetas == NULL) {
		printf("\nERROR: Apertura  de archivo de recetas incorrecta.");
		printf("\n       Los cambios se perder�n.");
		printf("\n\n     Pulse una tecla para salir...");
		getch();
		exit(0);
	} else
		fwrite(recetas, sizeof(Treceta), size_r, Precetas);
	fclose(Precetas);

	Pproductos = fopen(ruta_productos, "wb+");
	if (Pproductos == NULL) {
		printf("\nERROR: Apertura  de archivo de productos incorrecta.");
		printf("\n       Los cambios se perder�n.");
		printf("\n\n     Pulse una tecla para salir...");
		getch();
		exit(0);
	} else
		fwrite(productos, sizeof(Tproducto), size_p, Pproductos);
	fclose(Pproductos);

	Pmenus = fopen(ruta_menus, "wb+");
	if (Pmenus == NULL) {
		printf("\nERROR: Apertura  de archivo de nombres incorrecta.");
		printf("\n       Los cambios se perder�n.");
		printf("\n\n     Pulse una tecla para salir...");
		getch();
		exit(0);
	} else
		fwrite(menus, sizeof(cadena), size_m, Pmenus);
	fclose(Pmenus);

	//liberar memoria
	free(recetas);
	free(productos);
	free(menus);
}

