function shopping(input) {
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    let totalPrice = 0;

    if (city === "Sofia") {
        switch (product) {
            case 'coffee': totalPrice = 0.50 * quantity; break;
            case 'water': totalPrice = 0.80 * quantity; break;
            case 'beer': totalPrice = 1.20 * quantity; break;
            case 'sweets': totalPrice = 1.45 * quantity; break;
            case 'peanuts': totalPrice = 1.60 * quantity; break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case 'coffee': totalPrice = 0.40 * quantity; break;               
            case 'water': totalPrice = 0.70 * quantity; break; 
            case 'beer': totalPrice = 1.15 * quantity; break;                      
            case 'sweets': totalPrice = 1.30 * quantity;  break;  
            case 'peanuts': totalPrice = 1.50 * quantity; break;               
        }
    } else {
        switch (product) {
            case 'coffee':  totalPrice = 0.45 * quantity;  break;                           
            case 'water': totalPrice = 0.70 * quantity;   break;                        
            case 'beer': totalPrice = 1.10 * quantity; break;                        
            case 'sweets': totalPrice = 1.35 * quantity; break;                       
            case 'peanuts': totalPrice = 1.55 * quantity; break;        
        }
    }

    console.log(totalPrice);
}

shopping(["coffee",
    "Varna",
    "2"])
