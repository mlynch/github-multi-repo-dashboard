import { Component } from '@stencil/core';


@Component({
  tag: 'github-repo',
  styleUrl: 'github-repo.scss'
})
export class GithubRepo {

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color='primary'>
            <ion-title>Github Repo</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <h2>Issues</h2>
        </ion-content>
      </ion-page>
    );
  }
}
