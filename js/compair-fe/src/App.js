import React, {Component} from 'react';
import * as Logger from "./Logger";

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            pageExperience: "compairEntry",
            ready: false,
            PageToLoad: undefined,
            ContextProps: {
                referrer: undefined
            }
        }
    }

    router({
               experience = this.state.pageExperience,
               contextProps = this.state.ContextProps
           }){

        Logger.log.feature("Render in. Experience: "+ experience);
        let toRender;
        if(experience === "compairEntry") {
            toRender = import('./components/CompairEntry/CompairEntry');
        }

        return toRender.then( PageToLoad => {
            const LoadedPage = PageToLoad.default || PageToLoad;
            this.setState({
                PageToLoad: props => <LoadedPage {...props} {...contextProps} />,
                ready: true
            });

        }).catch( e => {

            Logger.log.error(`Mounting Component Error:  + ${e}`);
        })

    }

    componentDidMount(){
        Logger.log.feature("ComponentIn");
        this.router({
            experience: this.state.pageExperience,
        });
    }



    render() {
        const PageToLoad = this.state.PageToLoad
        const ready = this.state.ready;

        return ready ? (<PageToLoad
            router={this.router}

        />) : null;
    }

}
