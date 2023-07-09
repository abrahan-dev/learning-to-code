//ARCHIVO DE FUNCIONES DEL PROYECTO DE PROGRAMACIÓN DE 1ºDAI. CURSO 2010/2011
//Fproyecto.cpp
//AUTOR: ABRAHAM MESA MESA

#include "Hproyecto.h"

/*******************************************************************************
INTERFAZ DE PANTALLA_A
PROCESO:	Presenta en pantalla el menú de opciones principal pantalla_a.
*******************************************************************************/
void pantalla_a(void)
{
	printf("\n\tPLANIFICADOR DE COCINA\n\n\t1. Generar men\xA3s\n\n");
   printf("\t2. Gesti\xA2n de datos\n\n\t3. Consultas");
}

/*******************************************************************************
INTERFAZ DE PANTALLA_B
PROCESO: Presenta en pantalla el menú de opciones pantalla_b.
*******************************************************************************/
void pantalla_b(void)
{
 	printf("\n\tPLANIFICADOR DE COCINA/Generar menu");
   printf("\n\n\t1. Generar menu ahora");
   printf("\n\n\t2. Anotar los criterios de seleccion");
}

/*******************************************************************************
INTERFAZ DE PANTALLA_B1
PROCESO: Presenta en pantalla el menú de opciones pantalla_b1.
*******************************************************************************/
void pantalla_b1(void)
{
 	printf("\n\tPLANIFICADOR DE COCINA/Gesti\xA2n de datos");
   printf("\n\n\t1. Introducir una receta\n\n\t2. Modificar una receta");
   printf("\n\n\t3. Introducir un producto\n\n\t4. Modificar un producto");
}

/*******************************************************************************
INTERFAZ DE PANTALLA_B2
PROCESO: Presenta por pantalla el menú de opciones pantalla_b2.
*******************************************************************************/
void pantalla_b2 (void)
{
 	printf("\n\tPLANIFICADOR DE COCINA/Consultas");
   printf("\n\n\t1. Buscar recetas\n\n\t2. Buscar productos");
   printf("\n\n\t3. Buscar men\xA3s");
}

/*******************************************************************************
INTERFAZ DE PANTALLA_C1
PROCESO: Presenta por pantalla el menú de opciones pantalla_c1.
*******************************************************************************/
void pantalla_c1 (void)
{
 	printf("\n\tPLANIFICADOR DE COCINA/Consultas/Buscar recetas");
   printf("\n\n\t1. Mostrar todas\n\n\t2. Buscar por nombre");
   printf("\n\n\t3. Buscar por posici\xA2n\n\n\t4. Buscar por ingrediente");
   printf("\n\n\t5. Buscar por tipo de men\xA3");
}

/*******************************************************************************
INTERFAZ DE PANTALLA_C2
PROCESO: Presenta por pantalla el menú de opciones pantalla_c2.
*******************************************************************************/
void pantalla_c2 (void)
{
 	printf("\n\tPLANIFICADOR DE COCINA/Consultas/Buscar productos");
   printf("\n\n\t1. Mostrar todos\n\n\t2. Buscar por nombre");
   printf("\n\n\t3. Buscar por categoria\n\n\t4. Buscar por temporada");
}

/*******************************************************************************
INTERFAZ DE PRINT_CATEGORIAS
PROCESO: Presenta por pantalla el menú de opciones print_categorias.
*******************************************************************************/
void print_categorias(void){
	printf("\n\tCategorias:\n");
   printf("\n\t0. Cereales                     7. Pollo y aves");
   printf("\n\t1. Panes y harinas              8. Pescado");
   printf("\n\t2. Legumbres                    9. Leche, queso y derivados");
   printf("\n\t3. Tuberculos                   10.Grasas y aceites");
   printf("\n\t4. Frutas                       11.Especias");
   printf("\n\t5. Verduras                     12.Bebidas");
   printf("\n\t6. Carne Roja y Cerdo           13.Otros");
   printf("\n\n\tAnote su numero: ");
}

/*******************************************************************************
INTERFAZ DE PRINT_TEMPORADAS
PROCESO: Presenta por pantalla el menú de opciones print_temporadas.
*******************************************************************************/
void print_temporadas(void){
   printf("\n\tMeses:\n");
   printf("\n\t1. Enero                        7. Julio");
   printf("\n\t2. Febrero                      8. Agosto");
   printf("\n\t3. Marzo                        9. Septiembre");
   printf("\n\t4. Abril                        10.Octubre");
   printf("\n\t5. Mayo                         11.Noviembre");
   printf("\n\t6. Junio                        12.Diciembre");
   printf("\n\t                                13.Siempre");
   printf("\n\n\tAnote su numero: ");
}

/*******************************************************************************
INTERFAZ DE GENERAR_MENU
PROCESO: Selecciona recetas para confeccionar un menú, según un conjunto de
			criterios. Lo visualiza en pantalla y lo almacena e un archivo.
ENTRADAS:Punteros al primer elemento de los arrays de recetas, productos y
			nombres de menus generados. Enteros correspondientes al número de
         elementos de los dos primeros.
E/S: 	Entero por referencia correspondiente al número de elementos del array de
      menus generados.
PRECONDICIONES: Los arrays de productos y recetas deben contener datos.
*******************************************************************************/
void generar_menu(Treceta *recetas, const int size_r, Tproducto *productos, const int size_p, cadena *nombres, int &size_m)
{
	//definición de variables
 	Tselect select;
   Treceta *primeros, *segundos, *postres;
   int i, j, k, l, ind, valido, opcion;
   int size_primeros, size_segundos, size_postres;
   int num_primeros, num_segundos, num_postres;
   Tnodo *Plista, *Paux;
   Tmenu *menus;
   Tproducto productos_tem[N];
   char ruta[NOMBRE], aux[NOMBRE];
   FILE * Pruta;
   cadena *lista_compra;
   
   randomize();
   //presentar opciones de seleccion.
   do{
   	clrscr();
   	pantalla_b();
      printf("\n\n\tOPCION(ESC sale): ");
      opcion=getch();
      putch(opcion);
   	fflush(stdin);
   }while(opcion!='1' && opcion!='2' && opcion!=27);

   if(opcion!=27){//si no desea salir
   	switch (opcion){
      	case '1':	//Generar menu ahora con los valores por defecto.
            //inicializar select a valores por defecto:
   			strcpy(select.tipo_menu, "NORMAL");
            for(i=0; i<10; i++)
      			for(j=0; j<CPC; j++)
      				select.evitar[i][j]='\0';
   			strcpy(select.temporada, "SIEMPRE");
   			select.duracion=1;	//1 semanal, 2 mensual.
         	break;
         case '2':	//Solicitar criterios de selección y generar menu.
            leer_tselect(select, productos, size_p);
         	break;
      }

      //Reservar memoria para la lista que recogera la seleccion de recetas
      Plista = (Tnodo *) malloc(sizeof(Tnodo));
      if(Plista==NULL){
      	clrscr();
   		printf("\nERROR en la reserva de memoria.");
   		printf("\n\nPulse una tecla para salir.");
   		getch();
   		exit(0);
   	}
      crear_lista(Plista);

      //Selecciona las recetas que coinciden en tipo.
      num_primeros=0;
      num_segundos=0;
      num_postres=0;
      	//el bucle inserta en la lista las recetas que coinciden con el tipo
         //de menu seleccionado y cuenta la cantidad de platos por posicion.
      for(i=0; i<size_r; i++)
       	for(j=0; j<TM; j++)
      		if(0==strcmp(recetas[i].tipo_menu[j], select.tipo_menu)){
            	insertar_elemento(Plista, recetas[i]);
               j=TM;//para salir del segundo bucle for.
               //contar el tipo de plato que está insertando para la posterior
               //reserva de memoria.
               if(0==strcmp(recetas[i].posicion,"PRIMERO"))
               	num_primeros++;
            	else
               	if(0==strcmp(recetas[i].posicion,"SEGUNDO"))
               		num_segundos++;
                  else
                  	if(0==strcmp(recetas[i].posicion,"POSTRE"))
               			num_postres++;
            }

      //Elimina de la lista aquellas recetas que contienen productos a rechazar.
      if(select.evitar[0][0]!='\0')
      //si hay productos a evitar entra en el bucle.
      	for(i=0; i<size_r; i++){
      		for(j=0, ind=0; j<FPC && ind==0; j++)
      			for(k=0; k<10 && ind==0 && select.evitar[k][0]!='\0'; k++)
         			if(0==strcmp(recetas[i].datos_producto[j].producto, select.evitar[k]))
                  //si existe el producto a evitar en la receta, activar switch.
      					ind=1;

            if(ind==1)//eliminar receta de la lista.
               eliminar_elemento(Plista, recetas[i].codigo);
      	}

      //Reservar memoria para arrays de recetas seleccionadas.
      if(num_primeros<30){
       	valido=30-num_primeros;
         num_primeros=num_primeros+valido;
      }
      if(num_segundos<30){
       	valido=30-num_segundos;
         num_segundos=num_segundos+valido;
      }
      if(num_postres<30){
       	valido=30-num_postres;
         num_postres=num_postres+valido;
      }
      primeros=(Treceta *) malloc(num_primeros * sizeof(Treceta));
      segundos=(Treceta *) malloc(num_segundos * sizeof(Treceta));
      postres =(Treceta *) malloc(num_postres  * sizeof(Treceta));
      if(primeros==NULL || segundos==NULL || postres==NULL){
      	printf("\nError de asignación de memoria en arrays de seleccion.");
         printf("\nPulse una tecla para salir...");
         getch();
         exit(0);
      }

      //repartir el contenido de la lista en los tres arrays
      for(Paux=Plista, i=0, j=0, k=0; Paux!=NULL; Paux=Paux->sig){
      	if(0==strcmp(Paux->info.posicion,"PRIMERO")){
           	primeros[i]=Paux->info;
            i++;
         }
         else
           	if(0==strcmp(Paux->info.posicion,"SEGUNDO")){
           		segundos[j]=Paux->info;
               j++;
            }
            else
              	if(0==strcmp(Paux->info.posicion,"POSTRE")){
           			postres[k]=Paux->info;
                  k++;
               }
      }
      primeros[i].codigo=0;	//marca de final
      segundos[j].codigo=0;
      postres[k].codigo=0;
      size_primeros=i;        //tamaño de los arrays
      size_segundos=j;
      size_postres=k;
      if(size_primeros==0 || size_segundos==0 || size_postres==0){
      	clrscr();
      	printf("\n\tError: No hay suficientes recetas para realizar el menu");
         printf("\n\tPulse una tecla...");
         getch();
      }else{

      //HACER LISTADO
        	//Reservar memoria para array de menús según caso.
      if(select.duracion==1){//semanal
      	menus = (Tmenu *)malloc(7 * sizeof(Tmenu));
         if(menus==NULL)
         	exit(0);
         valido=7;
      }else{//mensual
       	menus = (Tmenu *)malloc(31 * sizeof(Tmenu));
         if(menus==NULL)
         	exit(0);
         valido=30;
      }
      	//Inicializar el array de menus.
      for(i=0; i<valido; i++){
       	menus[i].primer_plato.codigo=0;
         menus[i].segundo_plato.codigo=0;
         menus[i].postre.codigo=0;
      }
      	//Cargar "menus" con datos de arrays
      for(i=0; i<valido; i++)
      	menus[i].primer_plato=primeros[random(size_primeros)];
      for(i=0; i<valido; i++)
         menus[i].segundo_plato=segundos[random(size_segundos)];
      for(i=0; i<valido; i++)
      	menus[i].postre=postres[random(size_postres)];

        	//Si se quiere elegir menus con productos de temporada...
      if(0!=strcmp(select.temporada, "SIEMPRE")){
      		//inicializar productos_tem
      	for(i=0; i<N; i++)
        		productos_tem[i].nombre[0]='\0';
         	//buscar productos de temporada en "select.temporada"
         for(i=0, j=0; i<size_p && j<N; i++)
         	for(k=0; k<12; k++)
         		if(0==strcmp(productos[i].temporada[k], select.temporada)){
            		//si la temporada coincide, incluir en productos_tem
                  productos_tem[j]=productos[i];
                  j++;
               }

         	//comparar con los productos de las recetas seleccionadas
         		//primeros
       	for(i=0; i<size_primeros; i++)
         	for(j=0; j<FPC; j++)
            	for(k=0; k<N && productos_tem[k].nombre[0]!='\0'; k++)
            		if(0==strcmp(primeros[i].datos_producto[j].producto, productos_tem[k].nombre)){
                  	ind=random(valido);
                     menus[ind].primer_plato=primeros[i];
               	}
         		//segundos
         for(i=0; i<size_segundos; i++)
         	for(j=0; j<FPC; j++)
            	for(k=0; k<N && productos_tem[k].nombre[0]!='\0'; k++)
            		if(0==strcmp(segundos[i].datos_producto[j].producto, productos_tem[k].nombre)){
                  	ind=random(valido);
                     menus[ind].segundo_plato=segundos[i];
               	}
            	//postres
         for(i=0; i<size_postres; i++)
         	for(j=0; j<FPC; j++)
            	for(k=0; k<N && productos_tem[k].nombre[0]!='\0'; k++)
            		if(0==strcmp(postres[i].datos_producto[j].producto, productos_tem[k].nombre)){
                  	ind=random(valido);
                  	menus[ind].postre=postres[i];
               	}
      }
     	//Presentacion de datos en pantalla
      system("cls");//clearscreen();
      printf("\n\t**MENU SELECCIONADO**");
      for(i=0; i<valido; i++){
      	if(valido==7)
      		printf("\n  %s\n",dias[i]);
         else
         	printf("\n  DIA %d:\n", i+1);
      	printf("\t\t%d\t%s",menus[i].primer_plato.codigo, menus[i].primer_plato.nombre);
         printf("\n\t\t%d\t%s",menus[i].segundo_plato.codigo, menus[i].segundo_plato.nombre);
         printf("\n\t\t%d\t%s",menus[i].postre.codigo, menus[i].postre.nombre);
         if((i+1)%7==0 && i!=0 && valido>7){
         	printf("\n\n\tMostrar siguientes...");
      		getch();
         }
      }
      //Guardar menu generado como archivo
      do{
      	printf("\n\n\tDesea guardar este menu para posteriores consultas (S/N): ");
         opcion=toupper(getch());
         fflush(stdin);
      }while(opcion!= 'S' && opcion!='N');
      if(opcion=='S'){
      	do{
         	clrscr();
            printf("\n\n\tAnote un nombre para este menu: ");
         	gets(aux);
         	fflush(stdin);
            clrscr();
         	//comprobar que el nombre no existe ya
         	printf("\n\tGuardar en \"%s\" (S/N): ", aux);
         	ind=toupper(getch());
         	strcat(aux, ".txt");
         	strcpy(ruta, strcat(".\\menus_generados\\", aux));
         	for(i=0, j=0; i<size_m && j==0; i++)
         		if(0==strcmp(nombres[i], aux)){
            		j=1;
              		printf("\n\tLo siento, el nombre de fichero ya existe.");
            		ind='N';
            	}
      	}while(ind=='N');
      	strcpy(nombres[size_m], aux);
      	size_m++;
         //Crear el fichero con el nombre de menu seleccionado
      	Pruta=fopen(ruta, "wb");
         if(Pruta==NULL){
          	printf("\n\tError al crear el fichero. Vuelva a intentarlo.");
            printf("\n\tPulse una tecla para continuar");
            getch();
         }else{
      		fwrite(menus, sizeof(Tmenu), valido, Pruta);
      		fclose(Pruta);
         }
      }

      //presentar lista de la compra
      	//reservar memoria para array de productos lista_compra
      opcion=FPC*valido*3;
      lista_compra=(cadena *)malloc(opcion*sizeof(cadena));
      	//inizializar lista_compra
      for(i=0; i<opcion; i++)
      	lista_compra[i][0]='\0';

      system("cls");//clearscreen();
      printf("\n\t*LISTA DE LA COMPRA*\n\n");
      	//cargar array lista_compra
      for(i=0, k=0; i<valido && k<opcion; i++)
      	for(j=0; j<FPC; j++){
         	if(0!=strcmp(menus[i].primer_plato.datos_producto[j].producto, "NINGUNO")){
            	for(l=0, ind=0; l<k && ind==0; l++)
               	if(0==strcmp(menus[i].primer_plato.datos_producto[j].producto, lista_compra[l]))
                  	ind=1;
               if(ind==0){
         			strcpy(lista_compra[k],menus[i].primer_plato.datos_producto[j].producto);
            		k++;
               }
            }
            if(0!=strcmp(menus[i].segundo_plato.datos_producto[j].producto, "NINGUNO")){
               for(l=0, ind=0; l<k && ind==0; l++)
               	if(0==strcmp(menus[i].segundo_plato.datos_producto[j].producto, lista_compra[l]))
                  	ind=1;
               if(ind==0){
            		strcpy(lista_compra[k],menus[i].segundo_plato.datos_producto[j].producto);
            		k++;
            	}
            }
            if(0!=strcmp(menus[i].postre.datos_producto[j].producto, "NINGUNO")){
            	for(l=0, ind=0; l<k && ind==0; l++)
               	if(0==strcmp(menus[i].postre.datos_producto[j].producto, lista_compra[l]))
                  	ind=1;
               if(ind==0){
            		strcpy(lista_compra[k],menus[i].postre.datos_producto[j].producto);
            		k++;
            	}
            }
         }
      	//imprimir lista_compra

      for(i=0, j=5; i<opcion && lista_compra[i][0]!='\0'; i++, j++){
         gotoxy(5, j);
      	printf("%s",lista_compra[i]);
         i++;
         if(lista_compra[i][0]!='\0'){
         	gotoxy(40, j);
         	printf("%s",lista_compra[i]);
         }
      }   /*
      for(i=0; i<opcion && lista_compra[i][0]!='\0'; i++){
         gotoxy(5,i+5);
      	printf("%s",lista_compra[i]);
      }             */
      printf("\n\n\tPulse una tecla para continuar...");
      getch();
      free(menus);
   	free(lista_compra);
      free(Plista);
   	free(primeros);
   	free(segundos);
   	free(postres);
      }//fin del if-else-si no hay recetas para hacer la seleccion

   }//fin de if-si la opcion no es ESC

}

/*******************************************************************************
INTERFAZ DE NEW_RECETA
PROCESO: Captura una receta y la añade al final del array de recetas. Se repite
			el proceso mientras se desee.
ENTRADAS: Punteros a los arrays de recetas y productos.
E/S: Enteros por referencia correspondientes al número de elementos de los arrays.
*******************************************************************************/
void new_receta(Treceta *recetas ,int &size_r, Tproducto *productos, int &size_p)
{
	int repetir;

   do{
   	system("cls");//clearscreen();
      //llamar leer_receta y asignar la receta capturada al array recetas
      recetas[size_r]=leer_receta(recetas, size_r, productos, size_p);
      //visualizar receta recién grabada
      system("cls");//clearscreen();
      escribir_receta(recetas[size_r]);
      //actualizar índice
      size_r++;
      //preguntar si se desea repetir
  		do{
      	printf("\n\tGrabar otra receta? S/N:");
         repetir=toupper(getch());
         fflush(stdin);
      }while(repetir != 'N' && repetir != 'S');
   }while(repetir=='S');
}

/*******************************************************************************
INTERFAZ DE MOD_RECETA
PROCESO: Busca la receta elegida, captura los nuevos datos y la asigna a la
			posición que le corresponde en el array de recetas. Se repite el
         proceso mientras se desee.
ENTRADAS: 	Punteros a los arrays de recetas y productos. Entero correspondiente
            al número de elementos del array de recetas.
E/S: 	Entero por referencia correspondiente al número de elementos del array de
		productos.
POSCONDICIONES: La receta elegida ha sido modificada.
*******************************************************************************/
void mod_receta(Treceta *recetas ,int size_r, Tproducto *productos, int &size_p)
{
   int valido, repetir, posicion, opcion, i, codigo;
   Treceta receta;

 	do{
      do{
      	system("cls");//clearscreen();
      	printf("\n\t**MODIFICAR RECETAS**\n\n");
      	//BUSCAR RECETA A MODIFICAR
      	pantalla_c1();
      	printf("\n\n\tOPCION(ESC sale): ");
         opcion=getch();
         putch(opcion);
      	fflush(stdin);
       }while(opcion!='1' && opcion!='2' && opcion!='3' && opcion!='4' && opcion!='5' && opcion!=27);
      if(opcion!=27){//si no desea salir
         switch(opcion){
           	case '1':	//mostrar todas las recetas
              	system("cls");//clearscreen();
               printf("\n\t*RECETAS ALMACENADAS*\n");
               for(i=0; i<size_r; i++){
       				printf("\n\t%d\t%s",recetas[i].codigo, recetas[i].nombre);
                  if(i%20==0 && i>0){
                  	printf("\n\n\tMostrar siguientes...");
                     getch();
                  }
               }
               break;
            case '2': 	//buscar recetas por nombre
               buscar_receta(recetas, size_r, 2);
               break;
            case '3':	//buscar recetas por posición
            	buscar_receta(recetas, size_r, 3);
               break;
            case '4':	//buscar recetas por ingrediente
            	buscar_receta(recetas, size_r, 4);
               break;
            case '5':	//buscar recetas por tipo de menú
               buscar_receta(recetas, size_r, 5);
              	break;
         }
         //anotar codigo de receta a modificar. Visualizar y confirmar.
         do{
         	printf("\n\n\tAnote codigo de la receta a modificar: ");
         	valido=scanf("%d",&codigo);
         	fflush(stdin);
         	for(i=0, posicion=-1; i<size_r && posicion==-1; i++){
         		if(codigo==recetas[i].codigo){
            		posicion=i;
                  system("cls");//clearscreen();
            		escribir_receta(recetas[posicion]);
            	}
         	}
         }while(valido!=1);
         if(posicion==-1)
           	printf("\n\n\tEl codigo no existe en la base de datos.");
         else{
         	do{
      			printf("\n\tConfirma que desea modificar esta receta? S/N:");
            	repetir=toupper(getch());
         		fflush(stdin);
      		}while(repetir != 'N' && repetir != 'S');
         	clrscr();
         	if(repetir=='S'){
      			//Capturar modificaciones
               strcpy(recetas[posicion].nombre, "VACIO");
            	receta=leer_receta(recetas, size_r, productos, size_p);
            	clrscr();
      			//Grabar en la posición de la receta original
            	recetas[posicion]=receta;
            	printf("\n\tReceta modificada: \n");
            	escribir_receta(recetas[posicion]);
         	}
         }

   		do{
      		printf("\n\n\tModificar otra receta? S/N:");
            repetir=toupper(getch());
         	fflush(stdin);
      	}while(repetir != 'N' && repetir != 'S');
      }
      else
      	repetir='N';
   }while(repetir=='S');
   system("cls");//clearscreen();
}

/*******************************************************************************
INTERFAZ DE NEW_PRODUCTO
PROCESO: Captura un producto y lo añade al final del array de productos. Se
			repite el proceso mientras se desee.
ENTRADAS: Puntero al array de productos.
E/S: Entero por referencia correspondiente al número de elementos del array.
*******************************************************************************/
void new_producto(Tproducto *productos, int &size_p)
{
	int repetir;

   do{
   	system("cls");//clearscreen();
      //llamar leer_producto y asignar el producto capturado al array productos
      productos[size_p]=leer_producto(productos, size_p);
      //visualizar receta recién grabada
      system("cls");//clearscreen();
      escribir_producto(productos[size_p]);
      //actualizar índice
      size_p++;
      //preguntar si se desea repetir
  		do{
      	printf("\n\tGrabar otro producto? S/N:");
         repetir=toupper(getch());
         fflush(stdin);
      }while(repetir != 'N' && repetir != 'S');
   }while(repetir=='S');
}

/*******************************************************************************
INTERFAZ DE MOD_PRODUCTO
PROCESO: Busca el producto elegido, captura los nuevos datos y lo asigna a la
			posición que le corresponde en el array de productos. Se repite el
         proceso mientras se desee.
ENTRADAS:Punteros a los arrays de recetas y productos. Enteros correspondientes
			al número de elementos de los arrays.
POSCONDICIONES: El producto elegido ha sido modificado.
*******************************************************************************/
void mod_producto(Tproducto *productos ,int size_p, Treceta *recetas, int size_r)
{           
	int valido, repetir, posicion, opcion, i, j, codigo;
   Tproducto producto;
   cadena aux;

 	do{
      do{
      	system("cls");//clearscreen();
         printf("\n\t**MODIFICAR PRODUCTOS**\n\n");
      	//BUSCAR PRODUCTO A MODIFICAR
      	pantalla_c2();
      	printf("\n\n\tOPCION(ESC sale): ");
         opcion=getch();
         putch(opcion);
      	fflush(stdin);
       }while(opcion!='1' && opcion!='2' && opcion!='3' && opcion!='4' && opcion!=27);
      if(opcion!=27){
         switch(opcion){
           	case '1':	//mostrar todos los productos
             	system("cls");//clearscreen();
               printf("\n\t*PRODUCTOS ALMACENADOS*\n");
               for(i=0; i<size_p; i++){
               	printf("\n\t%d\t%s",productos[i].codigo, productos[i].nombre);
                  if(i%20==0 && i>0){
                  	printf("\n\n\tMostrar siguientes...");
                     getch();
                  }
               }
               break;
            case '2': 	//buscar productos por nombre
            	buscar_producto(productos, size_p, 2);
               break;
            case '3': 	//buscar productos por categoría
            	buscar_producto(productos, size_p, 3);
               break;
            case '4': 	//buscar productos por temporada
            	buscar_producto(productos, size_p, 4);
               break;
         }
         //anotar codigo del producto a modificar. Visualizar y confirmar.
         do{
         	printf("\n\n\tAnote codigo del producto a modificar: ");
         	valido=scanf("%d",&codigo);
         	fflush(stdin);
            for(i=0, posicion=-1; i<size_p && posicion==-1; i++){
         		if(codigo==productos[i].codigo){
            		posicion=i;
                  system("cls");//clearscreen();
               	escribir_producto(productos[posicion]);
               }
         	}
         }while(valido!=1);
         if(posicion==-1)
          	printf("\n\n\tEl codigo no existe en la base de datos.");
         else{
         	do{
      			printf("\n\n\tConfirma que desea modificar este producto? S/N: ");
            	repetir=toupper(getch());
         		fflush(stdin);
      		}while(repetir != 'N' && repetir != 'S');
         	clrscr();
         	if(repetir=='S'){
      			//Capturar modificaciones
               strcpy(aux, productos[posicion].nombre);
               strcpy(productos[posicion].nombre, "VACIO");
            	producto=leer_producto(productos, size_p);
            	clrscr();
            	escribir_producto(producto);
               
            	//UPDATE RECETAS
            	if(0!=strcmp(producto.nombre, aux))
            	//si el nombre que he capturado y el del producto que quiero
            	//modificar no son iguales, actualizo las recetas donde aparece...
            		for(i=0; i<size_r; i++)
            			for(j=0; j<FPC; j++)
            				if(0==strcmp(recetas[i].datos_producto[j].producto, aux))
                      		strcpy(recetas[i].datos_producto[j].producto,producto.nombre);
      			//Grabar en la posición del producto, el modificado.
            	productos[posicion]=producto;
         	}
         }

   		do{
      		printf("\n\n\tModificar otro producto? S/N:");
            repetir=toupper(getch());
         	fflush(stdin);
      	}while(repetir != 'N' && repetir != 'S');
      }
      else
      	repetir='N';
   }while(repetir=='S');
   system("cls");//clearscreen();
}

/*******************************************************************************
INTERFAZ DE BUSCAR_RECETA
PROCESO: Busca y visualiza aquellas recetas que cumplen con el criterio elegido.
ENTRADAS: Entero de Opcion (1- Buscar por código, 2- Buscar por nombre,
									 3- Buscar por posicion, 4- Buscar por ingrediente,
                            5- Buscar por tipo de menú)
SALIDAS: -1 si no la encuentra o la posicion en el array de elemento encontrado.
			Si hay varios encontrados, devuelve -2.
PRECONDICIONES: El array de recetas contiene datos válidos.
POSCONDICIONES: Se devuelve un valor entero mayor o igual que -2.
*******************************************************************************/
int buscar_receta(Treceta * recetas, const int size_r, const int opcion)
{
 	int posicion=-1, codigo, valido, i, k;
   char nombre[NOMBRE];
   char plato[10];
   char producto[NOMBRE];

   system("cls");//clearscreen();
   printf("\n\t**BUSCAR RECETAS**\n");
   switch(opcion){
   	case 1:	//Buscar por código
         do{
         	clrscr();
            printf("\n\t**BUSCAR RECETAS**\n");
         	printf("\nAnote codigo: ");
            valido=scanf("%d", &codigo);
            fflush(stdin);
         }while(valido!=1 || codigo<0);
         for(i=0; i<size_r && posicion==-1; i++)
         	if(codigo==recetas[i].codigo){
            	posicion=i;
               escribir_receta(recetas[posicion]);
            }
         if(posicion==-1)
         	printf("\n\n\tCodigo no encontrado.");
      	break;
      case 2:	//Buscar por nombre
         printf("\n\tAnote nombre de receta: ");
         strupr(gets(nombre));
         fflush(stdin);
         for(i=0; i<size_r && posicion==-1; i++)
         	if(0==strcmp(nombre, recetas[i].nombre)){
            	posicion=i;
               escribir_receta(recetas[posicion]);
            }
         if(posicion==-1)
         	printf("\n\n\t%s no existe.", nombre);
      	break;
      case 3:	//Buscar por posicion
         //anotar y validar tipo de plato
   		do{
         	clrscr();
            printf("\n\t**BUSCAR RECETAS**\n");
   			printf("\n\t1. Primero  2. Segundo 3. Postre");
      		printf("\n\n\tAnote numero de posicion: ");
      		valido=scanf("%d",&k);
      		fflush(stdin);
   		}while(valido!=1 || k<1 || k>3);
         clrscr();
			if(k==1){
   			strcpy(plato,"PRIMERO");
            printf("\n\n\tPRIMEROS:");
         }
   		else
   			if(k==2){
       			strcpy(plato,"SEGUNDO");
               printf("\n\n\tSEGUNDOS:");
            }
      		else{
       			strcpy(plato,"POSTRE");
               printf("\n\n\tPOSTRES:");
            }
         printf("\n");
         //Visualizar recetas de esa posicion.
         for(i=0; i<size_r; i++)
         	if(0==strcmp(plato, recetas[i].posicion)){
            	printf("\n\t%d\t%s", recetas[i].codigo, recetas[i].nombre);
               posicion=-2;
            }
      	break;
      case 4:	//Buscar por ingrediente
         printf("\n\tAnote el ingrediente: ");
      	strupr(gets(producto));
         fflush(stdin);
         clrscr();
         printf("\n\tRecetas con %s:\n", producto);
         //Visualizar recetas con ese ingrediente.
         for(i=0; i<size_r; i++)
         	for(k=0; k<FPC; k++)
         		if(0==strcmp(producto, recetas[i].datos_producto[k].producto)){
               	printf("\n\t%d\t%s", recetas[i].codigo, recetas[i].nombre);
               	posicion=-2;
               }  
         if(posicion==-1)
         	printf("\n\n\tNo hay recetas con %s.", producto);
      	break;
      case 5: 	//Buscar por tipo de menú
      	//anotar y validar tipo de menú
   		do{
         	clrscr();
            printf("\n\t**BUSCAR RECETAS**\n");
   			printf("\n\t1. Para cualquier persona\n\t2. Vegetarianos");
            printf("\n\t3. Diabeticos\n\t4. Hipertensos\n\t5. Bajo en calorias");
      		printf("\n\n\tAnote numero de posicion: ");
      		valido=scanf("%d",&k);
      		fflush(stdin);
   		}while(valido!=1 || k<1 || k>5);
         clrscr();
			strcpy(nombre, tipo_menu[k-1]);
         printf("\n\n\tRecetas del tipo \"%s\":\n", nombre);
         //Visualizar recetas de ese tipo.
         for(i=0, posicion=-1; i<size_r; i++)
           	for(k=0; k<TM; k++)
         		if(0==strcmp(nombre, recetas[i].tipo_menu[k])){
            		printf("\n\t%d\t%s", recetas[i].codigo, recetas[i].nombre);
               	posicion=-2;
            	}
         if(posicion==-1)
         	printf("\n\n\tNo hay recetas de ese tipo de menu");
      	break;
   }
   printf("\n\n\tPulse una tecla para continuar...");
   getch();
   return(posicion);
}

/*******************************************************************************
INTERFAZ DE BUSCAR_PRODUCTO
PROCESO: Busca y visualiza aquellos productos que cumplen el criterio elegido.
ENTRADAS: Entero de Opcion (1- Buscar por código, 2- Buscar por nombre,
									 3- Buscar por categoria, 4- Buscar por temporada)
SALIDAS: -1 si no la encuentra o la posicion en el array de elemento encontrado.
PRECONDICIONES: El array de productos contiene datos válidos.
POSCONDICIONES: Se devuelve un valor entero mayor o igual que -1.
*******************************************************************************/
int buscar_producto(Tproducto * productos, const int size_p, const int opcion)
{
   int posicion=-1, codigo, valido, ind, i, k;
   char nombre[NOMBRE];

	system("cls");//clearscreen();
   printf("\n\t**BUSCAR PRODUCTO**\n");
   switch(opcion){
   	case 1:	//Buscar por código
         do{
         	clrscr();
            printf("\n\t**BUSCAR PRODUCTO**\n");
         	printf("\nAnote codigo: ");
            valido=scanf("%d", &codigo);
            fflush(stdin);
         }while(valido!=1 || codigo<0);
         for(i=0; i<size_p && posicion==-1; i++)
         	if(codigo==productos[i].codigo){
            	posicion=i;
               escribir_producto(productos[posicion]);
            }
         if(posicion==-1)
         	printf("\n\n\tCodigo no encontrado.");
      	break;
      case 2:	//Buscar por nombre
         printf("\n\tAnote nombre del producto: ");
         strupr(gets(nombre));
         fflush(stdin);
         for(i=0; i<size_p && posicion==-1; i++)
         	if(0==strcmp(nombre, productos[i].nombre)){
            	posicion=i;
               escribir_producto(productos[posicion]);
            }
         if(posicion==-1)
         	printf("\n\n\t%s no existe. ", nombre);
      	break;
      case 3:	//Buscar por categoria
         do{
         	clrscr();
            printf("\n\t**BUSCAR PRODUCTO**\n");
         	print_categorias();
   			valido=scanf("%d",&ind);
      		fflush(stdin);
   		}while(valido!=1 || ind<0 || ind>13);
         clrscr();
         printf("\n\tCATEGORIA %s:\n",categoria[ind]);
         for(i=0; i<size_p; i++)
         	if(0==strcmp(categoria[ind], productos[i].categoria)){
            	printf("\n\t%d\t%s", productos[i].codigo, productos[i].nombre);
               posicion=-2;
            }
         if(posicion==-1)
         	printf("\n\n\tNo hay ingredientes del grupo: %s.", categoria[ind]);
      	break;
      case 4:	//Buscar por temporada
         do{
         	clrscr();
            printf("\n\t**BUSCAR PRODUCTO**\n");
         	print_temporadas();
   			valido=scanf("%d",&ind);
      		fflush(stdin);
   		}while(valido!=1 || ind<1 || ind>13);
         clrscr();
         printf("\n\tINGREDIENTES DE TEMPORADA EN %s:\n", temporada[ind-1]);
         for(i=0; i<size_p; i++)
         	for(k=0; k<12; k++)
         		if(0==strcmp(temporada[ind-1], productos[i].temporada[k])){
                  printf("\n\t%d\t%s",productos[i].codigo, productos[i].nombre);
               	posicion=-2;
               }
         if(posicion==-1)
         	printf("\n\n\tNo hay ingredientes de temporada en %s.", temporada[ind-1]);
      	break;
   }
   printf("\n\n\tPulse una tecla para continuar...");
   getch();
   return(posicion);
}

/*******************************************************************************
INTERFAZ DE BUSCAR_MENU
PROCESO: Busca y visualiza aquellos menús encontrados.
ENTRADAS: 	Puntero al array que recoge los nombres de los ficheros de menús
				almacenados y entero con su número de elementos.
*******************************************************************************/
void buscar_menu(cadena *nombres, const int size_n)
{
	int valido, opcion, i;
   cadena nombre, aux=".\\menus_generados\\";
   FILE * Pmenu;
   int size_menu;
   Tmenu *menu;

   //Presentar menú de opciones.
	system("cls");//clearscreen();
   do{
   	clrscr();
   	printf("\n\t*BUSCAR MENU*");
   	printf("\n\n\t1. Mostrar todos");
   	printf("\n\n\t2. Buscar por nombre");
   	printf("\n\n\t\tAnote opcion: ");
      valido=scanf("%d",&opcion);
      fflush(stdin);
   }while(valido!=1 || opcion<1 || opcion>2);

 	if(opcion==1){//mostrar todos los menus almacenados.
   	clrscr();
   	printf("\n\tMENUS ALMACENADOS:\n");
   	for(i=0; i<size_n; i++)
   		printf("\n\t%s",nombres[i]);
	}
   do{//recoger nombre del ménú que se desea visualizar.
   	printf("\n\n\tSi desea visualizar un menu, anote ahora su nombre");
      printf("\n\tsin incluir la extension(.txt), en otro caso anote \"s\": ");
      gets(nombre);
      fflush(stdin);
      if(toupper(nombre[0])!='S'){
   		strcat(nombre, ".txt");
   		for(i=0, valido=-1; i<size_n && valido==-1; i++)
     			if(0==strcmp(nombre, nombres[i]))
        			valido=i;
   		if(valido==-1)
     			printf("\n\tEl fichero %s no existe. ", nombre);
      }else
      	valido=-2;
   }while(valido==-1);

   if(valido!=-2){//existe el menú elegido.
   	//visualizar el menu elegido.
   	strcat(aux, nombre);
   	Pmenu=fopen(aux, "rb");
   	if(Pmenu==NULL){
   		printf("\nERROR: Apertura  de archivo de menu elegido incorrecta.");
      	printf("\n\nPulse una tecla para salir...");
      	getch();
   	}else{
      	//contar registros, reservar memoria para el array, y volcar datos.
   		size_menu=(filelength(fileno(Pmenu)) / sizeof(Tmenu));
   		menu=(Tmenu *) malloc ((size_menu) * sizeof(Tmenu));
   		fread(menu, sizeof(Tmenu), size_menu, Pmenu);
   		fclose(Pmenu);
         //presentar menu seleccionado.
   		system("cls");//clearscreen();
   		printf("\n\t**MENU SELECCIONADO**");
   		for(i=0; i<size_menu; i++){
   			if(size_menu==7)
      			printf("\n%s\n",dias[i]);
      		else
        			printf("\nDIA %d:\n", i+1);
            printf("\t\t%d\t%s",menu[i].primer_plato.codigo, menu[i].primer_plato.nombre);
         	printf("\n\t\t%d\t%s",menu[i].segundo_plato.codigo, menu[i].segundo_plato.nombre);
         	printf("\n\t\t%d\t%s",menu[i].postre.codigo, menu[i].postre.nombre);
         	if((i+1)%7==0 && i!=0 && size_menu>7){
         		printf("\n\n\tMostrar siguientes...");
      			getch();
            }
         }
         printf("\n\n\tPulse una tecla para continuar...");
   		getch();
      }
	}
}

/*******************************************************************************
INTERFAZ DE LEER_RECETA
PROCESO: Captura del teclado los datos de una estructura de tipo Treceta.
ENTRADAS: 	Punteros a arrays de recetas y productos, entero correspondiente
				al tamaño del array de recetas.
SALIDAS: Estructura de tipo Treceta.
E/S: Entero por referencia correspondiente al tamaño del array de productos.
POSCONDICIONES: La estructura devuelta contiene datos correctos.
*******************************************************************************/
Treceta leer_receta(Treceta *recetas, const int size_r, Tproducto *productos, int &size_p)
{
   int i, j, k, valido, repetir, ind, cod;
   Treceta receta;

   randomize();
   system("cls");//clearscreen();
   printf("\n\tNUEVA RECETA\n\n");
   //generar codigo de receta
	cod=(random(2000)+1000);
   //si hay recetas validar codigo
   if(size_r > 0)
     	do{
     		for(i=0,ind=0; i<size_r; i++)
        		if(recetas[i].codigo==cod)
           		ind=1;
        	if(ind==1)
        		cod=(random(2000)+1000);
      }while(ind==1);

   receta.codigo=cod;

   //si hay recetas validar nombre de receta
   printf("\n\tNombre de la receta: ");
   strupr(gets(receta.nombre));
   fflush(stdin);
   if(size_r > 0)
   	do{
      	for(i=0, ind=0; i<size_r && ind==0; i++)
      		if(0==strcmp(receta.nombre,recetas[i].nombre)){
           		printf("\tEl nombre de receta ya existe\n");
            	ind=1;
               printf("\n\tNombre de la receta: ");
   				strupr(gets(receta.nombre));
         	}
   	}while(ind==1);

   //anotar y validar tipo de plato
   do{
   	clrscr();
   	printf("\n\tNUEVA RECETA\n\n");
   	printf("\n\t1. Primero  2. Segundo 3. Postre");
      printf("\n\n\tAnote su numero: ");
      valido=scanf("%d",&k);
      fflush(stdin);
   }while(valido!=1 || k<1 || k>3);
	if(k==1)
   	strcpy(receta.posicion,"PRIMERO");
   else
   	if(k==2)
       	strcpy(receta.posicion,"SEGUNDO");
      else
   		strcpy(receta.posicion,"POSTRE");

   //Capturar y validar ingredientes
   	//inicializar array de productos dentro de la receta
   for(i=0; i<FPC; i++)
   	strcpy(receta.datos_producto[i].producto,"NINGUNO");
   for(i = 0, ind=0, repetir = 'S'; i < FPC && repetir == 'S'; i++, ind=0){
   	clrscr();
  		printf("\n\tNUEVA RECETA\n\n");
      do{
   		//capturar producto
         if(ind==2){
         	printf("\n\n\t\tAnote de nuevo el ingrediente %d: ",i+1);
      		strupr(gets(receta.datos_producto[i].producto));
            fflush(stdin);
         }
         else{
   			printf("\n\t\tIngrediente %d: ",i+1);
         	strupr(gets(receta.datos_producto[i].producto));
            fflush(stdin);
            if(size_p==0)
            	ind=1;
         }
      	//validar producto
      	if(size_p > 0){
      		do{
      			for(k=0,ind=0; k<size_p && ind==0; k++)
         			if(0==strcmp(productos[k].nombre,receta.datos_producto[i].producto))
            			ind=1;
         		if(ind==0){
          			printf("\n\n\tEl producto no existe...");
                  do{
      					printf("\n\tAnotar nuevo producto? S/N: ");
                     repetir=toupper(getch());
         				fflush(stdin);
      				}while(repetir != 'N' && repetir != 'S');
               	if(repetir=='S'){
               		new_producto(productos, size_p);
                  	ind=2;
               	}
            	}
               else
               	ind=3;
         	}while(ind==1);
      	}
   	}while(ind==0 || ind==2);

   	//capturar y validar magnitud
      do{
      	clrscr();
      	printf("\n\tMagnitud\n");
      	printf("\n\t1.KILO\n\t2.LITRO\n\t3.UNIDAD\n\t4.GRAMOS\n\t5.MILILITROS\n\t6.VASO\n\t7.CUCHARA DE CAFE\n\t8.CUCHARA SOPERA");
         printf("\n\n\tSu numero: ");
         valido=scanf("%d",&ind);
         fflush(stdin);
      }while(valido != 1 || ind<1 && ind>8);
      //asignar la magnitud correspondiente
      strcpy(receta.datos_producto[i].magnitud,magnitud[ind-1]);
   	//capturar cantidad de producto
      do{
      	printf("\n\t\tCantidad de %s en %s: ",receta.datos_producto[i].producto,receta.datos_producto[i].magnitud);
      	valido = scanf("%f",&receta.datos_producto[i].cantidad);
      	fflush(stdin);
         if(valido != 1 || receta.datos_producto[i].cantidad <= 0)
         	printf("\n\t\tAnote cantidad correctamente...");
      }while(valido != 1 || receta.datos_producto[i].cantidad <= 0);
      do{
      	printf("\n\tOtro ingrediente? S/N:");
         repetir=toupper(getch());
         fflush(stdin);
      }while(repetir != 'N' && repetir != 'S');
   }
   receta.datos_producto[i].cantidad=-1; //marcar de final para escribir_receta

   //capturar procedimiento
   clrscr();
   printf("\n\tNUEVA RECETA\n\n");
   printf("\n\tProcedimiento (1500 caracteres, Enter para terminar): ");
   //gets(receta.procedimiento);
   //fflush(stdin);
   LeerCad (receta.procedimiento);

   //capturar y validar tipo de menú
   for(i=0; i<TM; i++)
   	for(j=0; j<LTM; j++)
   		receta.tipo_menu[i][j]='\0'; 	//inicializa tipo_menu a nulo
	//copia el tipo_menu "normal" por defecto
   strcpy(receta.tipo_menu[0], tipo_menu[0]);
   for(i=1, valido='S'; i<TM && valido=='S'; i++){ 
      do{
      	clrscr();
  			printf("\n\tNUEVA RECETA\n\n");
      	printf("\tSi la receta se adapta a un tipo de menu especial anote");
      	printf("\n\tel numero correspondiente. En otro caso anote 0.");
   		printf("\n\n\tTipo de receta\n\n\t1. Vegetarianos");
      	printf("\n\t2. Diabeticos\n\t3. Hipertensos\n\t4. Bajo en calorias");
      	printf("\n\n\tAnote numero de tipo: ");
         valido=scanf("%d",&ind);
         fflush(stdin);
      	if(valido != 1 || ind<0 || ind>4)
      		printf("\tAnote un valor correcto: ");
      }while(valido != 1 || ind<0 || ind>4);
      if(ind!=0){
			strcpy(receta.tipo_menu[i], tipo_menu[ind]);
      	do{
      		printf("\n\tAnotar otro tipo compatible? S/N: ");
      		valido=toupper(getch());
         	fflush(stdin);
      	}while(valido!='S' && valido!='N');
      }else
      	valido='N';
   }
   fflush(stdin);
	return(receta);
}

/*******************************************************************************
INTERFAZ DE ESCRIBIR_RECETA
PROCESO: Visualiza en pantalla el contenido de una estructura de tipo Treceta
ENTRADAS: Tipo Treceta por valor.
PRECONDICIONES: La estructura está cargada con datos válidos.
*******************************************************************************/
void escribir_receta(Treceta rec)
{
	int i;

   printf("\n\t************************************************************");
	printf("\n\t%d\t%s", rec.codigo, rec.nombre);
   printf("\n\t%s",rec.posicion);
   printf("\n\tINGREDIENTES:\n");
   for(i=0; rec.datos_producto[i].cantidad!=-1; i++)
    	printf("\t\t%s,%g %s\n", rec.datos_producto[i].producto, rec.datos_producto[i].cantidad, rec.datos_producto[i].magnitud);
   printf("\tPROCESO:\n\t");

   //imprime el procedimiento con formato de párrafo justificado a la izquierda
   for(i=0; i<PRO && rec.procedimiento[i]!='\r' && rec.procedimiento[i]!='\0'; i++){
   	if(rec.procedimiento[i]!='\0'){
   		printf("%c", rec.procedimiento[i]);
      if(i%60==0 && i!=0 && rec.procedimiento[i+1]==' ')
      	printf("\n       ");
      else
      	if(i%60==0 && i!=0 && rec.procedimiento[i+1]!=' '){//escribir la siguiente palabra completa
            for(i++ ; rec.procedimiento[i]!=' ' && rec.procedimiento[i]!='\r' && rec.procedimiento[i]!='\0' && i<PRO; i++)
             	printf("%c", rec.procedimiento[i]);
            printf("\n\t");
         }
      }
   }
   if(rec.tipo_menu[1][1]!='\0'){//si hay tipos anotados, aparte de tipo Normal
   	printf("\n\n\tReceta apta para menu:\n");
   	for(i=1; i<TM && rec.tipo_menu[i][1]!='\0'; i++){
   		printf("\t");
   		puts(rec.tipo_menu[i]);
   	}
	}else
   	printf("\n\n\tReceta apta para cualquier menu.");
   printf("\n\t************************************************************\n");
}

/*******************************************************************************
INTERFAZ DE LEER_PRODUCTO
PROCESO: Captura del teclado los datos de una estructura de tipo Tproducto.
ENTRADAS: Puntero al array de productos y entero correspondiente a su tamaño.
SALIDAS: Estructura de tipo Tproducto.
*******************************************************************************/
Tproducto leer_producto(Tproducto * productos, const int size_p)
{
	int valido, repetir, i, cod, ind;
   Tproducto producto;

   randomize();
 	system("cls");//clearscreen();
   //generar y validar código
   printf("\n\tNUEV0 PRODUCTO\n\n");
   cod=(random(10000)+10000);
   //si hay productos validar codigo
   if(size_p > 0){
     	do{
     		for(i=0,ind=0; i<size_p; i++)
        		if(productos[i].codigo==cod)
           		ind=1;
        	if(ind==1)
        		cod=(random(10000)+10000);
      }while(ind==1);
   }
   producto.codigo=cod;

   //capturar y validar nombre de producto
   printf("\n\tNombre del producto: ");
   strupr(gets(producto.nombre));
   if(size_p > 0){
   	do{
      	for(i=0, ind=0; i<size_p && ind==0; i++)
      		if(0==strcmp(producto.nombre,productos[i].nombre)){
           		printf("\tEl nombre del producto ya existe\n");
            	ind=1;
               printf("\n\tNombre del producto: ");
   				strupr(gets(producto.nombre));
         	}
   	}while(ind==1);
   }

   //capturar categoría del producto
   do{
   	clrscr();
   	printf("\n\tNUEV0 PRODUCTO\n\n");
   	print_categorias();
      valido=scanf("%d",&ind);
      fflush(stdin);
   }while(valido!=1 || ind<0 || ind>13);
   strcpy(producto.categoria,categoria[ind]);

   //capturar temporada de producto
   do{
   	clrscr();
   	printf("\n\tNUEV0 PRODUCTO\n\n");
   	printf("\n\tEl producto esta siempre de temporada? (S/N): ");
      repetir=toupper(getch());
      fflush(stdin);
   }while(repetir!='S' && repetir!='N');
   i=0;
   if(repetir=='N'){
   	do{
   		do{
         	clrscr();
            printf("\n\tEl producto esta siempre de temporada? (S/N):\n");
      		print_temporadas();
   			valido=scanf("%d",&ind);
      		fflush(stdin);
   		}while(valido!=1 || ind<1 || ind>13);
      	strcpy(producto.temporada[i],temporada[ind-1]);
      	i++;
      	if(i<12 && ind!=13)
            do{
   				printf("\n\n\tAnotar otro mes? (S/N): ");
            	repetir=toupper(getch());
      			fflush(stdin);
            }while(repetir!='S' && repetir!='N');
      	else
      		repetir='N';
   	}while(repetir=='S');
      producto.temporada[i][0]='\0';//Marca de fin de anotaciones
   }
   else{
   	strcpy(producto.temporada[i],temporada[12]);
      i++;
   	producto.temporada[i][0]='\0';//Marca de fin de anotaciones
   }

   //capturar precio y magnitud
   do{
   	clrscr();
   	printf("\n\tNUEV0 PRODUCTO\n\n");
    	printf("\tUnidad de medida:");
      printf("\n\n\t1.Kilo\n\t2.Litro\n\t3.Unidad");
      printf("\n\n\t\tSu numero: ");
      valido=scanf("%d",&ind);
      fflush(stdin);
   }while(valido!=1 || ind<1 || ind>3);
   strcpy(producto.precio.magnitud,magnitud[ind-1]);
 	do{
   	clrscr();
   	printf("\n\tNUEV0 PRODUCTO\n\n");
   	printf("\n\n\tEuros por unidad de medida: ");
      valido=scanf("%f",&producto.precio.precio);
      fflush(stdin);
   }while(valido!=1 || producto.precio.precio<0);

   return(producto);
}

/*******************************************************************************
INTERFAZ DE ESCRIBIR_PRODUCTO
PROCESO: Visualiza en pantalla el contenido de una estructura de tipo Tproducto
ENTRADAS: Tipo Tproducto por valor.
PRECONDICIONES: La estructura está cargada con datos válidos.
*******************************************************************************/
void escribir_producto(Tproducto producto)
{
	int i;

   printf("\n\t********************");
	printf("\n\t%d\t%s", producto.codigo, producto.nombre);
   printf("\n\tGRUPO: %s",producto.categoria);
	if(0!=strcmp(producto.temporada[0],temporada[12])){
   	printf("\n\tTEMPORADA:\n");
      for(i=0; producto.temporada[i][0]!='\0'; i++)
    		printf("\t\t%s\n", producto.temporada[i]);
   }else
   	printf("\n");
   printf("\t%g euro/s por %s",producto.precio.precio, producto.precio.magnitud);
   printf("\n\t********************");
}

/*******************************************************************************
INTERFAZ DE CLEARSCREEN
PROCESO: Limpia toda la pantalla
*******************************************************************************/
void clearscreen (void)
{
	int i;
	clrscr();
   for(i=0; i<100; i++)
	printf("                                                                      \n");
   clrscr();
}

/*******************************************************************************
INTERFAZ COMP1
PROCESO:	Compara dos elementos de un array de estructuras Treceta por el campo
			código.
ENTRADAS:Punteros genéricos enviados por la funcion de libreria Qsort.
SALIDAS: -1 si el primer elemento es menor que el segundo.
			0 si el primer elemento es igual al segundo.
         1 si el primer elemento es mayor que el segundo.
POSCONDICIONES: El valor devuelto es 0, -1 o 1.
*******************************************************************************/
int comp1 (const void * a, const void * b)
{
	int r=0;

   if((*(Treceta *)a).codigo < (*(Treceta *)b).codigo) r=-1;
   if((*(Treceta *)a).codigo > (*(Treceta *)b).codigo) r=1;

   return(r);
}

/*******************************************************************************
INTERFAZ COMP2
PROCESO:	Compara dos elementos de un array de estructuras Tproducto por el campo
			código.
ENTRADAS:Punteros genéricos enviados por la funcion de libreria Qsort.
SALIDAS: -1 si el primer elemento es menor que el segundo.
			0 si el primer elemento es igual al segundo.
         1 si el primer elemento es mayor que el segundo.
POSCONDICIONES: El valor devuelto es 0, -1 o 1.
*******************************************************************************/
int comp2 (const void * a, const void * b)
{
	int r=0;

   if((*(Tproducto *)a).codigo < (*(Tproducto *)b).codigo) r=-1;
   if((*(Tproducto *)a).codigo > (*(Tproducto *)b).codigo) r=1;

   return(r);
}

/*******************************************************************************
INTERFAZ LEER_TSELECT
PROCESO:	Lee una estructura de tipo Tselect.
ENTRADAS: Puntero al array de productos y entero con su tamaño.
E/S: Una estructura de tipo Tselect por referencia.
*******************************************************************************/
void leer_tselect(Tselect &select, Tproducto *productos, const int size_p){
   int valido, opcion, i, j, k, otro, posicion;
   char ingrediente[NOMBRE];

   clrscr();
   //Capturar criterio de tipo de menu
   do{
  		printf("\n\tTipo de menu:\n\n\t1. Normal\n\t2. Vegetarianos");
      printf("\n\t3. Diabeticos\n\t4. Hipertensos\n\t5. Bajo en calorias");
      printf("\n\n\tAnote numero de tipo: ");
      valido=scanf("%d",&opcion);
      fflush(stdin);
      strcpy(select.tipo_menu, tipo_menu[opcion-1]);
   }while(valido!=1 || opcion<1 || opcion>5);

   //Capturar criterio de productos a evitar
   do{
   	clrscr();
   	printf("\n\tDesea evitar algunos ingredientes? (S/N): ");
      opcion=toupper(getch());
      fflush(stdin);
   }while(opcion!='S' && opcion!='N');
   if(opcion=='S')
   	for(k=0, otro='S'; k<10 && otro=='S'; ){
    		printf("\n\n\tAnote producto a evitar: ");
         strupr(gets(ingrediente));
         fflush(stdin);
         //buscar por nombre
         for(j=0, posicion=-1; j<size_p && posicion==-1; j++)
         	if(0==strcmp(ingrediente, productos[j].nombre))
            	posicion=j;
         if(posicion==-1)
         	printf("\n\tEl ingrediente no existe");
         else{
          	printf("\n\tIngrediente escogido: %s", productos[posicion].nombre);
            strcpy(select.evitar[k],productos[posicion].nombre);
            k++;
         }
         do{
         	printf("\n\n\tAnotar otro ingrediente? (S/N): ");
            fflush(stdin);
            otro=toupper(getch());
         }while(otro!='S' && otro!='N');
      }
   else//opcion=='N'
   	for(i=0; i<10; i++)
      	for(j=0; j<CPC; j++)
      		select.evitar[i][j]='\0';

   //Capturar criterio de productos de temporada
   do{
   	clrscr();
   	printf("\n\tDesea dar prioridad a las recetas que contienen\n\t");
      printf("productos de temporada?. Si elije \"Si\" le pedire que");
      printf("\n\tanote el mes en que se encuentra actualmente (S/N): ");
      opcion=toupper(getch());
      fflush(stdin);
   }while(opcion!='S' && opcion!='N');
   if(opcion=='N')
   	strcpy(select.temporada, "SIEMPRE");
   else{//opcion=='S'
   	do{
      	clrscr();
      	print_temporadas();
   		valido=scanf("%d",&opcion);
      	fflush(stdin);
   	}while(valido!=1 || opcion<1 || opcion>13);
      strcpy(select.temporada,temporada[opcion-1]);
   }

   //Capturar criterio de duración semanal o mensual
   do{
   	clrscr();
   	printf("\n\tDURACION\n\n\t1. Semanal\n\n\t2. Mensual");
   	printf("\n\n\tAnote numero correspondiente a la duracion: ");
   	valido=scanf("%d", &select.duracion);
      fflush(stdin);
   }while(valido!=1 || select.duracion<1 || select.duracion>2);
}

//CREAR_LISTA
//PROPÓSITO: Inicializar la lista a estado vacío.
//ENTRADA: El puntero a la lista.
//POSTCONDICIONES: La lista está creada y vacía(Plista apunta a NULL).
void crear_lista(Tnodo * (&Plista)){
	Plista=NULL;	//Inicializa la lista a vacío.
}

//LISTA_VACIA
//PROPÓSITO: Determinar si una lista está vacía o no. Una lista está vacía si su
//				 puntero apunta a NULL.
//ENTRADA: El puntero a la lista.
//PRECONDICIONES: La lista debe estar creada.
//SALIDA: Un entero (0 si está vacía, -1 si no está vacía).
//POSTCONDICIONES: Asociado al nombre de la funcion se devuelve 0 o -1.
int lista_vacia(Tnodo * Plista){
 	int i=-1;

   if(Plista == NULL)	//lista vacía
   	i=0;
   return(i);
}

//INSERTAR_ELEMENTO
//PROPÓSITO: Añadir un nuevo elemento a la lista, colocándolo en su sitio.
//ENTRADA: El nuevo elemento a añadir, el puntero a la lista.
//PRECONDICIONES: La lista no debe estar llena (estática) o garantizar que hay
//						memoria suficiente (dinámica).
//POSTCONDICIONES: La lista queda con el nuevo elemento.
void insertar_elemento(Tnodo * (&Plista), Treceta nuevo_elemento){
	Tnodo * nuevo_nodo, * Paux=Plista;
   char lugar_encontrado = 'N';
   //obtener memoria para el nuevo nodo
   nuevo_nodo = (Tnodo *) malloc(sizeof(Tnodo));
   if(nuevo_nodo == NULL){
   	printf("\nERROR-Asignacion de memoria incorrecta");
      printf("\n\nPulse una tecla para continuar");
      getch();
   }
   else{
		//almacenar nuevo_elemento en nuevo_nodo
      nuevo_nodo->info = nuevo_elemento;
      nuevo_nodo->sig = NULL;
      //insertar nuevo_nodo en la lista si está vacía
      if(0==lista_vacia(Plista)){
      	Plista = nuevo_nodo;
         nuevo_nodo->sig = NULL;
      }
      else{ //insertar en una lista no vacia
      	//comprobar caso especial de insertar en primer nodo
         if(nuevo_elemento.codigo < Plista->info.codigo){
         	nuevo_nodo->sig = Plista;
            Plista = nuevo_nodo;
         }
         else{//insertar en el medio o final, según caso general
         	//buscar el lugar del nuevo nodo
            while((Paux->sig)!=NULL && lugar_encontrado=='N'){
            	//comparar nuevo_elemento con el siguiente
               if(nuevo_elemento.codigo >= Paux->sig->info.codigo)
               	//avanza Paux para seguir buscando
                  Paux = Paux->sig;
               else
               	//nuevo_nodo debe insertarse a continuación del nodo_actual
                  lugar_encontrado = 'S';
            }//fin de while
            //conectar los enlaces para el caso general
            nuevo_nodo->sig = Paux->sig;
            Paux->sig = nuevo_nodo;
         }//fin de insertar en el medio o final
      }//fin de else nuevo_elemento
   }//fin de else
}

//ELIMINAR_ELEMENTO
//PROPÓSITO: Suprimir el elemento especificado de la lista.
//ENTRADA: El puntero a la lista y el elemento a suprimir.
//PRECONDICIONES: La lista no debe estar vacía. El elemento a suprimir está en
//						la lista y no se repite.
//SALIDA: Un entero con valor 0 si no ha
//			 encontrado el elemento a eliminar o -1 si lo ha encontrado.
//POSTCONDICIONES: La lista queda con un elemento menos.
int eliminar_elemento(Tnodo * (&Plista), int elemento_a_suprimir){
	int enc;
   Tnodo *actual=Plista, *anterior=NULL, *buscado;

   //Comprobar que el elemento a eliminar existe
   buscado=buscar_elemento(Plista, elemento_a_suprimir);
   if(buscado==NULL){
   	printf("\nERROR: Elemento a eliminar no encontrado");
      printf("\nPulse una tecla para continuar...");
      enc=-1;
      getch();
   }
   else{
   	//buscar el nodo que contiene el valor elemento_a_suprimir
   	while((actual->info.codigo)!= elemento_a_suprimir){
   		anterior=actual;
      	actual=actual->sig;
   	}
   	//comprobar si es primer nodo (anterior sigue siendo NULL)
   	if(anterior==NULL){ //caso especial
   		Plista = Plista->sig;
      	enc=0;
   	}
   	else{
   		anterior->sig = actual->sig;
      	enc=0;
   	}
   	free(actual);
   }
	return(enc);
}

//BUSCAR_ELEMENTO
//PROPÓSITO: Buscar un elemento en una lista enlazada, ordenada, de enteros.
//ENTRADA: Puntero a primer elemento de la lista y entero con valor a buscar.
//PRECONDICIONES: La lista no debe estar vacía.
//SALIDA: Puntero que apunta al nodo encontrado o NULL si no lo encuentra.
//POSTCONDICIONES: No hay
Tnodo * buscar_elemento(Tnodo * Plista, int buscado){
 	Tnodo *enc=NULL, *Paux=Plista;

   if(0==lista_vacia(Plista)){
   	printf("\nERROR-Lista vacia.");
      printf("\nPulse una tecla para continuar");
      getch();
   }
   else{
   	while(Paux != NULL && enc==NULL){
   		if(Paux->info.codigo == buscado)
         	enc=Paux;
      	else
      		Paux=Paux->sig;
      }
   }
   return(enc);
}

//LEER_CAD
//PROPÓSITO: Leer del teclado una cadena de caracteres.
//ENTRADA: Puntero a primer elemento de un array de caracteres.
//POSTCONDICIONES: 	El puntero apunto a una cadena de caracteres recogida que
//							termina con el carácter nulo.
void LeerCad (char *frase)
{
	int i;
   int car;

   //limpiar cadena
   for (i = 0; i < PRO; i++)
   {
     	frase [i] = '\0';
   }

   car = getch ();
   putch (car);

	for (i = 0; car != '\r' && i < PRO; i++)
   {
   	if (car !='\r')
      	frase [i] = car;

      car = getch ();
   	putch (car);
   }
   frase [i] = '\r';
   frase [i+1] = '\0';
}


