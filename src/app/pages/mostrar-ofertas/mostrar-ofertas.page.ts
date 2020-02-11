import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/core/model/offer';
import { DemandOfferService } from 'src/app/servicios/demandOffer/demand-offer.service';

@Component({
  selector: 'app-mostrar-ofertas',
  templateUrl: './mostrar-ofertas.page.html',
  styleUrls: ['./mostrar-ofertas.page.scss'],
})
export class MostrarOfertasPage implements OnInit {

  private ofertas: Offer[] = [];

  constructor(private ofertaServ: DemandOfferService) {
    
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.ObtenerOfertas();
    console.log("hola")
  }

  async ObtenerOfertas() {
    await this.ofertaServ.ObtenerOfertasProfesor();
    this.ofertas=this.ofertaServ.ofertasPropias;
    console.log(this.ofertas)
  }

}
