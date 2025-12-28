document.addEventListener('DOMContentLoaded', () => {
    const inputValueEl = document.getElementById('inputValue');
    const outputValueEl = document.getElementById('outputValue');
    const inputTypeEl = document.getElementById('inputType');
    const outputTypeEl = document.getElementById('outputType');

    // Add event listeners for input changes
    inputValueEl.addEventListener('input', convert);
    inputTypeEl.addEventListener('change', convert);
    outputTypeEl.addEventListener('change', convert);

    function convert() {
        const inputValue = parseFloat(inputValueEl.value);
        const inputType = inputTypeEl.value;
        const outputType = outputTypeEl.value;
        let baseValue; // Meters is the base unit

        if (isNaN(inputValue)) {
            outputValueEl.value = '';
            return;
        }

        // 1. Convert input value to the base unit (meters)
        switch (inputType) {
            case 'meters':
                baseValue = inputValue;
                break;
            case 'feet':
                baseValue = inputValue * 0.3048; // 1 foot = 0.3048 meters
                break;
            case 'inches':
                baseValue = inputValue * 0.0254; // 1 inch = 0.0254 meters
                break;
            case 'centimeters':
                baseValue = inputValue * 0.01; 
                break;
        }

        let outputValue;

        // 2. Convert the base value (meters) to the output unit
        switch (outputType) {
            case 'meters':
                outputValue = baseValue;
                break;
            case 'feet':
                outputValue = baseValue / 0.3048;
                break;
            case 'inches':
                outputValue = baseValue / 0.0254;
                break;
            case 'centimeters':
                outputValue = baseValue / 0.01; 
                break;
        }

        outputValueEl.value = outputValue.toFixed(4);
    }
});
