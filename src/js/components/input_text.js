import React from 'react';

export default class Input_text extends React.Component {
	render() {
		let params = this.props.data;
		return	<div hidden={this.props.hidden[params.name]} className={'col-xs-'+(12/this.props.col)}>
					<label className='col-xs-3'> {params.name} </label>
					<div className='col-xs-8'>
						<input type='text' placeholder={params.placeholder}
							className='form-control' defaultValue={params.value}/>
					</div>
				</div>
	}
}