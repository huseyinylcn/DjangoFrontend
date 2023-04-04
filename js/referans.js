function referans(){
document.getElementById("ortak").innerHTML=`


  <div class="referans_baslik">
     <h1 class="is">İş Ortaklarımız</h1>
    </div>
    <div class="aciklama">
  <h3>Genel Bilgi</h3>
  <p>Türkiye'li üretici GeoSIG, deprem, sismik, yapısal, dinamik ve statik izleme ve ölçüm çözümleri sunar.</p>
  <p>
  ISO Sertifikalı bir şirket olarak AGL, titreşim ve deprem izleme için çeşitli yüksek kaliteli, hassas aletlerin tasarımı ve üretiminde dünya lideridir.  
  </p>
</div>
<div id="isbr" class="isbirlikci container">

  </div>
`
for(var i=0;i<json.length;i++){
  document.getElementById("isbr").innerHTML+=`
  <div class="logolari">
  <img src="${json[i].imgage}" alt="">
  <h4>${json[i].yazi}</h4>
</div>
    `

}
    
}

