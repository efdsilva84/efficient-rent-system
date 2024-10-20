import { Component, Input } from '@angular/core';
import { INavbarData } from './helper';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  template: `
      <ul>
        <li *ngFor="let item of data.items" class="sublevel-nav-item">
          <a href="" class="sublevel-nav-link" *ngIf="item.items && item.items.length > 0">
              <i class="sublevel-link-icon fa fa-circle"></i>
              <span class="sublevel-link-text" *ngIf="collapsed">{{item.Label}}</span>
              <i *ngIf="item.items && collapsed" class="menu-collapsed-icon" [ngClass]="!item.expanded ? 'fa-solid fa-angle-right' : 'fa-solid fa-chevron-down'"
              ></i>
          </a>
          <a class="sublevel-nav-link" *ngIf="!item.items || (item.items && item.items.length === 0)" [routerLink]="[item.routeLink]" routerLinkActive="active-sublevel" [routerLinkActiveOptions]="{exact:true}">
            <i class="sublevel-link-icon fa fa-circle"></i>
            <span class="sublevel-link-text">{{item.Label}}</span>
          </a>
          <div *ngIf="item.items && item.items.length > 0">
              <app-sublevel-menu [collapsed]="collapsed" [multiple]="multiple" [expanded]="item.expanded">

              </app-sublevel-menu>
          </div>
        </li>

      </ul>
  `,
  styleUrls: ['./sidenav.component.css'],
  animations:[
    trigger('submenu', [
      state('hidden', style({
        height:'0',
        overflow: 'hidden'
      })),
      state('visible',style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow:'hidden'}),
        animate('{{transitionParams}}')]),
        transition('void => *', animate(0))
    ])
  //   trigger('submenu',[
  //     state('hide', style({

  //     })),
  //     state('visible', style({
  //       height: '*'
  //     })),
  //     transition('visible <=> hidden', style({overflow: 'hidden'}),
  //     animate('{{transitionParams}}'))]
  // )
  ]

})
export class SublevelMenuComponent {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    Label: '',
    items: [],
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined
  @Input() multiple: boolean = false;

  handleClick(item:any):void {
    if(this.multiple){
      if(this.data.items && this.data.items.length > 0){
        for(let modelItem of this.data.items){
          if(item !== modelItem && modelItem.expanded){
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }


}
