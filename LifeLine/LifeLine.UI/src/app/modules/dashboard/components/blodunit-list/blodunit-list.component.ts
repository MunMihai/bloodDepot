import { Component, OnInit } from '@angular/core';
import { BlodStorageService } from 'src/app/services/blod-storage.service';

@Component({
  selector: 'app-blodunit-list',
  templateUrl: './blodunit-list.component.html',
  styleUrls: ['./blodunit-list.component.css']
})
export class BlodunitListComponent implements OnInit {

  constructor(public service: BlodStorageService) { 

  }
  ngOnInit(): void {
    this.service.getBlodStorage();
  }

}
