//   "version": "1.0.0" 1=> son MAJOR, 2=> son MINOR, 3=> son PATCH

// PATCH => dasturda qandaydur bug bo'lib  uni tuzatilganda shu patch versiyasiy o'zgartiriladi.

// MINOR => dasturga yangi hususiyat qo'shilganda oshiriladi bu qanday hususiyatgi dasturni api sini buzmaydigan hususiyat qo'shilganda oshiriladi. Bunday o'zgarish NONE BREAKING CHANGE deyiladi, bu o'zgarsa patch ham 0 bo'ladi.

// MAJOR => dasturga uni api si o'zgarishiga sabab bo'ladigan katta o'zgarish qo'shilganda uning major versiyasi o'zgaradi.Bu o'zgarsa minor bilan patch ham 0 bo'ladi chunki bu chiqgan yangi versiyada hali bug chiqmagan bo'ladi bug chiqganidan keyin u o'zgaradi.

// "^5.7.7" => caret ^ // v5.x
// "tilda5.7.7" => tilda v5.7.x

// npm list => loyihamizda ishlatilgan paketlarni versiyasini bilish uchun
// npm list --dept=0 => faqat biz ornatgan paketlarni o'zinigina ko'rish uchun


// npm view => bu orqali biron bir package haqida bilmoqchi bo'lsak ishlatamiz
// example npm view mongoose
