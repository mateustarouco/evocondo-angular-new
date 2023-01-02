import {ChangeDetectorRef, Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
import {ActivatedRoute, Router} from "@angular/router";
import {OverlayContainer} from "@angular/cdk/overlay";
import {AmplifyService} from "aws-amplify-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evocondo-angular-new';
  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry,
    public router: Router,
    public route: ActivatedRoute,
    public amplifyService: AmplifyService,
    public changeDetector: ChangeDetectorRef
  ) {
    matIconRegistry.addSvgIcon(
      'eye-open',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/eye-open.svg')
    );
    matIconRegistry.addSvgIcon(
      'eye',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/eye-open-solid.svg')
    );
    matIconRegistry.addSvgIcon(
      'eye-closed',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/eye-closed.svg')
    );
    matIconRegistry.addSvgIcon(
      'form',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/form.svg')
    );
    matIconRegistry.addSvgIcon(
      'users',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/users.svg')
    );
    matIconRegistry.addSvgIcon(
      'user',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/user.svg')
    );
    matIconRegistry.addSvgIcon(
      'search',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg')
    );
    matIconRegistry.addSvgIcon(
      'share',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/share.svg')
    );
    matIconRegistry.addSvgIcon(
      'add',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg')
    );
    matIconRegistry.addSvgIcon(
      'add-user',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add-user.svg')
    );
    matIconRegistry.addSvgIcon(
      'building',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/building.svg')
    );
    matIconRegistry.addSvgIcon(
      'refresh',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/refresh.svg')
    );
    matIconRegistry.addSvgIcon(
      'pencil',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/pencil.svg')
    );
    matIconRegistry.addSvgIcon(
      'bag',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/bag.svg')
    );
    matIconRegistry.addSvgIcon(
      'trash',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/trash.svg')
    );
    matIconRegistry.addSvgIcon(
      'apps',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/apps.svg')
    );
    matIconRegistry.addSvgIcon(
      'man',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/man.svg')
    );
    matIconRegistry.addSvgIcon(
      'log-out',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/log-out.svg')
    );
    matIconRegistry.addSvgIcon(
      'send',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/send.svg')
    );
    matIconRegistry.addSvgIcon(
      'help',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg')
    );
    matIconRegistry.addSvgIcon(
      've',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ve.svg')
    );
    matIconRegistry.addSvgIcon(
      'xis',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/xis.svg')
    );
    matIconRegistry.addSvgIcon(
      'chat',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/chat.svg')
    );
    matIconRegistry.addSvgIcon(
      'cash',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cash.svg')
    );
    matIconRegistry.addSvgIcon(
      'arrow-up',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-up.svg')
    );
    matIconRegistry.addSvgIcon(
      'arrow-right',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-right.svg')
    );
    matIconRegistry.addSvgIcon(
      'arrow-left',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-left.svg')
    );
    matIconRegistry.addSvgIcon(
      'home',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg')
    );
    matIconRegistry.addSvgIcon(
      'add-user',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add-user.svg')
    );
    matIconRegistry.addSvgIcon(
      'add-condominium',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add-condominium.svg')
    );
    matIconRegistry.addSvgIcon(
      'see-form',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/see-form.svg')
    );
    matIconRegistry.addSvgIcon(
      'scheldedSend',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/schelded-send.svg')
    );
    matIconRegistry.addSvgIcon(
      'clock',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/clock-icon.svg')
    );
    matIconRegistry.addSvgIcon(
      'xis-bw',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/xis-bw.svg')
    );
    matIconRegistry.addSvgIcon(
      'ok',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ok.svg')
    );
    matIconRegistry.addSvgIcon(
      'companie',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/companie.svg')
    );
    matIconRegistry.addSvgIcon(
      'occurrence',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/occurence.svg')
    );
    matIconRegistry.addSvgIcon(
      'folder',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/folder.svg')
    );
    matIconRegistry.addSvgIcon(
      'add-form',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add-form.svg')
    );
    matIconRegistry.addSvgIcon(
      'add-companie',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add-companie.svg')
    );
    matIconRegistry.addSvgIcon(
      'monney',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/monney.svg')
    );
    matIconRegistry.addSvgIcon(
      'download',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/download.svg')
    );
  }
}
