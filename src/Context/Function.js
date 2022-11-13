import { ThemeContext } from "./../App"

function Function(){
    const themeStyle = (dark)=>{
        return{
            backgroundColor: dark ? '#2c3e50' : '#f1c40f',
            color: dark ? '#ecf0f1' : '#2c3e50',
        }
    }
    return (
        <ThemeContext.Consumer>
            {(dark)=><button style={themeStyle(dark)}>Class Component</button>}
        </ThemeContext.Consumer>
    )
}

export default Function