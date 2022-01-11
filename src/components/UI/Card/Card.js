const Card = (props) => {
    const customClasses = props.className ?? '';
    const classes = 'card ' + customClasses;

    return <div className={classes}>{props.children}</div>
}

export default Card;