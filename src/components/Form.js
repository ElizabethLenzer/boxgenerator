import React from 'react';

const Form = (props) => {

    const { BoxDetails, SetBoxDetails } = props;
    const { Boxes, SetBoxes } = props;

    const onChange = (e) => {
        SetBoxDetails({
            ...BoxDetails,
            [e.target.name]: e.target.value,
        })
    }

    const CreateBox = (e) => {
        e.preventDefault();
        SetBoxes(Boxes => [...Boxes, { "color": BoxDetails.color, "size": BoxDetails.size }]);
    }

    return (
        <form onSubmit={CreateBox}>
            <div>
                <label htmlFor="color">Color</label>
                <input onChange={onChange} type="text" name="color" />
                <label htmlFor="size">Size</label>
                <input onChange={onChange} type="text" name="size" />
                <button value="color">Add</button>
            </div>
        </form>
    )
}

export default Form;