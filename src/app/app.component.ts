import { Component } from '@angular/core';
import { SharedService } from './servicos/shared.service';
import { UsuarioService } from './servicos/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTemplate: boolean = false;
  public shared: SharedService;

  constructor(private usuarioService: UsuarioService) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
    );
  }

  /**showContentWrapper() {
    return {
      'content-wrapper': this.shared.isLoggedIn()
    }
  }**/
}