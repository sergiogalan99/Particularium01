import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/app/core/model/demand';
import { DemandOfferService } from 'src/app/servicios/demandOffer/demand-offer.service';

@Component({
  selector: 'app-mostrar-demandas',
  templateUrl: './mostrar-demandas.page.html',
  styleUrls: ['./mostrar-demandas.page.scss'],
})
export class MostrarDemandasPage implements OnInit {

  private demandas: Demand[] = [];

  constructor(private demandaServ: DemandOfferService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.ObtenerDemandas();
  }

  async ObtenerDemandas() {
    await this.demandaServ.ObtenerDemandasPropias();
    this.demandas = this.demandaServ.demandasPropias;
    console.log(this.demandas);
  }

  mostrarDemandas(){
    console.log('Hola');
    //this.demandaServ.getOfertasEncontradas(demanda);
  }

}
