import styles from '../styles/Piece.module.css'
export default function Piece(params) {
    let id = params.id;
    let val = params.val;
    let cont = params.cont;
    if (id===val) {
        return(
            <>
                
                <div className={styles.Trans} id={id}>
                    {cont}
                </div>
            </>
        )
    }
    else{
        return(
            <>
                
                <div className={styles.Box} id={id}>
                    {id}
                </div>
            </>
        )
    }

}