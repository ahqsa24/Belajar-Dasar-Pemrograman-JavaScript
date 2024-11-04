function categorizeNumber(input) {
    // 1. Periksa apakah input adalah number, jika bukan, lemparkan error
    if (typeof input !== 'number') {
        throw new Error('Input harus berupa bilangan bulat');
    }

    // 5. Jika input adalah nol, kembalikan dengan nilai "Nol"
    if (input === 0) return 'Nol';

    // 6. Jika input negatif, kembalikan dengan nilai "Negatif"
    if (input < 0) return 'Negatif';

    // 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap"
    if (input % 2 === 0) return 'Genap';

    // 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima"
    // Bilangan prima hanya berlaku untuk bilangan positif > 1
    let isPrime = true;
    if (input > 1) {
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) return 'Prima';
    }

    // 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil"
    return 'Ganjil';
}

// Contoh penggunaan
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0));  // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

// Menangani input bukan number
try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
