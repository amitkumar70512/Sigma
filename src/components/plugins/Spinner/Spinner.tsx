// src/components/Spinner.tsx
import React, { useState, ChangeEvent } from 'react';
import styled, { keyframes } from 'styled-components';

interface SpinnerAttributes {
    size: number;
    color: string;
    background: string;
    speed: number;
}

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div<SpinnerAttributes>`
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 4px solid ${({ color }) => color};
  border-top: 4px solid ${({ background }) => background};
  border-radius: 50%;
  animation: ${rotateAnimation} ${({ speed }) => speed}s linear infinite;
`;

const Spinner: React.FC = () => {
    // State to manage spinner attributes
    const [spinnerAttributes, setSpinnerAttributes] = useState<SpinnerAttributes>({
        size: 50,
        color: '#3498db',
        background: '#fff',
        speed: 1,
    });

    // Function to update spinner attributes
    const updateSpinnerAttributes = (attribute: keyof SpinnerAttributes, value: string | number) => {
        setSpinnerAttributes((prevAttributes) => ({
            ...prevAttributes,
            [attribute]: value,
        }));
    };

    return (
        <div>
            <h2>Spinner Creator</h2>
            <SpinnerWrapper {...spinnerAttributes} />
            <div>
                <label>Size:</label>
                <input
                    type="number"
                    value={spinnerAttributes.size}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateSpinnerAttributes('size', parseInt(e.target.value, 10))
                    }
                />
            </div>
            <div>
                <label>Color:</label>
                <input
                    type="color"
                    value={spinnerAttributes.color}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateSpinnerAttributes('color', e.target.value)
                    }
                />
            </div>
            <div>
                <label>Background:</label>
                <input
                    type="color"
                    value={spinnerAttributes.background}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateSpinnerAttributes('background', e.target.value)
                    }
                />
            </div>
            <div>
                <label>Speed:</label>
                <input
                    type="number"
                    step="0.1"
                    value={spinnerAttributes.speed}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateSpinnerAttributes('speed', parseFloat(e.target.value))
                    }
                />
            </div>
        </div>
    );
};

export default Spinner;
