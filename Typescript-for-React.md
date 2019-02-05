**Stateless components in React with Typescript**

Writing stateless React components in TypeScript is simple. Open the app.tsx file inside the src folder and move the div inside the renderfunction to a stateless component.
```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const App = () => <div>Use TypeScript with React</div>;
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
By using components, we can leverage props to change the component’s behavior. Pass a prop named message to the App component and use it inside the function body.

```typescript
const App = ({message}) => <div>{message}</div>;
```

TypeScript will now give us an error saying that the message prop needs to be provided. To resolve this error, re-write the render function as follows:
```typescript
ReactDOM.render(
  <App message="Use TypeScript with React"/>,
  document.getElementById('root')
);
```

This works great for stateless functions. We can take this a step further and annotate this function as React.SFC. Re-write the App component as follows:
```typescript
const App: React.SFC<{message: string}> = ({message}) => <div>{message}</div>;
```
And you can also take the inline prop type definition and move it into a type :
```typescript
type AppProps = {message: string}
const App: React.SFC<AppProps> = ({message}) => <div>{message}</div>;
```

**Stateful components in React with typescript**

To create a stateful component in React, we need to extend the React.Component class. This class takes two generic parameters, props and state.

You can re-write the App component (from above) as a stateful component as shown below:

```typescript
class App extends React.Component {
  render() {
    return(
      <div>Use TypeScript with React</div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

React.Component takes the props as its first argument, React.Component also takes a second generic argument that specifies the type of the state.

```typescript
class App extends React.Component <{message: string}, {count: number}> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  render() {
    return(
      <div onClick={this.increment}>{this.props.message}{this.state.count}</div>
    );
  }
  
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
}
```
