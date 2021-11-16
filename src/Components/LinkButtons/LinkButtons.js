import "./LinkButtons.css"
function LinkButton (props) {
    return(

            <a href={props.link} className = "Button1">
                Take a look
            </a>
    )
}
export default LinkButton