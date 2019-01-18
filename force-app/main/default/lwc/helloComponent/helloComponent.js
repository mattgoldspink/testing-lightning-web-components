import { LightningElement, api } from 'lwc';

export default class HelloComponent extends LightningElement {

    @api person = 'World';

}