import React from "react";

const style = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid grey',
        borderRadius: 16
    },
    imageContainer: {},
    image: {
        width: 50, 
        height: 50,
        borderRadius: 25
    },
    contentContainer: {
        marginLeft: 8,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
    },
    nameText: {
        color: 'black', 
        fontSize: 16, 
        fontWeight: 'blod'
    },
    commentText: {
        color: 'black', 
        fontSize: 16, 
    }
};

function Comment(props) {
    return (
        <div style={style.wrapper}>
            <div style={style.imageContainer}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Wachten_op_hoog_water_%28beeld_van_Jan_Ketelaar%29_14-08-2023._%28d.j.b%29_05.jpg/1280px-Wachten_op_hoog_water_%28beeld_van_Jan_Ketelaar%29_14-08-2023._%28d.j.b%29_05.jpg"
                    style={style.image} 
                />
            </div>

            <div style={style.contentContainer}>
                <span style={style.nameText}>{props.name}</span>
                <span style={style.commentText}>{props.comment}</span>
            </div>
        </div>
    )
}

export default Comment;