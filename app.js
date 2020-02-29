const org1_depts = [

  {

      name: 'accounting',

      children: [

          {

              name: 'accounting payable',

              children: []

          },{

              name: 'accounting receivable',

              children: []

          }

      ]

  },{

      name: 'finance',

      children: [],

  }

]



const org2_depts = [

  {

      name: 'accounting',

      children: [

          {

              name: 'accounting payable',

              children: []

          },{

              name: 'accounting receivable',

              children: [

                  {

                      name: 'cash',

                      children: []

                  },{

                      name: 'check',

                      children: []

                  }

              ]

          }

      ]

  },{

      name: 'finance',

      children:[

          {

              name:'investment',

              children: []

          }

      ]

  }

]



function PrintDepts(depts, a)
{
  var length = depts.length;
  var list = document.createElement('ul');

  list.id = "list";

  var org1 = document.getElementById('org1');
 
  for(var i = 0; i <= length-1 ; i++) {

      var item = document.createElement('li');

      item.innerText = (depts[i].name);

      list.appendChild(item);
 
      PrintDepts(depts[i].children, item);

  }
  a.appendChild(list);
}

PrintDepts(org1_depts, document.getElementById('func1'));
PrintDepts(org2_depts, document.getElementById('func2'));
