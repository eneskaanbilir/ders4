const alisverisListesi = [ 
    {ad:"Elma", resim:"🍎", adet:1}, 
    {ad:"Armut", resim:"🍐", adet: 3}, 
    {}, 
    {} ];

const kokEtiket = document.querySelector("#root")

alisverisListesi.forEach(listeyiGoster); //for each her obje özelinde döngü anlamına gelir.

function listeyiGoster(urun){
    if(urun.ad !== undefined) { //veya if yapısının içerisine sadece urun.ad diye de yazabiliriz bu da urun.ad tanımlıysa çalıştır anlamına geliyor.
        let html = `<span> ${urun.resim} </span>   <span> ${urun.ad} </span>   <span> ${urun.adet}`;
        let div = document.createElement("div");
        div.innerHTML = html
    
        kokEtiket.append(div);
    }
    }

let butonEkle = document.createElement("button");
butonEkle.textContent = "+ Ekle";
kokEtiket.prepend(butonEkle);

let inputUrunAd = document.createElement("input");
inputUrunAd.type = "text";
inputUrunAd.placeholder = "Ürün adı";
butonEkle.after(inputUrunAd);

let inputUrunResim = document.createElement("input");
inputUrunResim.type = "text";
inputUrunResim.placeholder = "Ürün resmi";
inputUrunAd.after(inputUrunResim);

let inputUrunNo = document.createElement("input");
inputUrunNo.type = "text";
inputUrunNo.placeholder = "Ürün adet/kilo";
inputUrunResim.after(inputUrunNo);

butonEkle.addEventListener("click", function(){
    let yeniUrun = {
        ad: inputUrunAd.value,
        resim: inputUrunResim.value,
        adet: parseInt(inputUrunNo.value)
    }
    alisverisListesi.push(yeniUrun);

    //Aşşağıdaki kodlar eski ürün etiketlerini seçer  ve domdan kaldırır
    let eskiUrunEtiketleri = kokEtiket.querySelectorAll("div")
    eskiUrunEtiketleri.forEach( function(etiket){
        etiket.remove()
    } )

    alisverisListesi.forEach(listeyiGoster); //listenin güncel hal isayfada tekrar gösterilir //render deniyor bu işleme    

    setTimeout(function(){
        inputUrunAd.value = ""
        inputUrunNo.value = ""
        inputUrunResim.value = ""

    })

})
