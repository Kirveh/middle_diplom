import scroll from "./modules/scroll";
import valid from "./modules/valid";
import comments from "./modules/comments";
import modal from "./modules/modal";
import timer from "./modules/timer";
import calculator from "./modules/calculator";
















valid()
sendForm({
    idForm: ('#formActionOrder1, #formActionOrder2, #formModalAction, #formServModalAction'),
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ]
});
comments();
scroll()
modal()
timer('26 Feb 2022')
calculator()
slider()
