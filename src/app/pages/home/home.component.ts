import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {
  }

  logo = ''

  ngOnInit(): void {
    this.homeService.getData().then(
      (item: any) => {
        const result: any = item.user_permissions
        this.logo = item.logo
      })
  }

}

