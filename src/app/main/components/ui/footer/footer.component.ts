import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'co-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  productName = 'ECoM - Construction Project Management Application';

  constructor() {}

  ngOnInit(): void {}
}
