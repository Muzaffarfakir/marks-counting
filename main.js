let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
let s5 = document.getElementById("s5");
let s6 = document.getElementById("s6");

let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");
let m5 = document.getElementById("m5");
let m6 = document.getElementById("m6");
let marks = document.getElementById("marks");
let per = document.getElementById("percentage");

let btn = document.getElementById("btn");
let con = document.getElementById("con");
if (s1 == "" && s2 == "" && s3 == "") {
  alert('you forget to write one input field');
}

btn.addEventListener("click", (e) => {
    if (s1.value == "" || s2.value == "" || s3.value == "" || s4.value == "" || s5.value == "" || s6.value == "" && m1.value == "" || m2.value == "" || m3.value == "" || m4.value == "" || m5.value == "" || m6.value == "") {
     alert('you forget to write one input field');
   location.reload(true)
   }

  con.innerHTML = `  <table>
    <tr>
      <td>subject</td>
      <td>marks</td>
    </tr>
    <tr>
      <td>${s1.value}</td>
      <td>${m1.value}</td>

    </tr>
    <tr>
      <td>${s2.value}</td>
      <td>${m2.value}</td>

    </tr>
    <tr>
      <td>${s3.value}</td>
      <td>${m3.value}</td>

    </tr>
    <tr>
      <td>${s4.value}</td>
      <td>${m4.value}</td>

    </tr>
    <tr>
      <td>${s5.value}</td>
      <td>${m5.value}</td>
    </tr>
    <tr>
     <td>${s6.value}</td>
      <td>${m6.value}</td>

    </tr>


  </table>
`
  let t = parseInt(m1.value) + parseInt(m2.value) + parseInt(m3.value) + parseInt(m4.value) + parseInt(m5.value) + parseInt(m6.value);
  let p = parseFloat(t / 6)

  s1.value = "";
  s2.value = "";
  s3.value = "";
  s4.value = "";
  s5.value = "";
  s6.value = "";
  m1.value = "";
  m2.value = "";
  m3.value = "";
  m4.value = "";
  m5.value = "";
  m6.value = "";
  marks.innerHTML = t;
  per.innerHTML = `${p}%`;



})
