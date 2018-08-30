# react-ant-country-phone
> React ant county phone

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: DEFAULT_VALUE,
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ant-country-phone --registry=https://registry.npm.taobao.org
```

```js
import ReactAntCountryPhone from 'react-ant-country-phone';
```

```scss
// customize your styles:
$react-ant-country-phone-options:(
);

@import 'node_modules/react-ant-country-phone/dist/style.scss';
```


## usage:
```jsx

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

```
