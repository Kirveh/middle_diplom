const calculator = () => {
    const calcBlock = document.getElementById("calc");
    const calcTypeMat = document.getElementById("calc-type-material");
    const calcType = document.getElementById("calc-type");
    const calcSquare = document.getElementById("calc-input");
    const total = document.getElementById("calc-total");
  
    const countCalculator = () => {
      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      const calcTypeMatValue = +calcTypeMat.options[calcTypeMat.selectedIndex].value;
      const calcSquareValue = calcSquare.value;
  
      let totalValue = 0;
  
      if (calcType.value && calcTypeMatValue && calcSquare.value) {
        totalValue = calcTypeValue * calcTypeMatValue * calcSquareValue;
      } else {
        totalValue = 0;
      }
     
      total.placeholder = Math.round(totalValue) + ' ' + 'Руб.'
    };
  
    if (calcBlock !== null) {
      calcBlock.addEventListener("input", (e) => {
      if (
        e.target === calcType ||
        e.target === calcTypeMat ||
        e.target === calcSquare
      ) {
        countCalculator();
      }
    });
    }
    
  };
  
  export default calculator;