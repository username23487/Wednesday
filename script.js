// Global sabitimiz
const targetWord = "WEDNESDAY";
// Kelimedeki hangi harfin sıradaki olduğunu tutacak sayacımız
let letterIndex = 0; 
// Metin alanımızın içeriği
let currentText = "";

// Çıktı alanını (output div'ini) DOM'dan alalım
const outputDiv = document.getElementById('output');

// Klavye tuşuna basıldığında çalışacak fonksiyon
document.addEventListener('keydown', (event) => {
    // 1. Kelimenin sıradaki harfini al
    const nextLetter = targetWord[letterIndex];

    // 2. Metne sıradaki harfi ekle
    currentText += nextLetter;
    
    // 3. Çıktı alanını güncelle
    outputDiv.textContent = currentText;

    // 4. Sayacı bir sonraki harfe taşı
    letterIndex++;

    // 5. Eğer sayaç kelimenin sonuna geldiyse (yani 'Y' harfinden sonra)
    // sayacı sıfırla ki kelime en baştan (yani 'W' harfinden) tekrar başlasın.
    if (letterIndex >= targetWord.length) {
        letterIndex = 0;
    }
});

// Başlangıç mesajı
outputDiv.textContent = "Başlamak için klavyede herhangi bir tuşa basın ve Wednesday'i harf harf oluşturun!";
