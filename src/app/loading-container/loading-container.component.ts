import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Store } from '@ngrx/store';
import { IconDefinition, faBug } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';


@Component({
    selector: 'loading-container',
    templateUrl: './loading-container.component.html',
    styleUrls: ['./loading-container.component.scss']
})
export class LoadingContainerComponent implements OnInit {
    public faBug:IconDefinition = faBug;

    constructor() { }
    
    ngOnInit() {
    }
}

