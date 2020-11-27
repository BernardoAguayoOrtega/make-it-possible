import { useMemo } from 'react';
import { Chart as C } from 'react-charts';

export default function Chart() {
  const data = useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          [0, 5],
          [1, 8],
          [2, 10],
          [3, 2],
          [4, 10],
        ],
      },
      {
        label: 'Series 2',
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <div
      style={{
        height: '200px',
        padding: '1rem',
        marginRight: '2rem',
        width: '200px',
      }}
    >
      <C data={data} axes={axes} tooltip />
    </div>
  );
}
