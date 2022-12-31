export const Filter = ({value, onChange}) => {
    return (
        <label>
            find contacts by name <input type="text" value={value} onChange={onChange} />
        </label>
    )
}