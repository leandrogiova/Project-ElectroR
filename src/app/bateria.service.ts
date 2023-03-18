export class BateriaService { } 
/*


import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Bateria } from 'src/models/bateria';

@Injectable({
  providedIn: 'root'
})
export class BateriaService {

  constructor(private firestore: Firestore) { 
  }


  agregarBateria(bateria: Bateria) {
    const bateriasRef = collection(this.firestore, 'Baterias');

  
    console.log("bateriasRef", bateriasRef);
    
    return addDoc(bateriasRef, bateria); 
  }
}
*/





/*
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Bateria } from "src/models/bateria";




@Injectable()
export class BateriaService {


    constructor(private firestore: AngularFirestore){
    }
    


    
        * enviarProductoFirebase envia un producto a la base de datos Firebase
        * Toma como argumento un producto
        * No tiene ningun tipo de retorno. 
    
    enviarBateriaFirebase(bateria1: Bateria) {
        this.firestore.collection('productos').add(bateria1).then( () => {
            console.log("Producto enviado con exito!", bateria1);
        }).catch( error => {
            console.log("Error al intentar agregar producto.\n", error);
        });
    }

    
        * obetenerTodosLosProductos trae la lista de todos los productos de la base de datos Firebase
        * Trae todos los 'productos'
        * ref se utiliza para ordenar la lista por numero de Producto y ascendentemente
        * No toma argumentos
        * Retorna un Objeto Observable
          
    obtenerTodosLosProductos(): Observable<any> {
       return this.firestore.collection('productos', ref => ref.orderBy('numeroProducto', 'asc')).snapshotChanges();
    }
}
*/