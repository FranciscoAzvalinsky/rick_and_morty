import style from './Button.module.css'

export default function Button ({text, marginTop, value}){
    return(
        <div>
            <button className={style.cssButtonArrowBlack} style={{marginTop:marginTop}} value={value}> {text} </button>
        </div>
    );
}