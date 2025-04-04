
// Bucle forEach

let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let exts = ['.com', '.net', '.io', '.es']; 

// Generación estándar
pronouns.forEach(pronoun => {
  adjs.forEach(adj => {
    nouns.forEach(noun => {
      exts.forEach(ext => {
        console.log(pronoun + adj + noun + ext);
      });
    });
  });
});

// Domain hack 
nouns.forEach(noun => {
  exts.forEach(ext => {
    const extClean = ext.replace('.', '');
    if (noun.endsWith(extClean)) {
      console.log(noun.slice(0, -extClean.length) + ext + " (hack)");
    }
  });
});

// Bucle For

let p = ['the', 'our'];
let a = ['great', 'big'];
let n = ['jogger', 'racoon'];
let e = ['.com', '.net', '.io', '.es']; // ¡Ahora incluye .es!

// Generación estándar
for (let i = 0; i < p.length; i++) {
  for (let j = 0; j < a.length; j++) {
    for (let k = 0; k < n.length; k++) {
      for (let l = 0; l < e.length; l++) {
        console.log(p[i] + a[j] + n[k] + e[l]);
      }
    }
  }
}

// Domain hack (ahora generará "raco.on")
for (let k = 0; k < n.length; k++) {
  for (let l = 0; l < e.length; l++) {
    const ext = e[l].replace('.', '');
    if (n[k].endsWith(ext)) {
      console.log(n[k].slice(0, -ext.length) + e[l] + " (hack)");
    }
  }
}
