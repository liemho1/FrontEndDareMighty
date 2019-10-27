import React, {Component} from 'react';
import Config from '../config/index';
import FormSelection from './FormSelection';
import button from './button';

const INITIAL_STATE = {
    jsonData:{}
}

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;
    }

    componentWillMount() {
        fetch(Config.backendAPI).then(data=>data.json())
        .then(jsonData => {
            this.setState({jsonData:jsonData})
        })
        .catch(e => {
            console.log("Error! ", e);
        })
    }

    
      

    render() {
        let data = this.state.jsonData;
        return(
            <div>
                <p>Returned Data:</p>
                {JSON.stringify(data)}

                <FormSelection/>
                <button/>
                
            </div>

        )
    }
}


export default Form;