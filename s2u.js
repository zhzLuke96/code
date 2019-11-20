const uencode = s => s.split("").map(v => v.charCodeAt() < 256 ? v : "\\u"+ (str => [str,"000"+str,"00"+str,"0"+str,str,str][str.length])(v.charCodeAt().toString(16))).join("");

const T = s => console.log(uencode(s))


T("主要是针对JSON结构的解析,这样存在DB里就很安全")
T("减少了乱码的可能, wow")
