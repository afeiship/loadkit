import './dev.scss';
import ReactAntCountryPhone from './main';

/*===example start===*/

// install: npm install afeiship/react-ant-country-phone --save
// import : import ReactAntCountryPhone from 'react-ant-country-phone'

class App extends React.Component{
  state = {
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = inEvent => {
    console.log(inEvent);
  };

  render(){
    return (
      <div className="hello-react-ant-country-phone">
        <ReactAntCountryPhone onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
