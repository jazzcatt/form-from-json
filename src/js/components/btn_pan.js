import React from 'react';

export default class Btn_pan extends React.Component {
	render() {
		return	<div className='col-xs-6'>
					<input type='button' value='1' onClick={this.props.click} 
					className={'col-xs-1 btn btn-primary'}/>
					<input type='button' value='2' onClick={this.props.click} 
					className={'col-xs-1 btn btn-primary'}/>
					<input type='button' value='3' onClick={this.props.click} 
					className={'col-xs-1 btn btn-primary'}/>
				</div>
	}
} 