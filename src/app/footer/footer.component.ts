import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

const FILTER_PAG_REGEX = /[^0-9]/g;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() currentPage = 1;
  @Output() pageChanged = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  selectPage(page: string) {
    this.currentPage = parseInt(page, 10) || 1;
    this.pageChanged.emit(this.currentPage)
  }
  
  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
  
  public pageChange(event: any) {
    console.log(event);
    this.pageChanged.emit(this.currentPage)
  }
}
