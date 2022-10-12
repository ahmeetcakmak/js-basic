let value;

const firstname = "Ahmet";
const lastname = "CAKMAK" ;

const langs = "Java,Python,C++"
 value = firstname + lastname ;

 // İsim ile arada boşluk bırakmak ıcın
 value = firstname + "" + lastname;
value = "Ahmet"
  value += "çakmak "// value = value+ "coşkun"

// karakter sayısı gösterir
  value = firstname.length


// art arda string kullanmak 
  value = firstname.concat(" ", lastname, " ", "caz")


  // harfleri küçültmek için
  value = firstname.toLowerCase()


// harfleri büyültmek için
value = firstname.toUpperCase()


// harf seçmek için kullanılır
value = firstname[0];
value = firstname[2];
value = firstname[4];

// son harfi seçer
value = firstname[firstname.length - 1];

// index of

/* HATALI YER*/ // KOD ÇALIŞMA HATASI



// // arama yapmak için kullanılır
// value = firstname.indexOf (a);
// value = firstname.indexOf (a);
// value = firstname.indexOf (A);

// split

value = langs.split(",")

//replace

value = langs.replace("Python,css")

//includes İçerisinde varmı anlamına gelir

value = langs.includes("Java")

 console.log(value)