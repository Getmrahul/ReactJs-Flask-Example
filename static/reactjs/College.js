var Main = React.createClass({
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
			   this.setState({data: data.data});
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
					<h2 className="ui center header">College Details</h2>
					<br/>
					<Details data={this.state.data}/>
				</div>
				<br/>
				<br/>
			</div>
		);
	}
});

var pStyle = {
	fontSize: "18px",
	fontWeight: "200",
	marginBottom: "15px"
};

var Details = React.createClass({
	
	render: function() {
		var details = this.props.data.map(function(d){
			return (
				<div>
					<p style={pStyle}><b>{d[0]}</b>: {d[1]}</p>
				</div>
			);
		});
		return (
			<div className="ui grid">
				<div className="four wide column"></div>
				<div className="ten wide column">
					{details}
				</div>
				<div className="four wide column"></div>
			</div>
		);
	}
});

var url = "/api/college/" + $("#server_chat").val();

ReactDOM.render(
	<Main url={url} />,
	document.getElementById("content")
);