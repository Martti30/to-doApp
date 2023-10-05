import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { OptionenService } from '../optionen.service';
import { Optionen } from '../optionen/optionen';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  @Input() optionen: Optionen | undefined;

  constructor(private router: Router, private authService: AuthService, private optionenService: OptionenService, private entryService: EntryService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.logout();

    this.optionenService.getOptionen().subscribe({
      next: (optionen) => {
        this.optionen = optionen;

        this.entryService.deleteAll().subscribe({
          next: (response) => (console.log("databaseClean"))
        });

      }
    });
  }


}
