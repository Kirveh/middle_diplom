const valid = () => {
    const Name = document.querySelectorAll('[name="fio"]');
    const Phone = document.querySelectorAll('[name="phone"]');
    const calcBlock = document.getElementById("calc");
    const calcSquareInput = document.getElementById("calc-input");

      
      Name.forEach(Name => {
        Name.addEventListener("input", (e) => {
            e.preventDefault();
            e.target.value = e.target.value.replace(/[^A-Z-a-z-А-Я-а-я\s]+$/i, "");
          });
      });
      
      Phone.forEach(Phone => {
            Phone.addEventListener("input", (e) => {
                e.preventDefault();
                e.target.value = e.target.value.replace(/([^0-9\+])/, "");
            });
        });

    if (calcBlock !== null) {
        calcBlock.addEventListener("input", (e) => {
          e.preventDefault();
          calcSquareInput.value = calcSquareInput.value.replace(/\D+/, "");
        });
    }
  };
  
  export default valid;
