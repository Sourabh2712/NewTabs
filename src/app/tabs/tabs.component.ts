import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() parentStyle: any;
  @Input() tabs: any;

  constructor() {}

  ngOnInit(): void {}
  selected = new FormControl(0);
}
