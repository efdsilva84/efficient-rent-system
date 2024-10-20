import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vv';
  isSideNavCollapsed = false;

  constructor(private router: Router){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.isLoginPage();
    });

  }



  ngOnInit(){
      this.carregaApp()

  }





  isLoginPage(): boolean {
    return this.router.url === '/login';
  }




  carregaApp(){
    const user = localStorage.getItem('user');


    if(user){


      this.router.navigate(['home']);

    }else{
      this.router.navigate(['login']);
    }

}
}
