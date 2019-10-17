import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settingsService: SettingsService ) { }

  ngOnInit() {
    this.setCheck();
  }

  changeColor( theme: string, link: any ) {
    this._settingsService.applyingTheme(theme);
    this.applyingCheck(link);
  }

  applyingCheck( link: any) {
    let selectors: any = document.getElementsByClassName('selector');

    for ( let ref of selectors){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  setCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settingsService.settings.theme;

    for ( let ref of selectors) {
      if ( ref.getAttribute('data-theme') === theme ) {
        ref.classList.add('working');
        break;
    }
    }
  }

}
