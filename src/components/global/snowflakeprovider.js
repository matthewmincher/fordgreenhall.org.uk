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

function renderSnow(ctx, width, height, snowflakes){
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
	}

	requestAnimationFrame(() => renderSnow(ctx, width, height, snowflakes));
}

const SnowflakeProvider = ({ count, children }) => {
	const container = useRef();
	const canvas = useRef();

	useEffect(function(){
		let ctx = canvas.current.getContext('2d'),
			width = container.current.clientWidth,
			height = container.current.clientHeight;

		canvas.current.width = width;
		canvas.current.height = height;
		ctx.fillStyle = '#FFFFFF';

		var snowflakes = [];
		for(let i = 0; i < count; i++){
			snowflakes.push(new Snowflake(width, height));
		}

		requestAnimationFrame(() => renderSnow(ctx, width, height, snowflakes))
	});

	return (
		<div ref={container}>
			<canvas ref={canvas} style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none', zIndex: 999 }} />
			{children}
		</div>
	)
}

export default SnowflakeProvider