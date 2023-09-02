import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }
  showSuccessMSG(header:string ,detail?:string) {
    this.messageService.clear();
    this.messageService.add({ severity: 'success', summary: header, detail: detail });
  }
  showErrorMSG(header:string | number ,detail?:string) {
    this.messageService.clear();
    this.messageService.add({ severity: 'error', summary: header.toString(), detail: detail });
  }
}
