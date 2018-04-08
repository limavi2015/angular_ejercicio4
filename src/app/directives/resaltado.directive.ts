import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/*
  ElementRef - para tomar la referencia a la que se le puso la directiva ej:  <p [appResaltado]="'orange'">Parrafo 5 </p>
  HostListener - para escuachar cuando pasen cosas ej:mouseenter o mouseleave
  Input - para tomar parametros de entrada a la directiva, ej: ="'orange'"
*/


@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log("directiva llamada")
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.el.nativeElement.style.backgroundColor=this.nuevoColor;
  }
  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor=null;
  }

}
