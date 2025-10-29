// Global değişkenlerimizi tanımlayalım
const targetWord = "WEDNESDAY";
let currentText = "";

// Çıktı alanını (output div'ini) DOM'dan alalım
const outputDiv = document.getElementById('output');

// Klavye tuşuna basıldığında çalışacak fonksiyon
document.addEventListener('keydown', (event) => {
    // Sadece harf tuşları için kontrol edebiliriz, ancak basitlik için herhangi bir tuşu kabul edelim.
    // Örneğin, 'a' ile 'z' arasındaki tuşlar veya büyük/küçük harf olabilir.
    
    // Klavyeden basılan tuşu kontrol etme:
    // Sadece alfanümerik tuşlar veya boşluk tuşu gibi anlamlı tuşlar için ekleme yapabiliriz.
    // Şimdilik basılan her tuşu, 'bir harf daha eklendi' şeklinde kabul ediyoruz.
    
    // Her tuşa basışta metne 'WEDNESDAY' kelimesini ekle
    currentText += targetWord;
    
    // Çıktı alanını güncelle
    outputDiv.textContent = currentText;

    // Metin çok uzarsa tarayıcıyı zorlamamak için küçük bir sınırlama eklenebilir.
    // Ancak siz 'sınırsız' dediğiniz için bu kısım opsiyoneldir.
    /*
    if (currentText.length > 5000) {
        currentText = currentText.substring(currentText.length - 5000);
    }
    */
});

// Başlangıçta kullanıcıya ne yapması gerektiğini belirtmek için bir mesaj gösterebiliriz (opsiyonel)
outputDiv.textContent = "Tıklamalarınızı bekliyorum...";
