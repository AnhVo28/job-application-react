import React, { Component } from 'react'

const options = {
	firstName: '',
	lastName: '',
	age: 0,
	gender: ['male', 'female'],
	skills: [
		{label: 'swimming', checked: true, id: '123'},
		{label: 'reading', checked: false, id: '535'},
		{label: 'cooking', checked: false, id: '909'},
		{label: 'dancing', checked: false, id: '435'}
	],
	languages: ['English', 'Finnish', 'Arabic', 'French', 'Chinese']
}

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: options.firstName,
			lastName: options.lastName,
			age: options.age,
			gender: options.gender[0],
			languages: [],
			skills: options.skills
		}
	}

	render() {
		const genderOptions = options.gender.map((genderOpt, i) => (
			<div key={i}>
				<label htmlFor={genderOpt}>{genderOpt}</label>
				<input
					type="radio"
					name="gender"
					id={genderOpt}
					checked={this.state.gender === genderOpt}
					onChange={() => this.setState({gender: genderOpt})} />
			</div>
		));

		const languageOptions = options.languages.map((language, i) => (
			<div key={i}>
				<label htmlFor={language}>{language}</label>
				<input
					type="checkbox"
					id={language}
					value={language}
					checked={this.state.languages.includes(language)}
					onChange={() => this.setState({
						languages: this.state.languages.includes(language)
							? this.state.languages.filter((lng) => lng !== language)
							: this.state.languages.concat([language])
					})} />
			</div>
		));

		const skillOptions = options.skills.map((skillOpt, i) => (
			<div key={i}>
				<label htmlFor={skillOpt.id}>{skillOpt.label}</label>
				<input
					type="checkbox"
					id={skillOpt.id}
					checked={this.state.skills.find((skill) => skill.label === skillOpt.label).checked}
					onChange={() => {
						const selectedSkillIndex = this.state.skills.findIndex((skill) => skill.label === skillOpt.label)
						const selectedSkill = this.state.skills[selectedSkillIndex]
						const newSkill = {...selectedSkill, checked: !selectedSkill.checked}
						const newSkillsArr = [...this.state.skills.slice(0, selectedSkillIndex), newSkill, ...this.state.skills.slice(selectedSkillIndex + 1)]

						this.setState({
							skills: newSkillsArr
						})
					}} />
			</div>
		))

		return (
			<form>
				{/* First name */}
				<label>First name:</label>
				<input
					type="text"
					value={this.state.firstName}
					onChange={(e) => this.setState({firstName: e.target.value})} />

				<br/>
				<label>Last name:</label>
				<input
					type="text"
					value={this.state.lastName}
					onChange={(e) => this.setState({lastName: e.target.value})} />

				<br/>
				<label>Age:</label>
				<input
					type="number"
					value={this.state.age}
					onChange={(e) => this.setState({age: e.target.value})} />

				<br/>
				<div>Gender:</div>
				{genderOptions}

				<br/>
				<select value={this.state.gender} onChange={(e) => this.setState({gender: e.target.value})}>
					<option value="male">male</option>
					<option value="female">female</option>
				</select>

				<br/>
				<div>Languages:</div>
				{languageOptions}

				<br/>
				<div>Skills:</div>
				{skillOptions}
			</form>
		);
	}
}

export default Form;
