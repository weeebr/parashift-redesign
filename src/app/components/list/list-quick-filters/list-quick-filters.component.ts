import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-quick-filters',
  templateUrl: './list-quick-filters.component.html',
  styleUrls: ['./list-quick-filters.component.scss']
})
export class ListQuickFiltersComponent implements OnInit {
  data = [
    { id: 0, name: "Stage", value: "Separation", popupVisible: false },
    { id: 1,  name: "Status", value: "In Progress", popupVisible: false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showPopup(filter) {

    const newFilter = {...filter, popupVisible: true};

    this.data = this.data.map(d => {
      return d.id === filter.id
      ? {...d, popupVisible: true}
      : {...d, popupVisible: false}
    })
    console.log(this.data);
  }

}
