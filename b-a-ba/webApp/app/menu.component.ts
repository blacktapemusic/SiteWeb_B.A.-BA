import {Component, OnInit} from 'angular2/core';
import {Menu} from './object/menu';

@Component({
    selector: 'my-menu',
    template:`
            <nav role="navigation" class="navbar navbar-default">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand">B-A-BA</a>
                </div>

                <!-- Collection of nav links and other content for toggling -->
                <div id="navbarCollapse" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li *ngFor="#menu of menus" 
		 		            [class.active]="menu === selectedMenu"
		 		            (click)="onSelect(menu)">
                          <a href="#">
			                {{menu.displayValue}}
                          </a>
			            </li>
                    </ul>
                </div>
            </nav>
		
		`
		
})

export class MenuComponent implements OnInit{
  public menus = MENUS;
  public selectedMenu: Menu;
    
    ngOnInit() {
        this.selectedMenu = MENUS[0];
        console.log(this.selectedMenu);
    }

	onSelect(menu: Menu) { this.selectedMenu = menu; }
}

var MENUS: Menu[] = [
  { "link": "lien1", "displayValue": "Titre menu 1" },
  { "link": "lien2", "displayValue": "Titre menu 2" },
  { "link": "lien3", "displayValue": "Titre menu 3" }
];
