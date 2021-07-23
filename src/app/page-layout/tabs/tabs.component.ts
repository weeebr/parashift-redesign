import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  data = ["Default", "Main*", "Custom"];
  isActive = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActive(tab) {
    tab.addClass("active");
  }

  onClick(tabIndex) {
    this.isActive = tabIndex;
  }
}
