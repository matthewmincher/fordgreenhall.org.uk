import * as React from "react";
import {useEffect, useRef} from "react";

class Snowflake {
	x = 0;
	y = 0;
	vy = 0;
	vx = 0;
	r = 0;

	constructor(width, height){
		this.reset(width, height);
	}

	reset(width, height){
		this.x = Math.random() * width;
		this.y = Math.random() * -height;
		this.vy = 1 + Math.random() * 3;
		this.vx = 0.5 - Math.random();
		this.r = 1 + Math.random() * 2;
		this.o = 0.5 + Math.random() * 0.5;
	}
}

function renderSnow(canvasRef, snowflakes, density, frameRef){
	let width = canvasRef.current.width,
		height = canvasRef.current.height,
		maxSnowflakes = snowflakeCountForDimensions(width, height, density),
		canvas = canvasRef.current,
		ctx = canvas.getContext('2d');

	ctx.fillStyle = '#FFFFFF';
	ctx.clearRect(0, 0, width, height);

	for(let i = 0; i < snowflakes.length; i++){
		let snowflake = snowflakes[i];

		snowflake.y += snowflake.vy;
		snowflake.x += snowflake.vx;

		ctx.globalAlpha = snowflake.o;
		ctx.beginPath();
		ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fill();

		if(snowflake.y > height){
			snowflake.reset(width, height);
		}

		if(i >= maxSnowflakes){
			break;
		}
	}

	frameRef.current = requestAnimationFrame(() => renderSnow(canvasRef, snowflakes, density, frameRef));
}
function onCanvasContainerChanged(containerRef, canvasRef){
	canvasRef.current.width = containerRef.current.clientWidth;
	canvasRef.current.height = containerRef.current.clientHeight;
}
function snowflakeCountForDimensions(width, height, density){
	return Math.ceil((width * height) / density);
}

const SnowflakeProvider = ({ children, pixelsPerFlake }) => {
	const container = useRef();
	const canvas = useRef();
	const frameRef = useRef(null);

	pixelsPerFlake = pixelsPerFlake ?? 2000;

	useEffect(function(){
		let width = container.current.clientWidth,
			height = container.current.clientHeight,
			count = snowflakeCountForDimensions(width, height, pixelsPerFlake);

		let snowflakes = [];
		for(let i = 0; i < count; i++){
			snowflakes.push(new Snowflake(width, height));
		}

		onCanvasContainerChanged(container, canvas);

		frameRef.current = requestAnimationFrame(() => renderSnow(canvas, snowflakes, pixelsPerFlake, frameRef));
		const onResize = () => onCanvasContainerChanged(container, canvas);

		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
			window.cancelAnimationFrame(frameRef.current);
		}
	});

	return (
		<div ref={container}>
			<canvas ref={canvas} style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none', zIndex: 100 }} />
			{children}
		</div>
	)
}

export default SnowflakeProvider