import me from "../assets/me.jpeg"

export const Avatar = ({isFocus}) => {
    const focusedOptions = {
        width: 600,
        height: 600,
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
            className={isFocus ? "avatar" : "side-avatar"}
            src={me}
            alt={"Avatar with illustrative image from author"}
            style={{
                borderRadius: '50%',
                ...options
            }}
        />
    )
}