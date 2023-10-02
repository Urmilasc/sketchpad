import { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Board = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
  const canvasRef = useRef(null);
  const shouldDraw = useRef(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const changeConfig = () => {
      // iss changeConfig function se hum pencil stroke ka colour and pencil/Eraser ka size de rahe hai context ko
      // data color/size me kuch aise aarha hai hai pehle frontend se Toolbox se -> toolSlice.js -> store.js -> Provider -> Board.js me se again -> Frontend me Toolbox par
      context.strokeStyle = color;
      context.lineWidth = size;
    };

    console.log(color, size);

    changeConfig();
  }, [color, size]);

  //  useLayoutEffect hooks runs before the actual paint happening on the canvas or before the browser paint
  // useLayoutEffect runs before the useEffect
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvasRef.current.width = window.innerWidth; //canvas.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight; //canvas.height = window.innerHeight;

    const beginPath = (x, y) => {
      context.beginPath(); //this beginPath , moveTo, lineTo and Stroke , cloasePath are function coming from canvas api via getContext function
      context.moveTo(x, y); // this four function are doing the magic off drwaing on the canvas
    };

    const drawLine = (x, y) => {
      context.lineTo(x, y);
      context.stroke();
    };

    const handleMouseDown = (e) => {
      shouldDraw.current = true;
      beginPath(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
      if (!shouldDraw.current) return;

      drawLine(e.clientX, e.clientY);
    };

    const handleMouseUp = (e) => {
      shouldDraw.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // console.log(color, size);
  // console.log(activeMenuItem);
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
