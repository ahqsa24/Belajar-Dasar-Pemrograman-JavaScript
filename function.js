function hello (name, origin = "Bandung") {
	return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

rahmat = hello('Rahmat', 'Semarang');
indra = hello ('Indra');

console.log(rahmat);
console.log(indra);