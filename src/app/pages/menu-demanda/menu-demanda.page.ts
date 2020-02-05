import { DemandOfferService } from './../../servicios/demandOffer/demand-offer.service';
import { Demand } from 'src/app/core/model/demand';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-demanda',
  templateUrl: './menu-demanda.page.html',
  styleUrls: ['./menu-demanda.page.scss'],
})
export class MenuDemandaPage implements OnInit {

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

}
