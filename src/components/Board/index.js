import { useEffect, useRef } from "react";

const Board = () => {
    const canvasRef = useRef(null)

    useEffect(()=> {
        if(!canvasRef.current) return 
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        //when mounting
        canvasRef.current.width = window.innerWidth;     //canvas.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;    //canvas.height = window.innerHeight;
    } , [])
  return (
    
    <canvas ref={canvasRef} ></canvas>

  );
};

export default Board;
