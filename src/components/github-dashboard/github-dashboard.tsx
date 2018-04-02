import '@ionic/core';
import '@stencil/core';
import { Component, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';

const apiUrl = 'https://github.com/graphql';

const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const client = new Lokka({
  transport: new Transport(apiUrl)
});

console.log(client);

@Component({
  tag: 'github-dashboard',
  styleUrl: 'github-dashboard.scss'
})
export class GithubDashboard {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentDidLoad() {
    /*
      Handle service worker updates correctly.
      This code will show a toast letting the
      user of the PWA know that there is a 
      new version available. When they click the
      reload button it then reloads the page 
      so that the new service worker can take over
      and serve the fresh content
    */
    window.addEventListener('swUpdate', () => {
      this.toastCtrl.create({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      }).then((toast) => {
        toast.present();
      });
    })
  }

  @Listen('body:ionToastWillDismiss')
  reload() {
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <main>
          <ion-router useHash={false}>
            <ion-route url='/' component='app-home'></ion-route>
            <ion-route url='/repo/:name' component='github-repo'></ion-route>

            <ion-nav></ion-nav>
          </ion-router>
        </main>
      </ion-app>
    );
  }
}
