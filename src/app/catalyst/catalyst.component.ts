import { Component, OnInit } from '@angular/core';
import { Catalyst } from '../catalyst';
import { CATALYSTS } from '../mock-catalysts';

@Component({
  selector: 'app-catalyst',
  templateUrl: './catalyst.component.html',
  styleUrls: ['./catalyst.component.css']
})
export class CatalystComponent implements OnInit {
  catalysts = CATALYSTS;

  constructor() { }

  ngOnInit() {
  }
  selectedCatalyst: Catalyst;
  onSelect(catalyst: Catalyst): void {
    this.selectedCatalyst = catalyst;
  }
}
