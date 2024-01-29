import { useState } from 'react';
import styles from '../styles/Box.module.css'
import Piece from './Piece';
import solution from '../images/solution.jpg'
export default function Box(params) {
    const [matrix,setMatrix] = useState([1,1,1,1,1,1,1,1,0]);
    const [blur,setBlur] = useState(8);
    let Pieces=[];
    for (let index = 0; index <= 8; index++) {
        Pieces.push(<Piece key={index} id={index} val={blur} cont={index}></Piece>)   
    }
    return(
        <>
            <h1 className={styles.heading}>Project-Puzzle</h1>
            <div className={styles.BigBox}>
                <div className={styles.Box}>
                    {Pieces}
                </div>
                <div>
                    <img src={solution.src} width={"300px"} height={"300px"} alt='solution' ></img>
                </div>
            </div>
            <div className={styles.Margin}></div>
            <div className={styles.ButtonBox}>
                <div className={styles.Button}></div>
                <div className={styles.Button}> <button onClick={upf} className={styles.btn}>Up</button>  </div>
                <div className={styles.Button}></div>
                <div className={styles.Button}><button onClick={leftf} className={styles.btn}>Left</button>  </div>
                <div className={styles.Button}></div>
                <div className={styles.Button}><button onClick={rightf} className={styles.btn}>Right</button>  </div>
                <div className={styles.Button}></div>
                <div className={styles.Button}><button onClick={downf} className={styles.btn}>Down</button>  </div>
                <div className={styles.Button}></div>
            </div>
        </>
    )
    function upf(params) {
       let ind=matrix.indexOf(0);
       if(ind+3<=8){
            setBlur(ind+3);
            matrix[ind]=1;
            matrix[ind+3]=0;
            let prev = document.getElementById(ind+3).getAttribute("src"); 
            document.getElementById(ind+3).setAttribute("src",document.getElementById(ind).getAttribute("src"));
            document.getElementById(ind).setAttribute("src",prev)
       }
       console.log(matrix);
    }
    function downf(params) {
        let ind=matrix.indexOf(0);
        if(ind-3>=0){
            setBlur(ind-3);
            matrix[ind]=1;
            matrix[ind-3]=0;
            let prev = document.getElementById(ind-3).getAttribute("src"); 
            document.getElementById(ind-3).setAttribute("src",document.getElementById(ind).getAttribute("src"));
            document.getElementById(ind).setAttribute("src",prev)
        }
        console.log(matrix);
    }
    function leftf(params) {
        let ind=matrix.indexOf(0);
        if(!(ind+1==3||ind+1==6||ind+1==9)&&ind+1>=0&&ind+1<=8){
            setBlur(ind+1)
            matrix[ind]=1;
            matrix[ind+1]=0;
            let prev = document.getElementById(ind+1).getAttribute("src"); 
            document.getElementById(ind+1).setAttribute("src",document.getElementById(ind).getAttribute("src"));
            document.getElementById(ind).setAttribute("src",prev)
        }
        console.log(matrix);
    }
    function rightf(params) {
        
        let ind=matrix.indexOf(0);
        if(!(ind-1==2||ind-1==5||ind-1==8)&&ind-1>=0&&ind-1<=8){
            setBlur(ind-1);
            matrix[ind]=1;
            matrix[ind-1]=0;
            let prev = document.getElementById(ind-1).getAttribute("src"); 
            document.getElementById(ind-1).setAttribute("src",document.getElementById(ind).getAttribute("src"));
            document.getElementById(ind).setAttribute("src",prev)
        }
        console.log(matrix);
    }
}
