import { Component } from '@angular/core';
import { BateriaService } from '../bateria.service';
import { Bateria } from 'src/models/bateria';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  listaDeBaterias: Bateria[];


  constructor(){
    this.listaDeBaterias = [];

  }


  ngOnInit(): void {
    
  

/*
    this.bateriaService.obtenerTodosLosProductos().subscribe( doc => {
      doc.forEach( (element: any) => {
        this.listaDeBaterias.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
    });

*/


  }

  async enviar(){
    const bateria1 = new Bateria();
    bateria1.id = "BateriaUnica:";
    bateria1.marca = "Moura";
    bateria1.nombre = "M22GDD";
    bateria1.amperaje = 60;
    bateria1.voltios = 12;
    bateria1.largo = 300;
    bateria1.ancho = 200;
    bateria1.peso = 4;
    bateria1.precio_mayorista = 25000;

    console.log("\n enviando bateria => bateria1: ",  bateria1, "\n\n");
//    const response = await this.bateriaService.agregarBateria(bateria1);

  }



}
