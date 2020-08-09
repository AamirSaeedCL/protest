import { Subject } from 'rxjs';

export class StateService {
    static observable = null;
    state = {};

    subscription() {
        if (StateService.observable !== null) {
            return StateService.observable;
        }
        StateService.observable = new Subject();
        return StateService.observable;
    }

    message(message: string | object): void {
        StateService.observable.next(message);
    }
}
