import style from './Button.module.css'

export default function Button ({text, marginTop}){
    return(
        <div>
            <button className={style.cssButtonArrowBlack} style={{marginTop:marginTop}}> {text} </button>
        </div>
    );
}