import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css'],
})
export class IdComponent implements OnInit {
  fontWeight: string;
  backgroundColor: string;
  foregroundColor: string;

  constructor() {}

  ngOnInit() {}
}
