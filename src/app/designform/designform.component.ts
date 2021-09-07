import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-designform',
  templateUrl: './designform.component.html',
  styleUrls: ['./designform.component.css']
})
export class DesignformComponent implements OnInit {

 @Output() emailoutput:EventEmitter <any>=new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
