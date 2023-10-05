import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmptyExpr } from '@angular/compiler';
import { Optionen } from './optionen';
import { OptionenService } from '../optionen.service';

@Component({
  selector: 'app-optionen',
  templateUrl: './optionen.component.html',
  styleUrls: ['./optionen.component.css']
})
export class OptionenComponent {

  @Input() optionen: Optionen | undefined;

  message: string = "";
  constructor(private router: Router, private authService: AuthService, private optionenService: OptionenService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.getUser().subscribe({
      next: (user) => {
        if (user.isLoggedIn == 0) {
          console.log("hi");
          this.router.navigate(['/login']);
        }
      }
    });


    this.optionenService.getOptionen().subscribe((optionen) => (

      this.optionen = optionen
    ));


  }

  async submitOptionen() {

    if (this.optionen) {
      // Hier kannst du die Logik für das Speichern der Aufgabenänderungen implementieren.
      // Du kannst beispielsweise einen Aufruf an deinen EntryService machen, um die Aufgabe zu aktualisieren.
      this.optionenService.updateOptionen(this.optionen).subscribe({
        next:
          (response) => {
            this.message = "UPDATED";
          }
      }

      );
    }

  }

}
