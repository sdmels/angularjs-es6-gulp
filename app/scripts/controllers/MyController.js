export default class MyController {

    /*@ngInject;*/
    constructor(PersonService) {
        PersonService.getPerson().then(person => {
            this.person = person;
    });
    }

}