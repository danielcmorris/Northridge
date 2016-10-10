/// <reference path="angular.d.ts" />
/// <reference path="angular-route.d.ts" />
/// <reference path="angular-cookies.d.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="../app.ts" />



declare module Application.Models {
   export class Outcome {
        public title: string;
        public admission: number;
        public discharge: number;
        public goal: number;

    }
    export class Patient {
        id: string;
        firstName: string;
        lastName: string;
        outcomes: Outcome[];
    }
}
declare module Application.Library { }
declare module Application.Library.Types {
    export interface IBook {
        barcode: string;
        title: string;
        author?: string;
        callnumber?: string;
        category?: string;
        description?: string;
        edition?: string;
        isbn?: string;
        media?: string;
        pubdate?: string;
        publisher?: string;
        publocation?: string;
        subject: string;
        thumburl?: string;
        type?: string;
    }
}

declare module Application.Components {

    interface IDisplays {
        primary: boolean;
        spousal: boolean;
        income: boolean;
        address: boolean;
        assets: boolean;
        
        pension: boolean;
        receipts: boolean;
        objectives: boolean;
        socialSecurity: boolean;
        rates: boolean;
        submit: boolean;
        success: boolean;
        dependants: boolean;
        cashNeeds: boolean;
        survivorNeeds: boolean;
        liabilities: boolean;
        insurance: boolean;
        rateAssumptions: boolean;
        savings: boolean;
    }
    interface ILinc {
        assets: IAssets;
        debt: IDebt;
        edu: IEducation;
        income: IIncome;
        invest: IInvest;
        expense: IExpenses;
    }

    interface columnSet {
        title: string;
        sum: number;
        percentage: number;
        pixels: number;
    }
    interface IIncome {
        years: number;
        monthly: number;
    }
    interface IDebt {
        credit: number;
        car: number;
        mortgage: number;
        other: number
    }
    interface IEducation {
        children: number;
        costPerChild: number;
    }
    interface IExpenses {
        final: number;
        funeral: number;
        other: number;
    }
    interface IAssets {
        insurance: number;
        liquid: number;
        investments: number;
        other: number;
    }
    interface IInvest {
        returnRate: number;
        inflationRate: number;
    }



}

declare module Application.Types {
    interface IOutcome {
        title: string;
        admission: number;
        discharge: number;
        goal: number;
    }
    interface IPatient {
        id: number;
        firstName: string;
        lastName: string;
        outcomes: IOutcome[]
    }
    interface IContactInfo {
        gender?: string;
        interest: string;
        age: number;
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        details: string;
    }

    export interface ISalesForce {
        CreateContact(contactInfo: Application.Types.IContactSF): ng.IHttpPromise<any>;
    }
    export interface IContactSF {
        first_name: string;
        last_name: string;
        age: number;
        phone: string;
        email: string;
        interest: string;
        details: string;
    }

}


declare module Application.test {
    

}