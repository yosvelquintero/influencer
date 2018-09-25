import { Component } from '@angular/core';

import { CampaignsPage } from '../campaigns/campaigns';
import { PaymentsPage } from '../payments/payments';
import { ReportsPage } from '../reports/reports';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = CampaignsPage;
  tab3Root = ReportsPage;
  tab4Root = PaymentsPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
