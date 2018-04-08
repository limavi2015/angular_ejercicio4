# miscelanea

# 127 ngStyle directiva

	    <p [style.fontSize.px]="tamano">
      Hola mundo esta es una etiqueta
    </p>

# 128 ngClass directiva
	<h5 [ngClass]="{ 'text-danger': propiedades.danger, 'text-info': !propiedades.danger }">
  Parrafo 3 (toma el estilo de classes.component.ts)
</h5>

# 129 Directivas personalizadas
	ng g d directives/resaltado
	y según el nombre del selector se puede usar en el Html

# 130 ng-switch
 	ng g c components/ngSwitch -is
	Múltiples opciones de una condición.

# 132 Rutas hijas
	En el app.routes.ts
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children:[
        { path: 'nuevo', component: UsuarioNuevoComponent },
        { path: 'detalle', component: UsuarioDetalleComponent },
        { path: 'editar', component: UsuarioEditarComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

# 134 Obteniendo los parametros del padre
  constructor(private router:ActivatedRoute) {
    this.router.parent.params.subscribe(parametros=>{
        console.log("ruta HIJA")
        console.log(parametros)
    })

# 135 Ciclo de vida de un componente
	primero se ejecuta el constructor, luego el init
	https://angular.io/guide/lifecycle-hooks
  ng-OnChanges -> Cuando la data de nuestros componentes cambia
	ngOninit -> cuando el componente está inicializando o después de un ngOnchanges
	ngDoCheck -> Cada vez que se haga un cambio a una propiedad en la pantalla
	ngAfterContentInit -> Despues que insertamos algun tipo de contenido
  ngAfterContentCheck -> Despues de la revision de un contenido insertado
  ngAfterViewInit -> Despues de la inicializacion del componente o de los hijos
  ngAfterViewCheck -> Despues de la revision de cada uno de los componentes/hijos
  ngOnDestroy -> Justo antes que se destruya el componente o directiva
