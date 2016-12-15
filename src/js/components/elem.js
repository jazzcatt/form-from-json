import React from 'react';
import Input_text from './input_text';
import Input_radio from './input_radio';

export default class Elem extends React.Component {
	constructor() {
		super();
		this.state = {
			text: Input_text,
			radio: Input_radio
		}
	}
	render() {
		let Elem = this.state[this.props.data.view];
		return <Elem data={this.props.data} 
					hidden={this.props.hidden} 
					checkGender={this.props.checkGender}
					col={this.props.col} />
	}
}