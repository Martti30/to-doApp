import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Entry } from './entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  @Input() entry: Entry | undefined;
  @Output() dataEvent = new EventEmitter<number>();

  constructor(private entryService: EntryService) { }

  setSelected(id: number) {

    this.dataEvent.emit(id);
  }

  delete() {
    if (this.entry !== undefined) {
      this.entryService.deleteEntry(this.entry).subscribe({
        next: (response) => (console.log("entryDeleted"))
      });
    }

  }

  archivieren() {
    if (this.entry !== undefined) {
      this.entryService.archivEntry(this.entry).subscribe({
        next: (response) => (console.log("entryArquiviert"))
      });
    }

  }

  erledigen() {
    if (this.entry !== undefined) {
      this.entryService.erledigenEntry(this.entry).subscribe({
        next: (response) => (console.log("entryErledigt"))
      });
    }

  }
}
