import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Menu} from './object/menu';

@Component({
    selector: 'my-menu',
    templateUrl: "./app/page/item/menu.html",
    directives: [ROUTER_DIRECTIVES]
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
