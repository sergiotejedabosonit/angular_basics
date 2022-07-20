import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = ''
  borrados: string[] = []

  borrarHeroe(){
    
    this.heroeBorrado = this.heroes.shift() || '';
    
    this.borrados.push(this.heroeBorrado)

   }

   trueOrFalse(): boolean {
    if(this.heroeBorrado === ''){
      return false;
    } else {
      return true
    }
   }
}
