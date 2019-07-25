import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billeterie',
  templateUrl: './billeterie.component.html',
  styleUrls: ['./billeterie.component.scss']
})
export class BilleterieComponent implements OnInit {
  toogledrop: EventEmitter<boolean> = new EventEmitter();
  constructor(private router: Router,) { }

  ngOnInit() {
  }
  
  onSelect(event){
   this.toogledrop= event;
   console.log(event)
   
  }
  onClick(){
    this.router.navigateByUrl("login");
  }
}
