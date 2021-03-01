import { Component } from '@angular/core';
import { ModalService } from '@app/core/services/index';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent { 
    public bodyText: string | undefined;

    constructor(private modalService: ModalService) { }

    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}