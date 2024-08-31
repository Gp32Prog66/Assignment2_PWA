import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'This is Assignment 2, and this is a PWA';

  @property() info = 'This will be uploaded on GitHub';

  static styles = [
    styles,
    css`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              1. My name is John Raymond Szoszorek. <br>
              2. Upon my graduation at Point Park University, I would like to either be a software developer, web developer, or a database developer. I also would be interested in an infrastructure position. <br>
              3. Job that I would like to get upon graduation is working at Armada Supply Chain Solutions. I wouldn't mind working for WestingHouse or an it position for a non-profit. <br>
              4. What I enjoyed the most from the Applied Computer Science program is all the programming classes that were offered. Out of the programming classes, either Advanced Programming or
              Survey of Programming were my favorites. I also enjoyed Business Analytics with Professor Voortman. That class helped me understand data prediction, matrix tables, and helped me become an expert at Microsoft Excel, especially the solver tool.</a>
            </p>

            <p id="mainInfo">

            </p>

            ${'share' in navigator
              ? html`<sl-button slot="footer" variant="default" @click="${this.share}">
                        <sl-icon slot="prefix" name="share"></sl-icon>
                        Share this Starter!
                      </sl-button>`
              : null}
          </sl-card>

          <sl-card id="infoCard">
            


        </div>
      </main>
    `;
  }
}
