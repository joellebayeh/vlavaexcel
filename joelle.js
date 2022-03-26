// hayde krmel l "services"
fetch(' https://apiexcel.herokuapp.com/next')
  .then(response => response.json())
  .then(json =>{
    var RH=document.getElementById('RH');
    var original=`
        <div class="icon"><i class="bi bi-ICON"></i></div>
        <h4 class="title"><a href="">ABC</a></h4>
        <p class="description">DEF</p>
        </div>`;
  
    for(var i=0 ; i<json.length ; i++)
    {
      var MyContent=document.createElement('div');
      var custo=original;
      custo=custo.replace('ABC',json[i].title);
      custo=custo.replace('DEF',json[i].description);
      custo=custo.replace('ICON',json[i].icons);
      MyContent.className='col-lg-4 col-md-6 icon-box';
      MyContent.innerHTML=custo;
      //MyContent.innerHTML=json[i].name;
      RH.appendChild(MyContent);

      console.log(json[i].name)
    }  
  })

  // hayde krmel yalle t7t l services
  fetch(' https://apiexcel.herokuapp.com/prev')
  .then(response => response.json())
  .then(json =>{
    var RH=document.getElementById('ser');
    var original=`
         
          <div class="card">
            <img src="imgsrc" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="">ABC</a></h5>
              <p class="card-text">DEF</p>
              <a href="#" class="btn">click here !!</a>
            </div>
          </div>`;
  
    for(var i=0 ; i<json.length ; i++)
    {
      var MyContent=document.createElement('div');
      var custo=original;
      custo=custo.replace('ABC',json[i].name);
      custo=custo.replace('DEF',json[i].email);
      // custo=custo.replace('mots',json[i].grade);
      custo=custo.replace('imgsrc',json[i].img);
      MyContent.className='col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0';
      MyContent.innerHTML=custo;
      //MyContent.innerHTML=json[i].name;
      RH.appendChild(MyContent);

      console.log(json[i].name)
    }  
  })