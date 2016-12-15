import React from 'react';

export default class Input_radio extends React.Component {
	render() {
		let elems = this.props.data.options.map((e, num)=>{
		let hiddenState = Object.keys(this.props.hidden);
			return	<div key={num} className='col-xs-2'>
						<label>{e}</label>
						<input type='radio' name={this.props.data.name} 
							value={hiddenState[num]} onChange={this.props.checkGender}/>	
					</div>
		});
		return 	<div className='col-xs-12'>
					{elems}
				</div>
	}	
} 