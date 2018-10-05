// let Visbility = false

// const btnclick=()=>{
// Visbility=!Visbility
// renderTemplate()
// }

// var appRoot = document.getElementById("app")

// const renderTemplate = ()=>{
// const template = (
//         <div>
//             <h1>Visbility toggle</h1>
//             <button onClick = {btnclick}>{Visbility ? 'Hide Details':'Show Details'}</button>
//             {Visbility && <p>the Details are shown</p>}
//         </div>
//     )
//     ReactDOM.render(template,appRoot)

// }

// renderTemplate()

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state={
            visibility:false
        }
    }
 handleVisibility(){
     this.setState((prevState)=>{
       return{
           visibility:!prevState.visibility
       }
     })

 };
    render(){
        return(
        <div>
            <h1>visibilityToggle</h1>
            <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide Details':'Show Details'}</button>
            {this.state.visibility && <p>the Details are shown</p>}
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById("app"));


