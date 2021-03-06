import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color='primary'>
            <ion-title>All Repos</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <h2>GitHub Multi-repo Dashboard</h2>
          <p>
            Select a repo in the menu on the left
          </p>
        </ion-content>
      </ion-page>
    );
  }
}
