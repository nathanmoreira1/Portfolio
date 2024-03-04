import myAvatar from "../assets/me.jpeg"
import me from "../assets/me.png"
import hello from "../assets/hey.png"

export const Avatar = ({isFocus}) => {
    const focusedOptions = {
        width: 400,
        height: 400
    }

    const nonFocusedOptions = {
        width: 100,
        height: 100,
        position: "absolute",
        top: "10px",
        right: "10px"
    }

    const options = isFocus ? focusedOptions : nonFocusedOptions;

    return (
        <img
            src={me}
            alt={"Avatar with illustrative image from author"}
            style={{
                borderRadius: '50%',
                ...options
            }}
        />
    )
}