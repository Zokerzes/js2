const leftMsgsSnd = document.getElementById('lsend');
const rightMsgsSnd = document.getElementById('rsend');


leftMsgsSnd.addEventListener('click', function (e) {
  e.preventDefault();
  let text = document.querySelector('#leftmsgtext').value;
  AddRow(text);
  document.querySelector("#leftmsgtext").value = "";
})

rightMsgsSnd.addEventListener('click', function (e) {
  e.preventDefault();
  let text = document.querySelector('#rigtmsgtext').value;
  AddRowL(text)
  document.querySelector("#rigtmsgtext").value = "";
})


function AddRow(text) {
  let area = document.createElement('div');
  let areaMessage = document.createElement('div');
  area.className = "areaStyle";
  areaMessage.className = "areaMessageStyle";
  areaMessage.innerText = text;
  area.append(areaMessage);
  cp.append(area);
}

function AddRowL(text) {
  let area = document.createElement('div');
  let areaMessage = document.createElement('div');
  area.className = "areaStyleL";
  areaMessage.className = "areaMessageStyleL";
  areaMessage.innerText = text;
  area.append(areaMessage);
  cp.append(area);
}