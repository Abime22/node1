function printEvenNumbers(current = 0, max = 100) {
    if (current > max) return;
  
    if (current % 2 === 0) {
      console.log(current);
    }
  
   
    printEvenNumbers(current + 1, max);
  }
  
  printEvenNumbers();
  