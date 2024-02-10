// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div" , {id:"parent"}, 
    React.createElement("div", {id:"child1"}, 
    [React.createElement("h1", {}, "my name is h1 tag"), 
    React.createElement("h2", {}, "my name is h2 tag")]
    ),
    React.createElement("div", {id:"child2"}, 
    [React.createElement("h1", {}, "my name is h1 tag"), 
    React.createElement("h2", {}, "my name is h2 tag")]
    ));


// console.log(parent);
const root1 = ReactDOM.createRoot(document.getElementById("header"))
root1.render(parent);