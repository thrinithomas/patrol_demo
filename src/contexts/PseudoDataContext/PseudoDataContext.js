import React, {Component, createContext} from "react";

const caseDatum = [
    {elderID: 101, remarklist: ['hello', 'eyu']},
    {elderID: 102, remarklist: ['Lia', 'Luke']},
    {elderID: 103, remarklist: ['Python', 'JS']},
    {elderID: 104, remarklist: []},
]

const PseudoDataContext = createContext({
    datum: caseDatum

})

export class PseudoDataProvider extends Component {
    state = {
        datum: caseDatum
    }

    render() {
        return (
            <PseudoDataContext.Provider value={this.state}>
                {this.props.children}
            </PseudoDataContext.Provider>
        )
    }
}

export const PseudoDataConsumer = PseudoDataContext.Consumer;
