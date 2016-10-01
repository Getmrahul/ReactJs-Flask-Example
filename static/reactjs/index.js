var Index = React.createClass({
	getInitialState: function() {
		return {
			data: [] 
		};
	},
	componentDidMount: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
			   this.setState({data: data.category});
			}.bind(this),
			error: function(xhr, status, err) {
			   console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function() {
		return (
			<div>
				
				<div className="ui ten wide column container segment">
					<br/>
					<center><a href="/"><img src="/static/img/srdfvv.png"/></a></center>
					<br/>
					<br/>
					<br/>
					<div className="ui grid">
						<MainCat  data={this.state.data}/>
					</div>
					<br/>
					<br/>
				
					<div className="ui grid">
						<div className="four wide column"></div>
						<div className="eight wide column">
							<br/>
							<Colleges />
						</div>
						<div className="four wide column"></div>
					</div>
				</div>
				<br/>
				<br/>
			</div>
		);
	}
});

var MainCat = React.createClass({

	
	componentDidMount: function() {
		$('.ui.dropdown').dropdown();
	},
	
	render: function() {
		var showCollege = function (id, name) {
			var colleges = [];
			$('#list_title').text("College List for "+name);
			$.ajax({
				url: "/api/colleges/"+id,
				dataType: 'json',
				cache: false,
				success: function(data) {
				   colleges = data.colleges;
				   ReactDOM.render(
						<CollegeList data={colleges} />, 
						document.getElementById("clg_div")
					);
				   $('html, body').animate({
				        scrollTop:$("#clg_div").offset().top
				    }, 'slow');
				}.bind(this),
				error: function(xhr, status, err) {
				   console.error(this.props.url, status, err.toString());
				}.bind(this)
			});

			
		};
		var cats = this.props.data.map(function(d){
			return (
				<a className="card" key={d.id} onClick={showCollege.bind(this, d.id, d.name)} data-id={d.id}>
					<div className="image">
						<img className="ui wireframe image" src={d.img}/>
					</div>
					<div className="extra">
						<center>{d.name}</center>
					</div>
				</a>
			);
		});
		return (
			<div className="ui four cards">
				{cats}
			</div>
		);
	}
});


var Colleges = React.createClass({
	render: function() {
		return (
			<div>
				<h4 className="ui center w200" >Click on a Armed Force to get College list</h4>
				<div className="ui divider"></div>
				<h2 className="ui center" id="list_title"></h2><br/>
				<div id="clg_div"></div>
			</div>
		);
	}
});

var CollegeList = React.createClass({
	render: function() {

		var cls = this.props.data.map(function(clg){
			return (
				<div>
				<div className="item" key={clg.id}>
					<div className="content">
						<h3 className="header">{clg.name}</h3>
						<div className="description">
							<p><b>Courses</b>: {clg.courses}</p>
							<p><b>Location</b>: {clg.location}</p>
						</div>
						<div className="extra"><br/>
							<div className="ui right floated">
								<button className="ui basic button">Know More</button>
							</div>
						</div>
					</div>
				</div>
				<div className="ui divider"></div>
				</div>
			);
		});

		return (
			<div>
				<div className="ui relaxed items" id="college_content">
					{cls}
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<Index url="/api/mcat" />,
	document.getElementById("content")
);