

const  title = {
    title:"Indecision App",
    subtitle:"JSX",
    options:[]
}
const onFormSubmit=(e)=>{
    e.preventDefault();
   
    const option = e.target.elements.option.value;

    if(option){
        title.options.push(option)
        e.target.elements.option.value ='';
        renderDecision()
    }
}

const deleteData = ()=>{
    title.options=[]
    renderDecision()
}   
const makeDecision =()=>{
    const randomNum = Math.floor(Math.random()*title.options.length);
    const option1 = title.options[randomNum];
    // console.log(option)
    alert(option1)
}
var appRoot = document.getElementById("app")

const renderDecision = ()=>{
    var template = (
        <div>
            <h1>{title.title}</h1>
            {title.subtitle && <p>{title.subtitle}</p>}
            <p>{title.options.length >0 ?"here are your options":"No options"}</p>
            <button disabled = {title.options.length===0} onClick={makeDecision}>what should I do</button>
            <button onClick={deleteData}>Remove All</button>
            <ol>
             {title.options.map((str)=><li key={str}>List:{str}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type ="text" name="option" />
                <button>Add option</button>
            </form>
            </div>)

ReactDOM.render(template,appRoot)
}

renderDecision()