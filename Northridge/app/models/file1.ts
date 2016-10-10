

import {Outcome} from '../../models/Outcome';
public class outcome extends Outcome {

    constructor(title?: string = '', admittance?: number = 0, goal?: number = 0, discharge?: number = 0) {
        super();
        this.title = title;
        this.admittance = admittance;
        this.goal = goal;
        this.discharge = discharge;
    }
    GetChartRows() {
        let c1: any = [];
        c1.push({ v: this.title });
        c1.push({ v: this.admittance });
        c1.push({ v: this.goal });
        c1.push({ v: this.discharge, f: 'test' });

        return c1
    }
}