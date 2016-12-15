import React from 'react';
import {render} from 'react-dom';
import Elem from './components/elem';
import Btn_pan from './components/btn_pan';
import json from './data';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			structure : this.getStructure(),
			key: 2,                // key columns "from json" 
			hidden: {				
				fathername:true,
				mothername:true 
			}
		}
	}

	getStructure() {                   // "request" to the server
		let getJson = JSON.parse(json); 
		let text = [];
		let radio = [];
		for(let i=0; i<getJson.length; i++) {  //filter text fields apart radio
			if(getJson[i].view == 'text')
				text.push(getJson[i]);
			else
				radio.push(getJson[i]);
		}
		let data = text.concat(radio);
		console.log(data);
		return data;
	}

	checkGender(e) {
		let hiddenState = this.state.hidden;
		for(let prop in hiddenState) {
			if(hiddenState[prop] == false)
			hiddenState[prop] = !hiddenState[prop];
		}
		hiddenState[e.target.value] = !hiddenState[e.target.value];
		this.setState({
			hidden: hiddenState
		});   
	}

	clickHandler(e) {
		this.setState({
			key: +e.target.value
		});
	}

	render() {
		let elems = this.state.structure.map((e, num) => {
			return <Elem key={num} data={e} hidden={this.state.hidden} 
						checkGender={this.checkGender.bind(this)} col={this.state.key}/>
		});
		return	<div>
					{elems}
					<Btn_pan click={this.clickHandler.bind(this)}/>
				</div>
	}
}

window.onload = function(){
render(<App />,document.getElementById('root'));
}