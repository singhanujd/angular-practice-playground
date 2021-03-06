import { Component, OnInit, ContentChild, Directive,Input } from '@angular/core';

@Directive({selector: 'pane'})
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'tab',
  template: `
    <div>pane: {{pane?.id}}</div>
  `
})
export class Tab {
  @ContentChild(Pane) pane!: Pane;
}


@Component({
  selector: 'app-practice-contentchild',
  template: `
    <tab>
      <pane id="1" *ngIf="shouldShow"></pane>
      <pane id="2" *ngIf="!shouldShow"></pane>
    </tab>

    <button (click)="toggle()">Toggle</button>
  `,
})

export class PracticeContentchildComponent {
  shouldShow = true;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }

}