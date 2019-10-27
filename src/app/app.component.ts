import { Component } from '@angular/core';
import { faServer, faNetworkWired, faCog, faCode, faChartLine, faSearch, faDungeon } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { NodesService } from './services/nodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dashboardIcon = faChartLine;
  nodesIcon = faServer;
  datacentersIcon = faNetworkWired;
  applicationsIcon = faCode;
  segregationIcon = faDungeon;
  serviceDiscoveryIcon = faSearch;
  settingsIcon = faCog;
}
