function fibonacci(n) {
    // Pengecekan untuk nilai n yang kurang dari 0
    if (n < 0) {
        return [];
    }
    // Pengecekan untuk nilai n yang sama dengan 0 atau 1
    return n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
