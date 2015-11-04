var WordListContainer = React.createClass({
    render:function(){
        var createItem = function(text, index) {
            return <Word key={index + text} text={text}/>;
        };
        return React.createElement(ReactReorderable,{
            handle:'.draggable-handle',
            mode:'list',
            onDragStart: function (data) {},
            onDrop: function (data) {},
            onChange: function (data) {}
        },this.props.items.map(createItem));
    }
});
var Word = React.createClass({
    render: function() {
        return React.createElement('div',{className:'draggable-handle'},this.props.text);
    }
});

var WordListAll = React.createClass({
    getInitialState: function() {
        return {items: [], text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function() {
        return (
                <div>
                <h3>想說的話</h3>
                <WordListContainer items={this.state.items} text={this.state.text}/>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} value={this.state.text} />
                <button>{'輸入'}</button>
                </form>
                </div>
               );
    }
});

ReactDOM.render(<WordListAll />, document.getElementById('sidePanel'));


