import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: any;
  constructor() { }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }


  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 1);
    var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
      imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
    L.imageOverlay(imageUrl, [[40.712216, -74.22655], [40.773941, -74.12544]]).addTo(this.map);


    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map);

    // Current position

    this.map.flyTo([12.94329043879397, 77.50288011121283], 13);

    
    

    // this.getCurrentPosition()
    // .subscribe((position: any) => {
    //   this.map.flyTo([position.latitude, position.longitude], 13);

    //   const icon = L.icon({
    //     iconUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-icon.png',
    //     shadowUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-shadow.png',
    //     popupAnchor: [13, 0],
    //   });

    //   const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Angular Leaflet');
    //   marker.addTo(this.map);
    // });
  }

}
