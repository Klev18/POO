//DECLARACION DE LA CLASE
class DatosComunes{
    constructor(personaje, calidad, tipo, vida, daño, alcance, objetivos,velocidad, velocidadDeAtaque,dañoDeGeneracion,DañoPorSegundo){
        this.personaje=personaje
        this.calidad=calidad
        this.tipo=tipo
        this.vida=vida
        this.daño=daño
        this.alcance=alcance
        this.objetivos=objetivos
        this.velocidad=velocidad
        this.velocidadDeAtaque=velocidadDeAtaque
        this.dañoDeGeneracion=dañoDeGeneracion
        this.DañoPorSegundo=DañoPorSegundo
    }
    //INSTANCIA DE LA CLASE
    getPersonaje(){
        return `Personaje: ${this.personaje}`
    }
    getCalidad(){
        return `Su calidad es: ${this.calidad}`
    }
    getTipo(){
        return `Su tipo es: ${this.tipo}`
    }
    getVida(){
        return `Sus puntos de vida son: ${this.vida}`
    }
    getDaño(){
        return `Su daño es: ${this.daño}`
    }
    getAlcance(){
        return `Su alcance es de: ${this.alcance}`
    }
    getObjetivos(){
        return `Sus objetivos son: ${this.objetivos}`
    }
    getvelocidad(){
        return `Su velocidad es: ${this.velocidad}`
    }
    getvelocidadDeAtaque(){
        return `Su velocidad de ataque es: ${this.velocidadDeAtaque}`
    }
    getdañoDeGeneracion(){
        return `El daño de generacion es: ${this.dañoDeGeneracion}`
    }
    getDañoPorSegundo(){
        return DañoPorSegundo
    }
}

//DECLARACION DE LA CLASE Y EXTENSION DE LA CLASE EN COMUN
class Tropa_1 extends DatosComunes{
    constructor(personaje, calidad, tipo, vida, daño, alcance, objetivos,velocidad, velocidadDeAtaque,dañoDeGeneracion,DañoPorSalto,DañoPorSegundo,AlcanceDeSalto){
        //Herencia superior
        super(personaje, calidad, tipo, vida, daño, alcance, objetivos,velocidad, velocidadDeAtaque)
        //Polimorfismo
        this.dañoDeGeneracion=dañoDeGeneracion
        this.DañoPorSalto=DañoPorSalto
        this.DañoPorSegundo=DañoPorSegundo
        this.AlcanceDeSalto=AlcanceDeSalto
    }
    //INSTANCIA DE LA CLASE
    getdañoDeGeneracion(){
        return `El daño de generacion del Megacaballero es: ${this.dañoDeGeneracion}`
    }
    getDañoPorSegundo(){
        return `El daño por segundo del Megacaballero es: ${this.DañoPorSegundo}`
    }
    getDañoPorSalto(){
        return `Su daño por salto es: ${this.DañoPorSalto}`
    }
    getAlcanceDeSalto(){
        return `Su alcance de salto es: ${this.AlcanceDeSalto}`
    }
}
const MegaCaballero=new Tropa_1("Megacaballero","Legendaria","Tropa","3993","268 puntos","Cuerpo a cuerpo(medio)","Terrestres","Media","1.7 seg","429 puntos","537 puntos","157 puntos","3.5-5 metros")
console.log(MegaCaballero.getPersonaje(),'\n',MegaCaballero.getCalidad(),'\n',MegaCaballero.getTipo(),'\n',MegaCaballero.getVida(),'\n',MegaCaballero.getDaño(),'\n',MegaCaballero.getAlcance(),'\n',MegaCaballero.getObjetivos(),'\n',MegaCaballero.getvelocidad(),'\n',MegaCaballero.getvelocidadDeAtaque(),'\n',MegaCaballero.getdañoDeGeneracion(),'\n',MegaCaballero.getDañoPorSalto(),'\n',MegaCaballero.getDañoPorSegundo(),'\n',MegaCaballero.getAlcanceDeSalto())

//DECLARACION DE LA CLASE Y EXTENSION DE LA CLASE EN COMUN
class Tropa_2 extends DatosComunes{
    constructor(personaje, calidad, tipo, vida, daño, alcance, objetivos,velocidad, velocidadDeAtaque,dañoDeGeneracion,DañoPorSegundo,DuracionDeAturdimiento){
        //Herencia superior
        super(personaje, calidad, tipo, vida, daño, alcance, objetivos,velocidad, velocidadDeAtaque,dañoDeGeneracion)
        //Polimorfismo
        this.DañoPorSegundo=DañoPorSegundo
        this.DuracionDeAturdimiento=DuracionDeAturdimiento
    }
    //INSTANCIA DE LA CLASE
    getDañoPorSegundo(){
        return `El daño por segundo del Mago Eléctrico es: ${this.DañoPorSegundo}`
    }
    getDuracionDeAturdimiento(){
        return `Duración de aturdimiento: ${this.DuracionDeAturdimiento}`
    }
}
const MagoElectrico= new Tropa_2("Mago eléctrico","Legendaria","Tropa","713","110 puntos a dos tropas al mismo tiempo","5 metros","De tierra y aire","Alta","1.8 seg","192 puntos","50 puntos a dos tropas al mismo tiempo", "0,5 seg")
console.log(MagoElectrico.getPersonaje(),'\n',MagoElectrico.getCalidad(),'\n',MagoElectrico.getTipo(),'\n',MagoElectrico.getVida(),'\n',MagoElectrico.getDaño(),'\n',MagoElectrico.getAlcance(),'\n',MagoElectrico.getObjetivos(),'\n',MagoElectrico.getvelocidad(),'\n',MagoElectrico.getvelocidadDeAtaque(),'\n', MagoElectrico.getdañoDeGeneracion(),'\n',MagoElectrico.getDañoPorSegundo(),'\n',MagoElectrico.getDuracionDeAturdimiento())

//DECLARACION DE LA CLASE Y EXTENSION DE LA CLASE EN COMUN
class Estructura extends DatosComunes{
    constructor(personaje, calidad, tipo, vida, daño, alcance, objetivos, velocidadDeAtaque,DañoPorSegundo){
        //HERENCIA SUPERIOR
        super(personaje, calidad, tipo, vida, daño, alcance, objetivos,"",velocidadDeAtaque)
        //Polimorfismo
        this.DañoPorSegundo=DañoPorSegundo
    }
    //INSTANCIA DE LA CLASE
    getDañoPorSegundo(){
        return`El daño por segundo de la Torre tesla es: ${this.DañoPorSegundo}`
    }
}
const TorreTesla= new Estructura("Torre Tesla","Común","Estructura","1152","230 puntos","5.5 metros","De tierra y aire","1.2 seg","191 puntos")
console.log(TorreTesla.getPersonaje(),'\n',TorreTesla.getCalidad(),'\n',TorreTesla.getTipo(),'\n',TorreTesla.getVida(),'\n',TorreTesla.getDaño(),'\n',TorreTesla.getAlcance(),'\n',TorreTesla.getObjetivos(),'\n',TorreTesla.getvelocidadDeAtaque(),'\n',TorreTesla.getDañoPorSegundo())