import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {    


  public render(): React.ReactElement<IHelloWorldProps> {
    return (
        <div className="App">
            <div className="container">
                <h1>Hello World</h1>
            </div>
            <div className="container">
            <div className="jumbotron">
                <h1>sample app</h1>
                <p>fkjdsfkjdsfkjds</p>
            </div>
            </div>
        </div>        
    );
  }
}
