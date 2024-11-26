import React from "react";

class Class_Apple extends React.Component{
    render(){
        return (
            <h2>
                I'm Apple!!!!
            </h2>
        )
    }
}

export default Class_Apple;

// class -->  is a keyword define of class 
// Class_Apple --> class Name
// extends --> is the keyword for the  subclass that inherits properties and methods from the parent class.

// React.Component --> he parent class from which Class_Apple inherits. 
// render --> very class-based React component. This method defines what the component should display on the screen.
// export: Used to make the component available for import in other files
//ndicates that this is the default export of the file, meaning you can import it without using curly braces:.