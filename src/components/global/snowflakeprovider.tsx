import * as React from 'react';
import {
  FC,
  MutableRefObject,
  PropsWithChildren,
  Ref,
  RefObject,
  useEffect,
  useRef,
} from 'react';

class Snowflake {
  x = 0;
  y = 0;
  vy = 0;
  vx = 0;
  r = 0;
  o = 0;

  constructor(width: number, height: number) {
    this.reset(width, height);
  }

  reset(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.vy = 1 + Math.random() * 3;
    this.vx = 0.5 - Math.random();
    this.r = 1 + Math.random() * 2;
    this.o = 0.5 + Math.random() * 0.5;
  }
}

function renderSnow(
  canvasRef: RefObject<HTMLCanvasElement | undefined>,
  snowflakes: Snowflake[],
  density: number,
  frameRef: MutableRefObject<number | undefined>,
) {
  if (!canvasRef.current) {
    return;
  }

  const width = canvasRef.current.width,
    height = canvasRef.current.height,
    maxSnowflakes = snowflakeCountForDimensions(width, height, density),
    canvas = canvasRef.current,
    ctx = canvas.getContext('2d');

  if (!ctx) {
    return;
  }

  ctx.fillStyle = '#FFFFFF';
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < snowflakes.length; i++) {
    const snowflake = snowflakes[i];

    snowflake.y += snowflake.vy;
    snowflake.x += snowflake.vx;

    ctx.globalAlpha = snowflake.o;
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    if (snowflake.y > height) {
      snowflake.reset(width, height);
    }

    if (i >= maxSnowflakes) {
      break;
    }
  }

  frameRef.current = requestAnimationFrame(() =>
    renderSnow(canvasRef, snowflakes, density, frameRef),
  );
}

function onCanvasContainerChanged(
  container: HTMLElement,
  canvas: HTMLCanvasElement,
) {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
}

function snowflakeCountForDimensions(
  width: number,
  height: number,
  density: number,
) {
  return Math.ceil((width * height) / density);
}

type Props = PropsWithChildren<{
  pixelsPerFlake: number;
}>;

const SnowflakeProvider: FC<Props> = ({ children, pixelsPerFlake }) => {
  const container = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();

  pixelsPerFlake = pixelsPerFlake ?? 2000;

  useEffect(function () {
    if (!container.current || !canvas.current) {
      return;
    }

    const width = container.current.clientWidth,
      height = container.current.clientHeight,
      count = snowflakeCountForDimensions(width, height, pixelsPerFlake);

    const snowflakes: Snowflake[] = [];
    for (let i = 0; i < count; i++) {
      snowflakes.push(new Snowflake(width, height));
    }

    onCanvasContainerChanged(container.current, canvas.current);

    frameRef.current = requestAnimationFrame(() =>
      renderSnow(canvas, snowflakes, pixelsPerFlake, frameRef),
    );
    const onResize = () =>
      onCanvasContainerChanged(container.current!, canvas.current!);

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(frameRef.current!);
    };
  });

  return (
    <div ref={container}>
      <canvas
        ref={canvas}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: 100,
        }}
      />
      {children}
    </div>
  );
};

export default SnowflakeProvider;
