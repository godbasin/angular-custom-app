import { Component, OnInit } from '@angular/core';
import {menus} from './sidebar.config';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  menus = menus;
  ngOnInit() {
    $('body').attr('class', 'nav-md');
    $('.right_col').css('min-height', $(window).height());
  }
}