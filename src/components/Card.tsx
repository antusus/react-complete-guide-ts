import './Card.css'
import {ReactElement} from "react";

export default function Card(props: { children: ReactElement | ReactElement[], className?: string }) {

    const classes = "card " + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}