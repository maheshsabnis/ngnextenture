import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../services/app.services';


@Component({
  selector: 'app-multi-serv-component',
  template: ``
})

export class MultiServiceComponent implements OnInit {
  constructor(private serv:FacadeService) { }

  ngOnInit() { }
}
