let showname=document.getElementById('show_name');
let buttonclick=document.getElementById('inspectbtn');
function printdata(data){
  const cleardata=document.querySelector('.right');
    cleardata.innerHTML='';

    const dataItem = document.createElement('div')
    dataItem.classList.add('right2');

    const dataitem=document.createElement('p');
    if(!data){
      dataitem.textContent="--";
    }else{
      dataitem.textContent = data.status;
    }
    dataItem.appendChild(dataitem);

    const dataitem1=document.createElement('p');
    dataitem1.textContent = data.premiered;
    dataItem.appendChild(dataitem1);

    const dataitem2=document.createElement('p');
    dataitem2.textContent = data.genres[0];
    dataItem.appendChild(dataitem2);

    const dataitem4=document.createElement('p');
    dataitem4.textContent = data.language;
    dataItem.appendChild(dataitem4);

    const detailsContainer = document.querySelector('.lowerdetails .right'); // Assuming a container element
    detailsContainer.appendChild(dataItem);
}

function getshowdata(idata){
  console.log(idata);
  fetch(`https://api.tvmaze.com/singlesearch/shows?q=${idata}`)
  .then(response => response.json())
  .then(data => {
    printdata(data);
  })
  .catch(error => console.error('Error:', error));
}

//takes input data
function getshowname(){
    let shownamename=showname.value;
    getshowdata(shownamename);
  }

buttonclick.addEventListener('click',getshowname);