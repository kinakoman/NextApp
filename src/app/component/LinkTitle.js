export default function LinkTitle({ children }) {
    return (
        <div style={listTitleStyle}>
            {children}
        </div>
    )
}
const listTitleStyle = {
    fontSize: "30px",
    fontWeight: "bold"
}