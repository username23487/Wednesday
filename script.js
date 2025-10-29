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
    
    // 3. Sayacı bir sonraki harfe taşı
    letterIndex++;

    // 4. Eğer sayaç kelimenin sonuna geldiyse (yani 'Y' harfi eklendikten sonra)
    // hem sayacı sıfırla hem de bir boşluk karakteri ekle.
    if (letterIndex >= targetWord.length) {
        // Metne bir boşluk ekle ki kelime ayrılmış olsun
        currentText += " "; 
        // Sayacı sıfırla ki W harfinden tekrar başlasın
        letterIndex = 0;
    }
    
    // 5. Çıktı alanını güncelle
    outputDiv.textContent = currentText;
});

// Başlangıç mesajı
outputDiv.textContent = "Wednesday'i harf harf oluşturmak için klavyede herhangi bir tuşa basın!";
