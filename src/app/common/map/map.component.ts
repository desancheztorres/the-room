import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location: string;

  isPositionError: boolean = false;

  lat: number;
  lng: number;

  constructor(
    private mapService: MapService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  mapReadyHandler() {

    // let currentLocation = this.location;

    // if(Math.round(Math.random() * 10) >5) {
    //   currentLocation = "dgdsgdsggdsfew";
    // }

    this.mapService.getGeoLocation(this.location)
      .subscribe( (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;

        // To load the map once we show the details
        // To fix the blue screen
        this.ref.detectChanges();

      }, () => {
        this.isPositionError = true;
      });
  }

}
