import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'clientCMS';

  ngOnInit(): void {
    $(document).ready(function() {
      alert('I am Called From jQuery');
    });
  }
  
  
}
