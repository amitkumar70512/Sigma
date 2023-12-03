// src/components/Spinner.tsx
import React, { useState, ChangeEvent } from 'react';
import styled, { keyframes } from 'styled-components';
import HtmlCss from '../../Styles/HtmlCss';

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

const SizeInput = styled.input`
  width: 20%;
`;

const SpeedInput = styled.input`
  width: 20%;
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

    // Function to generate HTML and CSS code
    const generateCode = () => {
        const { size, color, background, speed } = spinnerAttributes;

        const htmlCode = `
      <div style="width: ${size}px; height: ${size}px; border: 4px solid ${color}; border-top: 4px solid ${background}; border-radius: 50%; animation: spin ${speed}s linear infinite;"></div>
    `;

        const cssCode = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .spinner {
        width: ${size}px;
        height: ${size}px;
        border: 4px solid ${color};
        border-top: 4px solid ${background};
        border-radius: 50%;
        animation: spin ${speed}s linear infinite;
      }
    `;

        return { htmlCode, cssCode };
    };

    const { htmlCode, cssCode } = generateCode();

    return (
        <div style={{ display: 'flex', width: '100vw' }}>
            <h2>Spinner Creator</h2>

            <div className="left" style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', minWidth: '40%', maxWidth: '40%' }}>
                <SpinnerWrapper {...spinnerAttributes} />
                <div>
                    <label>Size:</label>
                    <SizeInput
                        type="range"
                        min={20}
                        max={150}
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
                    <SpeedInput
                        type="range"
                        min={0.1}
                        max={5}
                        step={0.1}
                        value={spinnerAttributes.speed}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            updateSpinnerAttributes('speed', parseFloat(e.target.value))
                        }
                    />
                </div>
            </div>,
            <div className='right' style={{ display: 'flex', flexFlow: 'column', minWidth: '60%' }}>
                <h3>Generated Code</h3>
                <pre  ><HtmlCss /> {htmlCode}</pre>
                <pre style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>{cssCode}</pre>
            </div>
        </div>
    );
};

export default Spinner;
