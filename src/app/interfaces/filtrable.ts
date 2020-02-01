import { Demand } from './../core/model/demand';
import { Offer } from './../core/model/offer';

export interface Filtrable {

    filtrar(todasOfertas:Offer[], demandaBuscada:Demand):Offer[];

    //FALTA servicio que la implemente y filtre con la demanda que entra, entre todas las ofertas
    // devuelva una lista de ofertas con las coincidencias, como en el buscador de hoteles...
}