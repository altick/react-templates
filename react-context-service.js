import { createServiceContext, ServiceComponent } from '../utils/ServiceComponent';

const initalState = {
    text: 'Hello'
}

class SomeService extends ServiceComponent {

    constructor() {
        super(initialState);
    }

    showMessage = (message) => {
        this.setState({
            text: message
        });
        return true;
    }

}

let SomeContext = createServiceContext(new SomeService());
export default SomeContext;
