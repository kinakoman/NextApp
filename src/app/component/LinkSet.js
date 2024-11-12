import { v4 as uuidv4 } from "uuid"
export default function LinkSet({ linkList }) {
    return (
        <>
            <ul>
                {linkList.map((element) => <li key={uuidv4()}>{element}</li>)}
            </ul>
        </>
    )
}