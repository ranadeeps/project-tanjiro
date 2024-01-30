import styles from '../styles/Piece.module.css'
import img_0  from "/src/images/img_0.jpg";
import img_1  from "/src/images/img_1.jpg";
import img_2  from "/src/images/img_2.jpg";
import img_3  from "/src/images/img_3.jpg";
import img_4  from "/src/images/img_4.jpg";
import img_5  from "/src/images/img_5.jpg";
import img_6  from "/src/images/img_6.jpg";
import img_7  from "/src/images/img_7.jpg";
import img_8  from "/src/images/img_8.jpg";
export default function Piece(params) {
    let id = params.id;
    let val = params.val;
    let cont = params.cont;
    let src=[img_1.src,img_0.src,img_2.src,img_3.src,img_4.src,img_5.src,img_6.src,img_7.src,img_8.src];
    if (id===val) {
        return(
            <>
                <div className={styles.Trans} >
                    <img id={id} className={styles.Image} src={src[cont]}></img>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className={styles.Box} >
                    <img id={id} className={styles.Image} src={src[cont]}></img>
                </div>
            </>
        )
    }

}