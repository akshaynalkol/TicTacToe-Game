import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const box7 = useRef(null);
    const box8 = useRef(null);
    const box9 = useRef(null);

    const box_array = [box1, box2, box3, box4, box4, box5, box6, box7, box8, box9];

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${cross_icon} class="w-50 px-2"/>`;
            data[num] = "x";
            setCount(count + 1);
        }
        else {
            e.target.innerHTML = `<img src=${circle_icon} class="w-50 px-2"/>`;
            data[num] = "o";
            setCount(count + 1);
        }
        console.log(data);
        checkWin();
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !=="") {
            won(data[2]);
            console.log(11);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
            console.log(12);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
            console.log(13);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
            console.log(21);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
            console.log(22);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
            console.log(23);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
            console.log(31);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
            console.log(32);
        }  
    }

    const won = (winner) => {
        setLock(true);
        if (winner === 'x') {
            titleRef.current.innerHTML = `Congratulation : <img src=${cross_icon} class="px-2" height=${35}/> Won`;
        }
        else {
            titleRef.current.innerHTML = `Congratulation : <img src=${circle_icon} class="px-2" height=${35}/> Won`;
        }
    }

    const reset = () => {  
        setCount(0);
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = 'Tic Tac Toe Game';
        box_array.map((e) => {
            e.current.innerHTML = "";
        })
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
                <div className="container text-center">
                    <h1 className='text-color fw-bold title' ref={titleRef}>Tic Tac Toe Game</h1>
                    <div className='row my-4'>
                        <div className='col-lg-5 col-md-9 col-12 mx-auto'>
                            <div className="row">
                                <div className="col-4 boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
                                <div className="col-4 boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
                                <div className="col-4 boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
                            </div>
                            <div className="row">
                                <div className="col-4 boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
                                <div className="col-4 boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
                                <div className="col-4 boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
                            </div>
                            <div className="row">
                                <div className="col-4 boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
                                <div className="col-4 boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
                                <div className="col-4 boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-info px-5 py-2 rounded-pill' onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default TicTacToe;
