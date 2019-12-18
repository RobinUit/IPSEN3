import { Component, OnInit } from '@angular/core';
import {Declaration} from "../declaration.object";
import {HttpHandlerService} from "../../../http-handler.service";
import {User} from "../../profile/user.object";

@Component({
  selector: 'app-create-declaration',
  templateUrl: './create-declaration.component.html',
  styleUrls: ['./create-declaration.component.scss']
})

export class CreateDeclarationComponent implements OnInit {

  beginPostcode : string;
  beginHuisnummer : number;
  beginStraatnaam : string;
  beginPlaatsnaam : string;
  beginLand : string;
  eindPostcode : string;
  eindHuisnummer : number;
  eindStraatnaam : string;
  eindPlaatsnaam : string;
  eindLand : string;
  kilometers: number;
  declaratie: number;
  omschrijving : string;


  constructor(private httpHandler : HttpHandlerService) { }

  ngOnInit() {
  }

  onCreateDeclaration(){
    const newDec = new Declaration("test@test.test", this.omschrijving, "16-12-2020", this.kilometers, this.declaratie,
      this.beginPostcode, this.beginHuisnummer, this.beginStraatnaam, this.beginPlaatsnaam, this.beginLand,
      this.eindPostcode, this.eindHuisnummer, this.eindStraatnaam, this.eindPlaatsnaam, this.eindLand,);
    this.httpHandler.postDeclaration(newDec, "/declaration/create")
  }

}
