import { createElement } from 'lwc';
import HelloComponent from 'c/helloComponent';

describe('c-hello-component', () => {
    
    afterEach(() => {
        // The jsdom instance is shared across test cases in a 
        // single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Renders with Hello World', () => {
        const element = createElement('c-hello-component', {
            is: HelloComponent,
        });
        document.body.appendChild(element);

        const pTag = element.shadowRoot.querySelector('p');
        expect(pTag.textContent).toEqual('Hello, World!');
    });

    it('Renders with Hello Matt - before inserting in the DOM', () => {
        const element = createElement('c-hello-component', {
            is: HelloComponent,
        });

        element.person = "Matt"
        document.body.appendChild(element);

        const pTag = element.shadowRoot.querySelector('p');
        expect(pTag.textContent).toEqual('Hello, Matt!');
    });

    it('Renders with Hello Matt - after inserting in the DOM', () => {
        const element = createElement('c-hello-component', {
            is: HelloComponent,
        });
        document.body.appendChild(element);

        element.person = "Matt"

        return Promise.resolve().then(() => {
            const pTag = element.shadowRoot.querySelector('p');
            expect(pTag.textContent).toEqual('Hello, Matt!');
        });
    });

});
