import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from 'angular2/router';


@Component({
    selector: "Article",
    template: `
            ArticleComponent
            `

})

export class ArticleComponent implements OnInit {
  constructor(
      private _router: Router,
      private _routeParams: RouteParams /*,
      private _service: HeroService*/ ) { }
    ngOnInit() {
      /*
      let numPage = this._routeParams.get("numPage");
      console.log(numPage);
      */
    }

}
