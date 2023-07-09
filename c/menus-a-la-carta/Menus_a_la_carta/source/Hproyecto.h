//ARCHIVO DE CABECERA DEL PROYECTO DE PROGRAMACIÓN DE 1ºDAI. CURSO 2010/2011
//Hproyecto.h
//AUTOR: ABRAHAM MESA MESA

//LIBRERIAS
#include <stdio.h>	//printf,scanf
#include <conio.h> 	//clrscr
#include <string.h>	//strupr
#include <ctype.h>	//toupper
#include <io.h>		//fileno
#include <stdlib.h>  //filelength, random
#include <time.h>		//randomize

//CONSTANTES
#define MAX	25
#define FPC 30			//Número máximo de productos y cantidades en una receta
#define CPC 40			//Tamaño máximo del nombre de producto
#define M 20			//Tamaño máximo del nombre de la magnitud
#define N 100			//Tamaño del array de seleccion de productos de temporada  
#define NOMBRE 100	//Tamaño máximo del nombre de la receta
#define TM 5			//Número máximo de tipos de menú para una sola receta
#define LTM 20       //Tamaño máximo de los tipos de menú
#define CT 20			//Tamaño máximo de las categorías de producto
#define PRO 1500 		//Tamaño máximo del texto del procedimiento de la receta

//ARRAYS DE CONSTANTES
char *orden_plato[] = {"PRIMERO","SEGUNDO","POSTRE"};
char *tipo_menu[] = {"NORMAL","VEGETARIANOS","DIABETICOS","HIPERTENSOS","BAJO EN CALORIAS"};
char *categoria[] = {"CEREALES","PANES Y HARINAS","LEGUMBRES","TUBERCULOS","FRUTAS","VERDURAS","CARNE ROJA Y CERDO","POLLO Y AVES","PESCADO","LECHE, QUESO Y DERIVADOS","GRASAS Y ACEITES","ESPECIAS","BEBIDAS","OTROS"};
char *temporada[] = {"ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE","SIEMPRE"};
char *magnitud[] = {"KILO","LITRO","UNIDAD","GRAMOS","MILILITROS","VASO","CUCHARA DE CAFE","CUCHARA SOPERA"};
char *dias[] = {"LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"};

//TIPOS DEFINIDOS
typedef struct { char producto[CPC];
					  //float precio;
					  float cantidad;
					  char magnitud[M];
					} Tproducto_receta;

typedef struct { float precio;
					  char magnitud[M];
					} TNumMagnitud;

typedef struct { int codigo;
					  char nombre[NOMBRE];
                 char posicion[10];
                 Tproducto_receta datos_producto[FPC] ;
                 char procedimiento[PRO];
                 char tipo_menu[TM][LTM];
					} Treceta;

typedef struct { int codigo;
					  char nombre[NOMBRE];
                 char categoria[30];
                 char temporada[12][12];
                 TNumMagnitud precio;
				   } Tproducto;

typedef struct {
                	char tipo_menu[LTM];
                  char evitar[10][CPC];
                  char temporada[LTM];
                  int duracion;
					}Tselect;

typedef struct {
						Treceta primer_plato;
                  Treceta segundo_plato;
                  Treceta postre;
					}Tmenu;

typedef struct Tnodo	{	
                  		Treceta info;
                     	Tnodo * sig;
							}Tnodo;

typedef char cadena[CPC];


								/*************************/
								//PROTOTIPOS DE FUNCIONES//
								/*************************/

//FUNCIONES QUE VISUALIZAN MENUS DE OPCIONES
void pantalla_a(void);
void pantalla_b(void);
void pantalla_b1(void);
void pantalla_b2(void);
void pantalla_c1(void);
void pantalla_c2(void);
void print_categorias(void);
void print_temporadas(void);

//FUNCIONES DEL PROGRAMA
void generar_menu(Treceta *, const int, Tproducto *, const int, cadena *, int &);
void new_receta(Treceta *, int &, Tproducto *, int &);
void mod_receta(Treceta *, int, Tproducto *, int &);
void new_producto(Tproducto *, int &);
void mod_producto(Tproducto *,int, Treceta *, int);
int buscar_receta(Treceta *, const int, const int);
int buscar_producto(Tproducto *, const int, const int);
void buscar_menu(cadena *, const int);
Treceta leer_receta(Treceta *, const int, Tproducto *, int &);
void escribir_receta(Treceta);
Tproducto leer_producto(Tproducto *, const int);
void escribir_producto(Tproducto);
void clearscreen();
int comp1(const void *, const void *);
int comp2(const void *, const void *);
void leer_tselect(Tselect &, Tproducto *, const int);
void LeerCad (char *);

//FUNCIONES DE LISTA ENLAZADA
void crear_lista(Tnodo * (&));
int lista_vacia(Tnodo *);
void insertar_elemento(Tnodo * (&), Treceta);
int eliminar_elemento(Tnodo * (&), int);
Tnodo * buscar_elemento(Tnodo *, int);

//fin de archivo de cabecera



