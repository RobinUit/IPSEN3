import { Component, OnInit } from '@angular/core';
import {Project} from '../profile-projects/project.model';
import {Client} from './client.model';
import {ProfileObjectsService} from '../profile-objects.service';
import {User} from '../../../models/user.model';
import {AuthService} from '../../../account/auth.service';

@Component({
  selector: 'app-profile-clients',
  templateUrl: './profile-clients.component.html',
  styleUrls: ['./profile-clients.component.scss']
})
export class ProfileClientsComponent implements OnInit {
  private user: User;
  private maxCountPage = 6;
  public clients: Client[];
  public selectClients: Client[];
  public pageNumberMinimum = 0;
  public pageNumberMaximum = this.maxCountPage;

  private generateEmptyRows: number;
  public emptyRowsList;

  public allCheckboxesSelected = false;

  public pageBtnLeft = true;
  public pageBtnRight = true;

  // popup
  public showPopup = false;
  public popupClient: Client;
  public popupEditMode = false;

  constructor(private auth: AuthService) {
    this.user = this.auth.getUserData();
    const userEmail = this.user.email;
    this.clients = [
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland"),
      new Client(userEmail, "Ole Timmers", "2215 AB", 11, "Amsterdam", "Nederland")
    ];
    this.checkEmptyRows();
    this.checkButtons();
  }

  ngOnInit() {
  }

  // Wisselen van pagina's
  getMinimum() {
    return this.pageNumberMinimum;
  }

  getMaximum() {
    return this.pageNumberMaximum;
  }

  nextPage() {
    if (!(this.pageNumberMinimum + this.maxCountPage > this.clients.length)) {
      this.pageNumberMinimum += this.maxCountPage;
      this.pageNumberMaximum += this.maxCountPage;
      this.checkEmptyRows();
      this.checkButtons();
    }
  }

  prevPage() {
    if (this.pageNumberMinimum > 0) {
      this.pageNumberMinimum -= this.maxCountPage;
      this.pageNumberMaximum -= this.maxCountPage;
      this.checkEmptyRows();
      this.checkButtons();
    }
  }

  private checkEmptyRows() {
    this.generateEmptyRows = this.pageNumberMaximum - this.clients.length;
    if (this.generateEmptyRows < 1){
      this.generateEmptyRows = 0;
    }
    this.emptyRowsList = Array(this.generateEmptyRows).fill(1);
  }

  private checkButtons() {
    this.pageBtnLeft = ProfileObjectsService.checkPrevButton(this.pageNumberMinimum);
    this.pageBtnRight = ProfileObjectsService.checkNextButton(this.pageNumberMinimum, this.maxCountPage, this.clients.length);
  }

  editClient(client: Client) {
    this.popupClient = new Client(client.userEmail, client.clientName, client.clientPostalCode, client.clientHouseNumber, client.clientCity, client.clientCountry);
    this.popupEditMode = true;
    this.showPopup = true;
  }
}
