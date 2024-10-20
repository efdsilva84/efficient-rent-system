import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { INavbarData } from './helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  collapsed = false;
  navData = navbarData;
  multiple: boolean = false;
  constructor(private router:Router){

  }


  handleClick(item: INavbarData):void{
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded
}

logout(){
  console.log('saiu')
  localStorage.clear();
  this.router.navigate(['login']);
}

}
