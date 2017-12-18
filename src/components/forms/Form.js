import React, {Component} from 'react';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fields: this.props.fields.slice(),
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e, i) {
		const val = e.target.value;
		const fields = this.state.fields.slice();

		fields[i].value = val;

		this.setState({fields});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.fields);
	}

	render() {
		return (
			<form action="" method="" onSubmit={this.onSubmit}>
				{
					this.state.fields.map((field, i) => {
						return (
							<div key={i}>
								<label>{field.label}</label>
								<input 
									type={field.type} 
									value={field.value} 
									onChange={(e) => this.onChange(e, i) }
								/>
							</div>
						)
					})
				}
				{ this.props.btnRequired ? 
					<input type="submit" value={this.props.submitText} className={this.props.submitClass}/>
					:
						null
				}
			</form>
		);	
	}
	
};

export default Form;