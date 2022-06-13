import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

let mainTitle = "Syspons task 1";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = mainTitle;
  showAddTask: boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService, private router: Router) { }

  ngOnInit(): void {
    this.subscription =
      this.uiService
        .onToggle()
        .subscribe((value) => (
          this.title = `${mainTitle} | Items: ${value.amount} | Status: ${value.status}`
        ));
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
