'use client';

import { Layer, Stage, Text } from 'react-konva';

export function Arkanoid() {
  return (
    <>
      <h1>Arkanoid abcefg</h1>
      <Stage width={400} height={400}>
        <Layer>
          <Text text={'test'} />
        </Layer>
      </Stage>
    </>
  );
}
