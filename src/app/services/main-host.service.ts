import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainHostService {
  ikcHostName ="";
  ikcOrigin = "";
  ikcPort = "";
  ikcRestPort = "8080";
  ikcProtocol = "";
  ikcRestSite = "";
  isOnlocalhost = 0;
  ikcRestMs = "";

  constructor() {
    this.ikcHostName = document.location.host;
      this.ikcOrigin = document.location.origin;
      this.ikcPort = document.location.port;
      this.ikcProtocol = document.location.protocol;
      this.isOnlocalhost = origin.indexOf("localhost");

      if(this.isOnlocalhost > 0) {
      this.ikcRestSite = this.ikcOrigin+"/cloudApps.app/"
      }

      this.ikcRestSite = this.ikcRestSite + 'ikc-api/';
      this.ikcRestSite=this.ikcRestSite.replace(this.ikcPort, this.ikcRestPort);
      this.ikcRestMs=this.ikcOrigin.replace(this.ikcPort, this.ikcRestPort);
   }
}
