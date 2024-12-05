import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DatabaseControllerService } from './services/database-controller.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'farmCMS';

  // dbcontroller = inject(DatabaseControllerService);

  async ngOnInit(): Promise<void> {
    // await this.dbcontroller.InitConnection();
  }
}
