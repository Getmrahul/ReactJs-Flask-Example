var Admin = React.createClass({
	render: function() {
		return (
			<div>
				<AddCategory />
				<div className="ui horizontal divider">
					Or
				</div>
				<AddSite />
			</div>
		);
	}
});


var Main = React.createClass({
	render: function() {
		return (
			<div>
				
				<div className="ui ten wide column container segment">
					<br/>
					<center><a href="/"><img src="/static/img/srdfvv.png"/></a></center>
					<br/>
					<br/>
					<br/>
					<Admin />
				</div>
				<br/>
				<br/>
			</div>
		);
	}
});


var AddCategory = React.createClass({
	render: function() {
		return (
			<div className="ui center align basic">
				<h3 className="w400">Add Main Category</h3><br/>
				<div className="ui action input">
					<input type="text" placeholder="Type main category..." />
					<button className="ui button">Add</button>
				</div>
				<br/>
				<br/>
			</div>
		);
	}
});

var AddSite = React.createClass({
	render: function() {
		return (
			<div className="ui center align basic">
				<br/>
				<h3 className="w400">Manage College</h3><br/>
				<div className="ui grid">
					<div className="eight wide column">
						<h4>New College</h4>
						<NewCollege />
					</div>
					<div className="eight wide column">
						<h4>Existing College</h4>
						<ExtCollege />
					</div>
				</div>
			</div>
		);
	}
});

var NewCollege = React.createClass({
	componentDidMount: function() {
		$('.ui.dropdown').dropdown();
	},
	render: function() {
		return (
			<div>
				<form className="ui form">
					<div className="field">
						<select className="ui dropdown">
							<option value="">Select Main Category</option>
						</select>
					</div>
					<div className="field">
						<input type="text" placeholder="College Name" />
					</div>
					<div className="field">
						<input type="text" placeholder="Eligibility" />
					</div>
					<div className="field">
						<input type="text" placeholder="University" />
					</div>
					<div className="field">
						<input type="text" placeholder="Hostel Facility (Yes/No)" />
					</div>
					<div className="field">
						<input type="text" placeholder="Transport" />
					</div>
					<div className="field">
						<input type="text" placeholder="Library" />
					</div>
					<div className="field">
						<input type="text" placeholder="Course Type (Corresponence/Regular)" />
					</div>
					<div className="field">
						<input type="text" placeholder="Co-Education (Yes/No)" />
					</div>
					<div className="field">
						<input type="text" placeholder="Other State Quota" />
					</div>
					<div className="field">
						<input type="text" placeholder="Job Opportunities" />
					</div>
					<div className="field">
						<input type="text" placeholder="Scholarship" />
					</div>
					<div className="field">
						<input type="text" placeholder="Education Loan" />
					</div>
					<div className="field">
						<input type="text" placeholder="Lateral Admission" />
					</div>
					<div className="field">
						<input type="text" placeholder="Reservation" />
					</div>
					 <div className="ui button" tabindex="0">Submit</div>
				</form>
			</div>
		);
	}
});

var ExtCollege = React.createClass({
	render: function() {
		return (
			<div>
				<form className="ui form">
					<div className="field">
						<select className="ui dropdown">
							<option value="">Select Main Category</option>
						</select>
					</div>
					<div className="field">
						<select className="ui dropdown">
							<option value="">Select College</option>
						</select>
					</div>
					<div className="ui button" tabindex="0">Submit</div>
				</form>
			</div>
		);
	}
});

ReactDOM.render(
	<Main />,
	document.getElementById("content")
);