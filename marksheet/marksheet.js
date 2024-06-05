// let nam ='Name:Hina zeeshan'
// let roll ='<BR>Roll no :JS1-020'
// let teacher ='<BR> MAM SHAFAQ ANEES'

// document.write(nam + roll + teacher)

document.write('<table border = 10px>')
let eng= 78
let maths=87
let physics=84
let chem=78
let urdu=97

 document.write('<tr><th>SUBJECT</th><th>TOTAL MARKS</th><th>MARKS OBTAINED</th></tr>')
 document.write('<tr><td>English</td><td>100</td><td>',eng,'</td></tr>')
 document.write('<tr><td>maths</td><td>100</td><td>',maths,'</td></tr>')
 document.write('<tr><td>Physics</td><td>100</td><td>',physics,'</td></tr>')
 document.write('<tr><td>Chemistry</td><td>100</td><td>',chem,'</td></tr>')
 document.write('<tr><td>Urdu</td><td>100</td><td>',urdu,'</td></tr>')

 let total=eng+maths+physics+chem+urdu
 document.write('<tr><td>MARKS OBTAINED</td><td>500</td><td>', total,'</td></tr>')
 
 let per=total/500*100
 document.write('<tr><td>PERCENTAGE</td><td> 0UT OF 100%</td><td>',per,'</td></tr>')


 if (per>=80)
 {grade='A+1'}
 else if(per>=70)
 {grade='A'}
 else if(per>=60)
 {grade='B'}
else if(per>=50)
 {grade='C'}
 else if(per>=40)
 {grade='D'}
 else if(per>=30)
 {'failed'}

 document.write('<tr><td>Grade</td><td>',grade,'</td><td></td></tr>')
