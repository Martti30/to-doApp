import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EntryService } from '../entry.service';
import { Entry } from '../entry/entry';
import { EmptyExpr } from '@angular/compiler';
import { OptionenService } from '../optionen.service';
import { Optionen } from '../optionen/optionen';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  @Input() entries: Entry[] = [];
  @Input() entry: Entry | undefined;
  @Input() optionen: Optionen | undefined;

  selectedEntry: number | undefined;
  setSelectedEntry: any;
  filterBy: string = "activ";

  constructor(private router: Router, private authService: AuthService, private entryService: EntryService, private optionenService: OptionenService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.getUser().subscribe({
      next: (user) => {
        if (user.isLoggedIn == 0) {

          this.router.navigate(['/login']);
        }
      }
    });
    this.updateList();
    this.optionenService.getOptionen().subscribe({
      next: (optionen) => (this.optionen = optionen)
    });

  }

  setSelected(entryId: number) {
    this.selectedEntry = entryId;
    this.entryService.getEntry(entryId).subscribe((entry) => (

      this.entry = entry


    ));

    this.updateList();
  }

  async submitEntry() {

    if (this.entry) {
      // Hier kannst du die Logik für das Speichern der Aufgabenänderungen implementieren.
      // Du kannst beispielsweise einen Aufruf an deinen EntryService machen, um die Aufgabe zu aktualisieren.
      if (this.entry.id == this.selectedEntry) {
        this.entryService.updateEntry(this.entry).subscribe({
          next:
            (response) => {
              // Handle the successful response here
              this.updateList();
            }
        }

        );

      } else {
        this.entryService.createEntry(this.entry).subscribe({
          next:
            (response) => {
              // Handle the successful response here
              this.updateList();
            }
        }

        );
      }



    }
  }

  updateList() {
    this.entryService.getAll().subscribe((entries) => (

      this.entries = entries
    ));
  }

  addNew() {
    var maxEntry = this.entries[this.entries.length - 1];
    var newEntry: Entry = {
      id: maxEntry.id + 1,
      date: Date.now.toString(),
      text: "",
      priority: 0,
      status: "activ",
      erledigt: 0,
    }

    this.entry = newEntry;
  }

  receiveDataFromChild(id: number) {
    this.setSelected(id);
  }

  setFilter(filter: string) {
    this.filterBy = filter;
  }
}
